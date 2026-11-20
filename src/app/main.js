// Entry point: data loading (embedded + live raw GitHub recording), model, scene, playback loop.
import sessionsJson from '../../data/sessions.json';
import embeddedRecording from '../../data/recording-embedded.jsonl';
import { buildModel } from '../model/estimate.js';
import { parseRecording, mergeSamples } from '../model/recording.js';
import { synthRecording } from '../model/synth.js';
import { conferenceWindow } from '../model/estimate.js';
import { RECORDING_URL, ROOMS, HUBS, CROWD_TOTAL } from '../model/config.js';
import { createScene, LEVEL_HEX } from './scene.js';
import { createCrowd } from './crowd.js';
import { createClouds } from './clouds.js';
import { createUI, fmtHM } from './ui.js';
import * as THREE from 'three';

const params = new URLSearchParams(location.search);
const demoParam = params.get('demo');
const demo = demoParam !== null;
const win = conferenceWindow(sessionsJson);
const clamp = (x, a, b) => (x < a ? a : x > b ? b : x);

// ---- clock ("now") — overridable for tests/demo
const wallAtLoad = Date.now(), perfAtLoad = performance.now();
function parseClock(v) {
  if (!v) return null;
  const m = /^(\d{1,2}):(\d\d)(?::(\d\d))?$/.exec(v);
  if (!m) return null;
  return win.t0 + ((+m[1] - 12) * 3600 + +m[2] * 60 + (+m[3] || 0)) * 1000;
}
let nowBase = null;
if (params.get('now')) nowBase = parseClock(params.get('now'));
else if (demo) nowBase = demoParam === 'live' ? win.t0 + 2.5 * 3600000 : win.t1;
const nowFn = nowBase != null ? () => (demoParam === 'live' || params.get('now') ? nowBase + (performance.now() - perfAtLoad) : nowBase) : () => Date.now();

// ---- data
let embedded = parseRecording(embeddedRecording);
let fetched = [];
let src = 'embedded snapshot';
function baseSamples() {
  if (demo) return synthRecording(sessionsJson, { seed: +params.get('seed') || 7, gaps: params.has('gaps'), to: demoParam === 'live' ? win.t0 + 2.5 * 3600000 : undefined });
  return mergeSamples(embedded, fetched);
}
let model = buildModel({ sessions: sessionsJson, recording: baseSamples() });

// ---- scene
const stage = document.getElementById('stage');
const labelsEl = document.getElementById('labels');
const sc = createScene(stage, labelsEl);
const crowd = createCrowd(sc.scene, CROWD_TOTAL);
const clouds = createClouds(sc.scene, labelsEl, sc.camera, stage);
crowd.setModel(model);
clouds.setModel(model);

// ---- state
const S = {
  t: win.t0, playing: false, live: false, speed: 5, topicMode: 'cum', selected: null, hlTopic: null, stickyTopic: null,
};
const liveAvailable = () => { const n = nowFn(); return n >= model.t0 && n <= model.t1; };

const app = {
  getT: () => S.t,
  seek(t) { S.t = clamp(t, model.t0, model.t1); S.live = false; },
  togglePlay() {
    if (S.live) { S.live = false; S.playing = false; return; }
    if (S.t >= model.t1 - 1000 && !S.playing) S.t = model.t0;
    S.playing = !S.playing;
  },
  setSpeed(v) { S.speed = v; S.live = false; if (!S.playing) S.playing = false; },
  goLive() { if (!liveAvailable()) return; S.live = true; S.playing = false; },
  jump(dir) {
    const bounds = [...new Set(model.sessions.flatMap((s) => [s.start, s.end]))].filter((t) => t > model.t0 && t < model.t1).sort((a, b) => a - b);
    S.live = false;
    if (dir > 0) S.t = bounds.find((b) => b > S.t + 1000) ?? model.t1;
    else { const prev = [...bounds].reverse().find((b) => b < S.t - 2000); S.t = prev ?? model.t0; }
  },
  resetView() { sc.resetView(); app.selectRoom(null); },
  toggleClouds() { cloudsOn = !cloudsOn; clouds.setVisible(cloudsOn); return cloudsOn; },
  toggleTopicMode() { S.topicMode = S.topicMode === 'cum' ? 'now' : 'cum'; clouds.setMode(S.topicMode); },
  topicMode: () => S.topicMode,
  floorLabel: (f) => sc.FLOOR_LABEL[f],
  selectRoom(id) {
    S.selected = id;
    ui.selectRoom(id);
    if (id) sc.focusRoom(id);
    for (const l of sc.labels) if (l.roomId) l.el.classList.toggle('sel', l.roomId === id);
  },
};
let cloudsOn = true;
const ui = createUI(app);
ui.setModel(model);
ui.showDemoLink(!demo);
if (demo) document.title = 'Demo · ' + document.title;

// ---- start mode
{
  if (params.get('speed')) { S.speed = +params.get('speed') || 5; document.getElementById('sel-speed').value = String(S.speed); }
  const ts = parseClock(params.get('t'));
  if (ts != null) { S.t = ts; S.playing = params.get('play') === '1'; }
  else if (params.get('live') !== '0' && liveAvailable() && !demo) { S.live = true; }
  else { S.t = model.t0; S.playing = params.get('play') !== '0'; }
  if (params.get('mode') === 'now') app.toggleTopicMode();
  if (params.get('room')) setTimeout(() => app.selectRoom(params.get('room')), 50);
  if (params.has('legend')) ui.toggleLegend();
}

// ---- keyboard
window.addEventListener('keydown', (e) => {
  if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key;
  if (k === ' ') { app.togglePlay(); e.preventDefault(); }
  else if (k === 'ArrowLeft') { app.seek(S.t - (e.shiftKey ? 600000 : 60000)); e.preventDefault(); }
  else if (k === 'ArrowRight') { app.seek(S.t + (e.shiftKey ? 600000 : 60000)); e.preventDefault(); }
  else if (k === '[') app.jump(-1);
  else if (k === ']') app.jump(1);
  else if (k === 'l' || k === 'L') app.goLive();
  else if (k === 'r' || k === 'R') app.resetView();
  else if (k === 'c' || k === 'C') document.getElementById('btn-clouds').click();
  else if (k === 't' || k === 'T') app.toggleTopicMode();
  else if (k === '?' || k === 'i') ui.toggleLegend();
  else if (k === 'Escape') { app.selectRoom(null); ui.closeLegend(); setTopic(null, true); }
});

// ---- pointer interaction: rooms and clouds
const canvas = sc.renderer.domElement;
let down = null;
canvas.addEventListener('pointerdown', (e) => { down = { x: e.clientX, y: e.clientY }; });
canvas.addEventListener('pointerup', (e) => {
  if (!down) return;
  const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
  down = null;
  if (moved > 5) return;
  const ch = cloudsOn ? sc.pick(e.clientX, e.clientY, clouds.hitSpheres) : null;
  if (ch) { setTopic(ch.userData.topicIdx, true, e.clientX, e.clientY); return; }
  const hit = sc.pick(e.clientX, e.clientY, sc.hitMeshes);
  if (hit) app.selectRoom(hit.userData.roomId);
  else { app.selectRoom(null); setTopic(null, true); }
});
canvas.addEventListener('pointermove', (e) => {
  if (e.buttons) return;
  const ch = cloudsOn ? sc.pick(e.clientX, e.clientY, clouds.hitSpheres) : null;
  if (ch) { setTopic(ch.userData.topicIdx, false, e.clientX, e.clientY); canvas.style.cursor = 'pointer'; return; }
  if (!S.stickyTopic) setTopic(null, false);
  canvas.style.cursor = sc.pick(e.clientX, e.clientY, sc.hitMeshes) ? 'pointer' : '';
});
labelsEl.addEventListener('pointerover', (e) => {
  const c = e.target.closest && e.target.closest('.lbl.cloud');
  if (c) setTopic(+c.dataset.topic, false, e.clientX, e.clientY);
});
labelsEl.addEventListener('pointerout', (e) => {
  const c = e.target.closest && e.target.closest('.lbl.cloud');
  if (c && !S.stickyTopic) setTopic(null, false);
});
labelsEl.addEventListener('click', (e) => {
  const c = e.target.closest && e.target.closest('.lbl.cloud');
  if (c) { setTopic(+c.dataset.topic, true, e.clientX, e.clientY); return; }
  const r = e.target.closest && e.target.closest('.lbl.room');
  if (r) {
    const l = sc.labels.find((x) => x.el === r);
    if (l) app.selectRoom(S.selected === l.roomId ? null : l.roomId);
  }
});
let hlRooms = new Set();
function setTopic(idx, sticky, x, y) {
  if (idx == null) {
    if (sticky) S.stickyTopic = null;
    if (!S.stickyTopic) { S.hlTopic = null; clouds.setHighlight(null); ui.setHighlightTopic(null); ui.showTip(null); hlRooms = new Set(); }
    return;
  }
  const t = model.topics[idx];
  if (!t) return;
  if (sticky) S.stickyTopic = S.stickyTopic === t.id ? null : t.id;
  S.hlTopic = t.id;
  clouds.setHighlight(t.id);
  ui.setHighlightTopic(t.id);
  hlRooms = new Set(model.sessions.filter((s) => s.topics.some((tp) => tp.id === t.id)).map((s) => s.roomId));
  ui.showTip(clouds.describe(idx), x ?? 0, y ?? 0);
  if (sticky && !S.stickyTopic) { S.hlTopic = null; clouds.setHighlight(null); ui.setHighlightTopic(null); ui.showTip(null); hlRooms = new Set(); }
}

// ---- per-frame state (no allocation in the hot path)
const L = model.locIds.length;
const roomLoc = ROOMS.map((r) => model.locIds.indexOf(r.id));
const hubMask = new Uint8Array(L);
HUBS.forEach((h) => { hubMask[model.locIds.indexOf(h.id)] = 1; });
const fills = new Float32Array(ROOMS.length);
const lvls = ROOMS.map(() => 'none');
const recs = ROOMS.map(() => false);
const levelRGB = {};
for (const [k, hex] of Object.entries(LEVEL_HEX)) {
  const c = new THREE.Color(hex), w = new THREE.Color('#dbe7ff');
  c.lerp(w, 0.4);
  levelRGB[k] = [c.r, c.g, c.b];
}
let curModel = model;
function fillAt(t) {
  const f = clamp((t - curModel.t0) / curModel.step, 0, curModel.K - 1);
  const k0 = f | 0, k1 = Math.min(curModel.K - 1, k0 + 1), a = f - k0;
  for (let i = 0; i < ROOMS.length; i++) {
    const arr = curModel.counts[roomLoc[i]];
    fills[i] = (arr[k0] * (1 - a) + arr[k1] * a) / ROOMS[i].cap;
  }
}
function slowTick(t) {
  const st = model.at(t);
  for (let i = 0; i < ROOMS.length; i++) {
    const id = ROOMS[i].id;
    const lv = model.levelAt(id, t);
    lvls[i] = lv.idle && lv.level !== 'running' ? 'none' : lv.level;
    recs[i] = lv.rec || (st.rooms[id].rec);
    const col = levelRGB[lvls[i]] || levelRGB.none;
    crowd.setLocColor(roomLoc[i], col[0], col[1], col[2]);
  }
  for (const l of sc.labels) {
    if (l.roomId) {
      const i = ROOMS.findIndex((r) => r.id === l.roomId);
      const r = st.rooms[l.roomId];
      l.cnt.textContent = `≈${Math.round(r.count)}/${ROOMS[i].cap}`;
      l.bar.style.width = Math.min(100, r.fill * 100).toFixed(0) + '%';
      l.bar.style.background = LEVEL_HEX[lvls[i]] || LEVEL_HEX.none;
      l.barWrap.classList.toggle('proj', !recs[i]);
      l.el.classList.toggle('hl', hlRooms.has(l.roomId));
    } else if (l.hubId) {
      l.cnt.textContent = '≈' + Math.round(st.hubs[l.hubId].count);
    }
  }
  ui.update(t, { live: S.live, playing: S.playing, demo, nowMs: nowFn(), liveAvailable: liveAvailable(), src });
}

// ---- main loop
let last = performance.now(), lastSlow = 0, frames = 0, snapClouds = true;
const perf = { frames: 0, sum: 0, max: 0, worst: [] };
function frame(ts) {
  requestAnimationFrame(frame);
  const dt = Math.min(0.1, (ts - last) / 1000);
  last = ts;
  if (S.live) S.t = clamp(nowFn(), model.t0, model.t1);
  else if (S.playing) {
    S.t += dt * S.speed * 60000;
    if (S.t >= model.t1) { S.t = model.t1; S.playing = false; }
  }
  const t = S.t;
  const clock = ts / 1000;
  fillAt(t);
  crowd.update(t, clock, hubMask);
  clouds.update(t, dt, clock, snapClouds);
  snapClouds = false;
  for (let i = 0; i < ROOMS.length; i++) {
    sc.setRoomState(ROOMS[i].id, fills[i], lvls[i], recs[i], S.selected === ROOMS[i].id, hlRooms.has(ROOMS[i].id));
  }
  sc.stepAnim(ts);
  sc.controls.update();
  sc.updateLabels();
  sc.renderer.render(sc.scene, sc.camera);
  ui.setHead(t);
  if (ts - lastSlow > 200) { lastSlow = ts; slowTick(t); }
  // frame-time stats for the perf test
  if (perf.on) { const d = performance.now() - ts; perf.frames++; perf.sum += d; if (d > perf.max) perf.max = d; }
}

function applyModel(m) {
  model = m;
  curModel = m;
  crowd.setModel(m);
  clouds.setModel(m);
  ui.setModel(m);
  slowTick(S.t);
}

// ---- live fetch (raw GitHub). Fails silently, e.g. while the repo is private (404).
let fetching = false;
async function fetchRecording() {
  if (demo || params.has('nofetch') || fetching) return;
  fetching = true;
  try {
    const ctl = new AbortController();
    const to = setTimeout(() => ctl.abort(), 15000);
    const res = await fetch(RECORDING_URL + '?cb=' + Math.floor(Date.now() / 60000), { signal: ctl.signal, cache: 'no-store' });
    clearTimeout(to);
    if (!res.ok) throw new Error('http ' + res.status);
    const text = await res.text();
    const got = parseRecording(text);
    if (got.length) {
      const before = model.nSamples, beforeLast = model.lastSample;
      fetched = got;
      const m = buildModel({ sessions: sessionsJson, recording: baseSamples() });
      if (m.nSamples !== before || m.lastSample !== beforeLast) { src = 'live from GitHub'; applyModel(m); }
      else src = 'live from GitHub';
    }
  } catch (e) { /* silent: keep going with what we have */ }
  fetching = false;
}
if (!demo && !params.has('nofetch')) { setTimeout(fetchRecording, 800); setInterval(fetchRecording, 60000); }

slowTick(S.t);
requestAnimationFrame(frame);

// test hooks
window.AED = {
  get state() { return { t: S.t, playing: S.playing, live: S.live, speed: S.speed, selected: S.selected, topicMode: S.topicMode }; },
  app, model: () => model, clouds, scene: sc, crowd, perf, setTime: (t) => app.seek(t), nowFn,
};
window.AED_READY = true;
