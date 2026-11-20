// The estimation model: room level samples -> occupancy curves -> popularity -> conserved flow -> topic series.
// Pure functions, no DOM. All times are ms since epoch.
import {
  CROWD_TOTAL, HUB_MIN_FRACTION, STEP_MS, WINDOW_START_HOUR, WINDOW_HOURS, ROOMS, HUBS, LOC_ORDER, BANDS, TAU,
  GAP_MS, COVER_MS, EXIT_MS, ARRIVAL_MS, POP_W, SPEED_FULL_MS, priorPeak,
} from './config.js';
import { matchRoom } from './recording.js';
import { extractTopics, normTopic } from './topics.js';

const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);
export const smooth = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };

/** Normalise raw sessions.json entries. Returns all sessions (with parsed times) in start order. */
export function normalizeSessions(raw) {
  const list = Array.isArray(raw) ? raw : (raw && raw.sessions) || [];
  const out = [];
  for (const s of list) {
    if (!s || !s.id) continue;
    const start = Date.parse(s.starts_at), end = Date.parse(s.ends_at);
    if (!Number.isFinite(start) || !Number.isFinite(end)) continue;
    out.push({
      id: String(s.id), title: s.title || '', format: s.format || '', start, end,
      roomId: matchRoom(s.room), roomName: s.room || '', topicsRaw: (s.topics || []).map(normTopic).filter(Boolean),
      desc: s.description || '', tools: s.main_tools || '', speakers: (s.speakers || []).map((x) => x.name).filter(Boolean),
      company: (s.speakers || []).map((x) => x.company).filter(Boolean), url: s.url || '',
    });
  }
  return out.sort((a, b) => a.start - b.start);
}

/** Conference window (12:00 - 17:00 local) derived from the sessions' own ISO date + offset. */
export function conferenceWindow(rawSessions, hour = WINDOW_START_HOUR, hours = WINDOW_HOURS) {
  const list = Array.isArray(rawSessions) ? rawSessions : (rawSessions && rawSessions.sessions) || [];
  const first = list.find((s) => typeof s.starts_at === 'string' && /^\d{4}-\d\d-\d\dT.*([+-]\d\d:\d\d|Z)$/.test(s.starts_at));
  const iso = first ? first.starts_at : '2026-11-20T09:00:00+01:00';
  const day = iso.slice(0, 10), off = iso.endsWith('Z') ? '+00:00' : iso.slice(-6);
  const t0 = Date.parse(`${day}T${String(hour).padStart(2, '0')}:00:00${off}`);
  return { t0, t1: t0 + hours * 3600000 };
}

export function levelFromFill(f) {
  if (f >= 0.95) return 'full';
  if (f >= 0.7) return 'filling';
  return 'open';
}

/** Build per-session timeline points from the recording (only samples that belong to the session). */
function sessionPoints(session, roomSessions, samples) {
  const pts = [];
  const ids = new Set(roomSessions.map((s) => s.id));
  for (const smp of samples) {
    const r = smp.rooms[session.roomId];
    if (!r || !r.level) continue;
    let belongs;
    if (r.target && ids.has(r.target)) belongs = r.target === session.id;
    else {
      // no usable target: attribute by schedule (latest session started up to 30 min ahead)
      let best = null;
      for (const s of roomSessions) if (s.start - 30 * 60000 <= smp.t && smp.t < s.end && (!best || s.start > best.start)) best = s;
      belongs = best && best.id === session.id;
    }
    if (belongs) pts.push({ t: smp.t, level: r.level });
  }
  return pts;
}

/**
 * Occupancy function (fraction of capacity) for one session given its level points.
 * `prior` is {peak} used where there is no data.
 */
export function makeCurve(session, pts, ctx) {
  const { S, E } = { S: session.start, E: session.end };
  const prior = ctx.priorPeak;
  const priorAt = (t) => prior * smooth((t - (S - ARRIVAL_MS)) / (ARRIVAL_MS + 2 * 60000));
  const nonRun = (i, t) => {
    const p = pts[i], next = pts[i + 1];
    const [lo, hi] = BANDS[p.level];
    let q;
    if (next && next.t - p.t <= GAP_MS) q = smooth((t - p.t) / (next.t - p.t));
    else {
      const dt = Math.max(0, (next ? Math.min(t, next.t) : t) - p.t);
      q = 1 - Math.exp(-dt / TAU[p.level]);
    }
    return lo + (hi - lo) * q;
  };
  // carry value for every running point
  const carry = new Array(pts.length);
  let lastCarry = null;
  for (let i = 0; i < pts.length; i++) {
    if (pts[i].level === 'running') {
      if (lastCarry == null) {
        // find the last non-running point before
        let j = i - 1;
        while (j >= 0 && pts[j].level === 'running') j--;
        lastCarry = j >= 0 ? nonRun(j, pts[i].t) : ctx.carryIn != null ? ctx.carryIn : prior;
      }
      carry[i] = lastCarry;
    } else lastCarry = null;
  }
  const lastPt = pts.length ? pts[pts.length - 1] : null;
  const held = (t) => {
    // value ignoring the exit decay
    if (!pts.length) return priorAt(t);
    if (t < pts[0].t) {
      const first = pts[0];
      const v0 = first.level === 'running' ? carry[0] : nonRun(0, first.t);
      const a = Math.min(S - ARRIVAL_MS, first.t);
      return v0 * smooth((t - a) / Math.max(60000, first.t - a));
    }
    let lo = 0, hi = pts.length - 1;
    while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (pts[mid].t <= t) lo = mid; else hi = mid - 1; }
    const p = pts[lo];
    let v = p.level === 'running' ? carry[lo] : nonRun(lo, t);
    if (lo === pts.length - 1 && t > lastPt.t + COVER_MS && p.level !== 'running') v = Math.max(v, priorAt(t));
    return v;
  };
  const vEnd = () => held(E);
  let endV = null;
  return (t) => {
    if (t >= E) {
      if (endV == null) endV = vEnd();
      return endV * (1 - smooth((t - E) / EXIT_MS));
    }
    return held(t);
  };
}

function firstTimeAtLeast(pts, minLevel) {
  const order = { open: 0, filling: 1, full: 2, running: 3 };
  for (const p of pts) if (order[p.level] >= order[minLevel] && p.level !== 'running') return p.t;
  return null;
}

/** Popularity from a data-backed session: fill level reached, speed of fill, capacity pressure. */
export function popularityFromData(session, cap, pts, peakFill) {
  const tFull = firstTimeAtLeast(pts, 'full');
  const tFill = firstTimeAtLeast(pts, 'filling');
  const reachFilling = tFill ?? tFull;
  const speed = reachFilling == null ? 0 : clamp((session.start - reachFilling) / SPEED_FULL_MS, 0, 1);
  const small = cap <= 100;
  const fullSeen = pts.some((p) => p.level === 'full');
  const fillSeen = pts.some((p) => p.level === 'filling');
  const pressure = fullSeen ? (small ? 1 : 0.5) : fillSeen ? (small ? 0.4 : 0.2) : 0;
  const score = POP_W.fill * peakFill + POP_W.speed * speed + POP_W.pressure * pressure;
  const first = pts.length ? pts[0] : null;
  return {
    score, speed, pressure, tFull, tFilling: tFill,
    unmet: fullSeen && small,
    confident: !!first && first.level !== 'running',
  };
}

/** Pure helper: the crowd assignment. counts per location per step (floats) -> integer counts summing to total. */
export function roundCounts(vals, total) {
  const floors = vals.map((v) => Math.max(0, Math.floor(v)));
  let rest = total - floors.reduce((a, b) => a + b, 0);
  const idx = vals.map((v, i) => [Math.max(0, v) - floors[i], i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
  let k = 0;
  while (rest > 0) { floors[idx[k % idx.length][1]]++; rest--; k++; }
  k = idx.length - 1;
  while (rest < 0) { const i = idx[k][1]; if (floors[i] > 0) { floors[i]--; rest++; } k = (k - 1 + idx.length) % idx.length; }
  return floors;
}

function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}

/**
 * Build the complete model.
 * @param {{sessions:any, recording:Array, now?:number, crowd?:number, t0?:number, t1?:number}} input
 */
export function buildModel(input) {
  const crowd = input.crowd ?? CROWD_TOTAL;
  const all = normalizeSessions(input.sessions);
  const win = conferenceWindow(input.sessions);
  const t0 = input.t0 ?? win.t0, t1 = input.t1 ?? win.t1;
  const sessions = all.filter((s) => s.start >= t0 && s.start < t1 && s.roomId && ROOMS.some((r) => r.id === s.roomId));
  const samples = (input.recording || []).filter((s) => s && Number.isFinite(s.t));
  const K = Math.floor((t1 - t0) / STEP_MS) + 1;
  const capOf = Object.fromEntries(ROOMS.map((r) => [r.id, r.cap]));
  const sampleTimes = samples.map((s) => s.t);
  const lastT = sampleTimes.length ? sampleTimes[sampleTimes.length - 1] : null;
  const firstT = sampleTimes.length ? sampleTimes[0] : null;

  // coverage: is there a sample within COVER_MS (or bridging a gap <= GAP_MS)?
  const covered = new Uint8Array(K);
  {
    let j = 0;
    for (let k = 0; k < K; k++) {
      const t = t0 + k * STEP_MS;
      while (j < sampleTimes.length - 1 && sampleTimes[j + 1] <= t) j++;
      const a = sampleTimes[j], b = sampleTimes[j + 1];
      let c = 0;
      if (a != null) {
        if (Math.abs(t - a) <= COVER_MS) c = 1;
        else if (b != null && t > a && b - a <= GAP_MS && t < b) c = 1;
        if (b != null && Math.abs(b - t) <= COVER_MS) c = 1;
      }
      covered[k] = c;
    }
  }

  const byRoom = {};
  for (const r of ROOMS) byRoom[r.id] = sessions.filter((s) => s.roomId === r.id);
  const pointsOf = new Map(sessions.map((s) => [s.id, sessionPoints(s, byRoom[s.roomId], samples)]));

  // topics
  const { topics, sessionTopics } = extractTopics(all.length ? all : sessions, sessions);
  const topicIdx = new Map(topics.map((t, i) => [t.id, i]));

  // two passes: priors without topic boost, then with topic heat from data-backed sessions
  let heat = new Map();
  const info = new Map();
  for (let pass = 0; pass < 2; pass++) {
    for (const s of sessions) {
      const cap = capOf[s.roomId];
      const pts = pointsOf.get(s.id);
      let pk = priorPeak(s, cap);
      const ts = sessionTopics.get(s.id) || [];
      if (pass === 1 && ts.length) {
        let hs = 0, hw = 0;
        for (const e of ts) { if (heat.has(e.id)) { hs += heat.get(e.id) * e.w; hw += e.w; } }
        if (hw > 0) pk = clamp(pk * (1 + 0.5 * (hs / hw - 0.5)), 0.15, 1);
      }
      // carry into a back-to-back session of the same room
      const idx = byRoom[s.roomId].indexOf(s);
      const prev = idx > 0 ? byRoom[s.roomId][idx - 1] : null;
      let carryIn = null;
      if (prev && s.start - prev.end <= 15 * 60000 && info.get(prev.id)?.hasData) carryIn = info.get(prev.id).finalFill;
      const curve = makeCurve(s, pts, { priorPeak: pk, carryIn });
      const hasData = pts.length > 0;
      let peak = 0;
      for (let t = s.start - ARRIVAL_MS; t <= s.end; t += STEP_MS) peak = Math.max(peak, curve(t));
      const finalFill = curve(s.end - 1);
      let pop;
      if (hasData) pop = popularityFromData(s, cap, pts, peak);
      else {
        const pressure = pk >= 0.95 ? (cap <= 100 ? 1 : 0.5) : 0;
        pop = { score: POP_W.fill * pk + POP_W.speed * 0.3 + POP_W.pressure * pressure, speed: 0.3, pressure, unmet: false, confident: false, tFull: null, tFilling: null };
      }
      info.set(s.id, { curve, hasData, peak, finalFill, pop, prior: pk });
    }
    // topic heat: mean normalised popularity of data-backed sessions per topic
    const acc = new Map();
    for (const s of sessions) {
      const i = info.get(s.id);
      if (!i.hasData) continue;
      for (const e of sessionTopics.get(s.id) || []) {
        const a = acc.get(e.id) || { s: 0, w: 0 };
        a.s += i.pop.score * e.w; a.w += e.w; acc.set(e.id, a);
      }
    }
    heat = new Map([...acc].map(([k, a]) => [k, clamp(a.s / a.w, 0, 1)]));
  }

  // ---- grid series
  const locIds = LOC_ORDER;
  const L = locIds.length;
  const locIndex = Object.fromEntries(locIds.map((id, i) => [id, i]));
  const counts = locIds.map(() => new Float32Array(K)); // persons per location (scaled, conserved)
  const roomRec = {}; // per room Uint8Array recorded flag
  for (const r of ROOMS) roomRec[r.id] = new Uint8Array(K);
  const overflow = new Float32Array(K); // unmet demand: people who would fill rooms beyond the crowd
  const sessCount = new Map(sessions.map((s) => [s.id, new Float32Array(K)])); // scaled persons per session
  const sessRec = new Map(sessions.map((s) => [s.id, new Uint8Array(K)]));
  // raw per-session persons per step, lightly smoothed (+-2 steps) so jittery level flips do not make people flicker
  const rawVals = new Map();
  for (const s of sessions) {
    const i = info.get(s.id), cap = capOf[s.roomId];
    const a = new Float32Array(K), b = new Float32Array(K);
    for (let k = 0; k < K; k++) {
      const t = t0 + k * STEP_MS;
      a[k] = t < s.start - ARRIVAL_MS - 10 * 60000 || t > s.end + EXIT_MS + 1000 ? 0 : i.curve(t) * cap;
    }
    for (let k = 0; k < K; k++) { let sum = 0, n = 0; for (let d = -2; d <= 2; d++) { const j = k + d; if (j >= 0 && j < K) { sum += a[j]; n++; } } b[k] = sum / n; }
    rawVals.set(s.id, b);
  }
  const hubW = HUBS.reduce((a, h) => a + h.w, 0);
  for (let k = 0; k < K; k++) {
    const t = t0 + k * STEP_MS;
    const raw = {};
    let sum = 0;
    for (const r of ROOMS) raw[r.id] = 0;
    for (const s of sessions) {
      const i = info.get(s.id);
      if (t < s.start - ARRIVAL_MS - 10 * 60000 || t > s.end + EXIT_MS + 1000) continue;
      const v = rawVals.get(s.id)[k];
      if (v === 0 && (t < s.start - ARRIVAL_MS - 10 * 60000 || t > s.end + EXIT_MS + 1000)) continue;
      raw[s.roomId] += v;
      sessCount.get(s.id)[k] = v;
      sessRec.get(s.id)[k] = i.hasData && covered[k] ? 1 : 0;
    }
    // overlap of an exiting and an arriving session can never exceed the seats of the room
    for (const s of sessions) {
      const cap = capOf[s.roomId];
      if (raw[s.roomId] > cap) { const q = cap / raw[s.roomId]; sessCount.get(s.id)[k] *= q; }
    }
    for (const r of ROOMS) { if (raw[r.id] > r.cap) raw[r.id] = r.cap; sum += raw[r.id]; }
    const allowed = crowd * (1 - HUB_MIN_FRACTION);
    const f = sum > allowed ? allowed / sum : 1;
    overflow[k] = sum - sum * f;
    let used = 0;
    for (const r of ROOMS) { const c = raw[r.id] * f; counts[locIndex[r.id]][k] = c; used += c; }
    for (const s of sessions) sessCount.get(s.id)[k] *= f;
    const hubTotal = crowd - used;
    for (const h of HUBS) counts[locIndex[h.id]][k] = (hubTotal * h.w) / hubW;
    // a room is "recorded" when there is coverage and it has data for its active session (or no session is active)
    for (const r of ROOMS) {
      let rec = covered[k];
      if (rec) {
        const act = byRoom[r.id].filter((s) => t >= s.start - ARRIVAL_MS && t <= s.end + EXIT_MS);
        if (act.length && act.every((s) => !info.get(s.id).hasData)) rec = 0;
      }
      roomRec[r.id][k] = rec;
    }
  }

  // ---- topic series (audience-minutes cumulative, and headcount "now")
  const T = topics.length;
  const topicNow = topics.map(() => new Float32Array(K));
  const topicCum = topics.map(() => new Float32Array(K));
  const topicProjNow = topics.map(() => new Float32Array(K));
  const topicProjCum = topics.map(() => new Float32Array(K));
  for (const s of sessions) {
    const ts = sessionTopics.get(s.id) || [];
    const sc = sessCount.get(s.id), sr = sessRec.get(s.id);
    for (const e of ts) {
      const ti = topicIdx.get(e.id);
      if (ti == null) continue;
      const now = topicNow[ti], cum = topicCum[ti], pn = topicProjNow[ti], pc = topicProjCum[ti];
      for (let k = 0; k < K; k++) {
        const v = sc[k] * e.w;
        if (v === 0) continue;
        now[k] += v;
        if (!sr[k]) pn[k] += v;
        const inc = (v * STEP_MS) / 60000;
        cum[k] += inc; // temporarily the per-step increment
        if (!sr[k]) pc[k] += inc;
      }
    }
  }
  for (let ti = 0; ti < T; ti++) {
    let a = 0, b = 0;
    for (let k = 0; k < K; k++) { a += topicCum[ti][k]; topicCum[ti][k] = a; b += topicProjCum[ti][k]; topicProjCum[ti][k] = b; }
  }
  const maxOf = (arrs) => arrs.reduce((m, a) => { for (let k = 0; k < K; k++) if (a[k] > m) m = a[k]; return m; }, 1e-9);

  // ---- agent assignment (exact conservation): integer counts per step, agents ranked by a fixed permutation
  const N = crowd;
  const rng = mulberry32(20261120);
  const perm = Array.from({ length: N }, (_, i) => i);
  for (let i = N - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [perm[i], perm[j]] = [perm[j], perm[i]]; }
  const rank = new Int32Array(N); // agent -> rank
  perm.forEach((a, r) => { rank[a] = r; });
  const loc = new Int8Array(N * K);
  const intCounts = locIds.map(() => new Int16Array(K));
  const cum = new Array(L + 1);
  for (let k = 0; k < K; k++) {
    const ic = roundCounts(locIds.map((_, i) => counts[i][k]), N);
    cum[0] = 0;
    for (let i = 0; i < L; i++) { cum[i + 1] = cum[i] + ic[i]; intCounts[i][k] = ic[i]; }
    for (let a = 0; a < N; a++) {
      const r = rank[a];
      let i = 0;
      while (r >= cum[i + 1]) i++;
      loc[a * K + k] = i;
    }
  }

  const sessionInfo = sessions.map((s) => {
    const i = info.get(s.id);
    const cap = capOf[s.roomId];
    return {
      ...s, cap, topics: sessionTopics.get(s.id) || [], hasData: i.hasData, pop: i.pop, peakFill: i.peak,
      peakCount: i.peak * cap, finalFill: i.finalFill, prior: i.prior, samples: pointsOf.get(s.id).length, points: pointsOf.get(s.id),
      curve: i.curve,
    };
  });

  const model = {
    t0, t1, K, step: STEP_MS, crowd: N, sessions: sessionInfo, rooms: ROOMS, hubs: HUBS, locIds, topics,
    counts, intCounts, roomRec, overflow, covered, loc, topicNow, topicCum, topicProjNow, topicProjCum,
    topicMaxNow: maxOf(topicNow), topicMaxCum: maxOf(topicCum), lastSample: lastT, firstSample: firstT, nSamples: samples.length,
    samples, byRoom,
  };
  model.at = (t) => sampleAt(model, t);
  model.levelAt = (roomId, t) => levelAt(model, roomId, t);
  return model;
}

/** Interpolated state at time t. Returns plain object (allocates; use for UI, not for the render hot loop). */
export function sampleAt(model, t) {
  const f = clamp((t - model.t0) / model.step, 0, model.K - 1);
  const k0 = Math.floor(f), k1 = Math.min(model.K - 1, k0 + 1), a = f - k0;
  const rooms = {};
  for (const r of model.rooms) {
    const arr = model.counts[model.locIds.indexOf(r.id)];
    rooms[r.id] = { count: arr[k0] * (1 - a) + arr[k1] * a, fill: (arr[k0] * (1 - a) + arr[k1] * a) / r.cap, rec: !!model.roomRec[r.id][a < 0.5 ? k0 : k1] };
  }
  const hubs = {};
  for (const h of model.hubs) {
    const arr = model.counts[model.locIds.indexOf(h.id)];
    hubs[h.id] = { count: arr[k0] * (1 - a) + arr[k1] * a };
  }
  return { t, rooms, hubs, covered: !!model.covered[a < 0.5 ? k0 : k1], overflow: model.overflow[k0] * (1 - a) + model.overflow[k1] * a };
}

/** Level of a room at time t: last recorded level (if covered) or a projection derived from occupancy. */
export function levelAt(model, roomId, t) {
  const f = clamp(Math.round((t - model.t0) / model.step), 0, model.K - 1);
  if (model.roomRec[roomId][f]) {
    // last sample at or before t for the room
    const s = model.samples;
    let lo = 0, hi = s.length - 1, best = -1;
    while (lo <= hi) { const m = (lo + hi) >> 1; if (s[m].t <= t + 20000) { best = m; lo = m + 1; } else hi = m - 1; }
    for (let i = best; i >= 0 && t - s[i].t < 10 * 60000; i--) {
      const r = s[i].rooms[roomId];
      if (r && r.level) return { level: r.level, rec: true };
    }
  }
  const li = model.locIds.indexOf(roomId);
  const cap = model.rooms.find((r) => r.id === roomId).cap;
  const fill = model.counts[li][f] / cap;
  const cur = model.sessions.find((x) => x.roomId === roomId && t >= x.start && t < x.end);
  if (cur) return { level: 'running', rec: false };
  return { level: levelFromFill(fill), rec: false, idle: fill < 0.05 };
}

export { mulberry32 };
