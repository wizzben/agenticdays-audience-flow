import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { buildModel, roundCounts, normalizeSessions, conferenceWindow, makeCurve } from '../src/model/estimate.js';
import { parseRecording, matchRoom, normalizeLevel, mergeSamples } from '../src/model/recording.js';
import { synthRecording, toJsonl } from '../src/model/synth.js';
import { CROWD_TOTAL, ROOMS } from '../src/model/config.js';

const raw = JSON.parse(fs.readFileSync(new URL('../data/sessions.json', import.meta.url)));
const win = conferenceWindow(raw);

test('window is 12:00-17:00 Zurich on the conference day', () => {
  assert.equal(new Date(win.t0).toISOString(), '2026-11-20T11:00:00.000Z');
  assert.equal(win.t1 - win.t0, 5 * 3600000);
});

test('23 afternoon sessions are in scope', () => {
  const m = buildModel({ sessions: raw, recording: [] });
  assert.equal(m.sessions.length, 23);
});

test('room-name matching is loose', () => {
  assert.equal(matchRoom('Studio 3 AB'), 'studio3');
  assert.equal(matchRoom('studio3'), 'studio3');
  assert.equal(matchRoom(' STUDIO 4 '), 'studio4');
  assert.equal(matchRoom('Millennium'), 'millennium');
  assert.equal(matchRoom('Hub 2'), 'hub2');
  assert.equal(matchRoom('Hub 9'), null);
  assert.equal(matchRoom('Studio 9'), null);
  assert.equal(matchRoom('Foyer'), null);
  assert.equal(matchRoom(null), null);
  assert.equal(matchRoom(42), null);
});

test('level normalisation handles labels and unknown values', () => {
  assert.equal(normalizeLevel('open'), 'open');
  assert.equal(normalizeLevel('FULL'), 'full');
  assert.equal(normalizeLevel('weird', 'Few seats left'), 'filling');
  assert.equal(normalizeLevel('weird', 'No seats left'), 'full');
  assert.equal(normalizeLevel(undefined, 'Started'), 'running');
  assert.equal(normalizeLevel('weird', 'nope'), null);
  assert.equal(normalizeLevel(null), null);
});

test('garbled / sparse / empty recordings do not throw', () => {
  const garbage = ['', 'not json', '{"t":"x"}', '{"t":1795174108841}', '{"t":1795174108841,"rooms":[]}', '{"t":5,"rooms":{}}',
    '{"t":1795174108841,"rooms":{"millennium":{"level":"???","target":7},"nowhere":{"level":"open"},"studio4":null}}', '[1,2]', 'null'].join('\n');
  const s = parseRecording(garbage);
  assert.equal(s.length, 1);
  assert.equal(s[0].rooms.millennium.level, null);
  assert.equal(s[0].rooms.millennium.target, '7');
  assert.ok(!('nowhere' in s[0].rooms));
  for (const rec of [[], s, parseRecording(''), parseRecording(null)]) {
    const m = buildModel({ sessions: raw, recording: rec });
    assert.equal(m.sessions.length, 23);
    for (const arr of m.counts) for (const v of arr) assert.ok(Number.isFinite(v));
  }
});

test('people are conserved at every step (exact, integer)', () => {
  for (const rec of [[], synthRecording(raw, { seed: 3 }), synthRecording(raw, { seed: 4, gaps: true })]) {
    const m = buildModel({ sessions: raw, recording: rec });
    for (let k = 0; k < m.K; k++) {
      let sumF = 0, sumI = 0;
      for (let i = 0; i < m.locIds.length; i++) { sumF += m.counts[i][k]; sumI += m.intCounts[i][k]; assert.ok(m.counts[i][k] >= 0); }
      assert.ok(Math.abs(sumF - CROWD_TOTAL) < 0.01, `float sum ${sumF} at ${k}`);
      assert.equal(sumI, CROWD_TOTAL);
    }
    // every agent has exactly one valid location and per-step histogram equals intCounts
    const L = m.locIds.length;
    for (const k of [0, 100, 300, m.K - 1]) {
      const h = new Array(L).fill(0);
      for (let a = 0; a < m.crowd; a++) h[m.loc[a * m.K + k]]++;
      for (let i = 0; i < L; i++) assert.equal(h[i], m.intCounts[i][k]);
    }
  }
});

test('room counts never exceed capacity', () => {
  const m = buildModel({ sessions: raw, recording: synthRecording(raw, { seed: 11, popularity: Object.fromEntries(normalizeSessions(raw).map((s) => [s.id, 1])) }) });
  for (const r of ROOMS) {
    const arr = m.counts[m.locIds.indexOf(r.id)];
    for (const v of arr) assert.ok(v <= r.cap + 1e-3, `${r.id} ${v}`);
  }
});

test('roundCounts sums exactly', () => {
  for (const vals of [[1.2, 3.7, 5.1], [0, 0, 0], [10, 20, 30.5], [0.5, 0.5, 0.5, 0.5]]) {
    const total = Math.round(vals.reduce((a, b) => a + b, 0)) || 3;
    assert.equal(roundCounts(vals, total).reduce((a, b) => a + b, 0), total);
  }
});

function oneSession(levels, cap = 50) {
  const S = win.t0 + 3600000, E = S + 30 * 60000;
  const session = { id: 'x', start: S, end: E, roomId: 'studio4', format: 'Talk' };
  const pts = levels.map(([dm, level]) => ({ t: S + dm * 60000, level }));
  return { session, S, E, curve: makeCurve(session, pts, { priorPeak: 0.6 }), pts, cap };
}

test('occupancy is continuous and monotone through open -> filling -> full', () => {
  const { S, curve } = oneSession([[-30, 'open'], [-20, 'filling'], [-10, 'full'], [0, 'running']]);
  let prev = -1;
  for (let m = -30; m <= 0; m += 0.5) {
    const v = curve(S + m * 60000);
    assert.ok(v >= prev - 1e-9, `non-monotone at ${m}`);
    prev = v;
  }
  assert.ok(curve(S - 25 * 60000) < 0.7);
  assert.ok(curve(S - 15 * 60000) >= 0.7 && curve(S - 15 * 60000) <= 0.95);
  assert.ok(curve(S + 5 * 60000) >= 0.95);
});

test('running carries the last known fill level forward, then the room empties', () => {
  const { S, E, curve } = oneSession([[-20, 'open'], [-10, 'filling'], [0, 'running']]);
  const atStart = curve(S + 60000), mid = curve(S + 15 * 60000);
  assert.ok(Math.abs(atStart - mid) < 1e-6);
  assert.ok(mid > 0.85 && mid <= 0.95);
  assert.ok(curve(E + 10 * 60000) < 1e-6);
});

test('a session that stays open ranks below filling below full (same timing)', () => {
  const base = (lv) => {
    const rec = [];
    const s0 = normalizeSessions(raw).find((s) => s.roomId === 'studio4' && s.start >= win.t0 + 3600000);
    for (let t = s0.start - 40 * 60000; t < s0.end; t += 30000) {
      const m = (s0.start - t) / 60000;
      let level = 'open';
      if (t >= s0.start) level = 'running';
      else if (lv !== 'open' && m <= 12) level = lv === 'full' ? 'full' : 'filling';
      rec.push({ t, rooms: { studio4: { level, label: '', target: s0.id } } });
    }
    const m = buildModel({ sessions: raw, recording: rec });
    return m.sessions.find((x) => x.id === s0.id);
  };
  const o = base('open'), f = base('filling'), u = base('full');
  assert.ok(u.pop.score > f.pop.score, `full ${u.pop.score} > filling ${f.pop.score}`);
  assert.ok(f.pop.score > o.pop.score, `filling ${f.pop.score} > open ${o.pop.score}`);
  assert.ok(u.pop.unmet && !o.pop.unmet);
});

test('reaching full earlier ranks above reaching filling at the start', () => {
  const early = oneSession([[-30, 'open'], [-25, 'full'], [0, 'running']]);
  const late = oneSession([[-30, 'open'], [0, 'filling'], [1, 'running']]);
  assert.ok(early.curve(early.S - 10 * 60000) > late.curve(late.S - 10 * 60000));
});

test('unknown levels are ignored, not fatal', () => {
  const s0 = normalizeSessions(raw).find((s) => s.roomId === 'millennium' && s.start >= win.t0 + 3600000);
  const rec = parseRecording(toJsonl([{ t: s0.start - 600000, rooms: { millennium: { level: 'bogus', label: 'x', target: s0.id } } }, { t: s0.start - 300000, rooms: { millennium: { level: 'filling', target: s0.id } } }]));
  const m = buildModel({ sessions: raw, recording: rec });
  const si = m.sessions.find((x) => x.id === s0.id);
  assert.equal(si.samples, 1);
  assert.ok(si.hasData);
});

test('full synthetic day: recorded part is flagged, future is projected', () => {
  const rec = synthRecording(raw, { seed: 5, to: win.t0 + 2 * 3600000 });
  const m = buildModel({ sessions: raw, recording: rec });
  const kEarly = Math.round((win.t0 + 1.5 * 3600000 - m.t0) / m.step);
  const kLate = Math.round((win.t0 + 3.5 * 3600000 - m.t0) / m.step);
  assert.equal(m.covered[kEarly], 1);
  assert.equal(m.covered[kLate], 0);
  const lvl = m.levelAt('studio4', win.t0 + 1.5 * 3600000);
  assert.equal(lvl.rec, true);
  assert.equal(m.levelAt('studio4', win.t0 + 3.5 * 3600000).rec, false);
  assert.ok(m.sessions.some((s) => !s.hasData) && m.sessions.some((s) => s.hasData));
});

test('topics: curated + a few keywords, capped near 20-24, weights sum to 1 per session', () => {
  const m = buildModel({ sessions: raw, recording: [] });
  assert.ok(m.topics.length >= 18 && m.topics.length <= 24, `topics ${m.topics.length}`);
  assert.ok(m.topics.some((t) => t.kind === 'keyword'), 'has keyword topics');
  assert.ok(m.topics.some((t) => t.kind === 'curated'));
  for (const s of m.sessions) {
    if (!s.topics.length) continue;
    assert.ok(Math.abs(s.topics.reduce((a, b) => a + b.w, 0) - 1) < 1e-6);
  }
  // the session without curated topics still gets topics from keywords
  const noCur = m.sessions.find((s) => s.id === '1309668');
  assert.ok(noCur && noCur.topics.length > 0, 'keyword topics for session without curated topics');
  assert.equal(new Set(m.topics.map((t) => t.id)).size, m.topics.length);
});

test('topic cumulative series is non-decreasing and max is positive', () => {
  const m = buildModel({ sessions: raw, recording: synthRecording(raw, { seed: 9 }) });
  for (const arr of m.topicCum) for (let k = 1; k < m.K; k++) assert.ok(arr[k] >= arr[k - 1] - 1e-4);
  assert.ok(m.topicMaxCum > 0 && m.topicMaxNow > 0);
});

test('mergeSamples dedupes by timestamp, later wins', () => {
  const a = [{ t: 1e12 + 1, rooms: { x: 1 } }, { t: 1e12 + 2, rooms: {} }];
  const b = [{ t: 1e12 + 2, rooms: { y: 2 } }, { t: 1e12 + 3, rooms: {} }];
  const m = mergeSamples(a, b);
  assert.equal(m.length, 3);
  assert.deepEqual(m[1].rooms, { y: 2 });
});

test('synthetic generator output round-trips through the parser', () => {
  const rec = synthRecording(raw, { seed: 1 });
  const parsed = parseRecording(toJsonl(rec));
  assert.equal(parsed.length, rec.length);
  assert.ok(rec.length > 400);
});

test('real data snapshot on disk (if present) builds a model', () => {
  const p = new URL('../data/recording-embedded.jsonl', import.meta.url);
  if (!fs.existsSync(p)) return;
  const m = buildModel({ sessions: raw, recording: parseRecording(fs.readFileSync(p, 'utf8')) });
  assert.equal(m.sessions.length, 23);
});
