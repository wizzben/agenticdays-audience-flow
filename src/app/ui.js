// DOM user interface: transport bar, timeline with session blocks, room panel, legend, tooltips.
import { TZ, ROOMS, HUBS } from '../model/config.js';
import { LEVEL_HEX } from './scene.js';

const $ = (s, r = document) => r.querySelector(s);
const hm = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hour12: false });
const hms = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
const dmy = new Intl.DateTimeFormat('en-GB', { timeZone: TZ, weekday: 'short', day: 'numeric', month: 'short' });
export const fmtHM = (t) => hm.format(t);
export const fmtHMS = (t) => hms.format(t);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const LEVEL_NAME = { open: 'Open', filling: 'Filling', full: 'Full', running: 'Running', none: 'Idle' };
const ROOM_HUE = { millennium: '#7c9cff', studio4: '#59c9d9', studio6: '#8f8cf2', studio3: '#e09bd0', studio1: '#7fd6a0' };

export function createUI(app) {
  let model = null;
  const els = {
    play: $('#btn-play'), prev: $('#btn-prev'), next: $('#btn-next'), speed: $('#sel-speed'), live: $('#btn-live'),
    clockT: $('#clock-t'), clockSub: $('#clock-sub'), tl: $('#timeline'), rows: $('.tl-rows'), ticks: $('.tl-ticks'), cov: $('.tl-cov'),
    now: $('.tl-now'), head: $('.tl-head'), hover: $('.tl-hover'), panel: $('#panel'), tip: $('#tip'), legend: $('#legend'),
    chipMode: $('#chip-mode'), chipData: $('#chip-data'), btnClouds: $('#btn-clouds'), btnTopic: $('#btn-topicmode'),
  };
  let blocks = new Map();
  let selectedRoom = null;
  let highlightTopic = null;
  let lastPanelKey = '';

  // ---- transport
  els.play.addEventListener('click', () => app.togglePlay());
  els.prev.addEventListener('click', () => app.jump(-1));
  els.next.addEventListener('click', () => app.jump(1));
  els.speed.addEventListener('change', () => app.setSpeed(+els.speed.value));
  els.live.addEventListener('click', () => app.goLive());
  $('#btn-reset').addEventListener('click', () => app.resetView());
  els.btnClouds.addEventListener('click', () => { const on = app.toggleClouds(); els.btnClouds.classList.toggle('on', on); els.btnClouds.setAttribute('aria-pressed', on); });
  els.btnTopic.addEventListener('click', () => app.toggleTopicMode());
  $('#btn-legend').addEventListener('click', () => { els.legend.hidden = !els.legend.hidden; });
  $('#legend .close').addEventListener('click', () => { els.legend.hidden = true; });

  // ---- timeline
  const pct = (t) => ((t - model.t0) / (model.t1 - model.t0)) * 100;
  const tFromX = (clientX) => {
    const r = els.tl.getBoundingClientRect();
    return model.t0 + Math.min(1, Math.max(0, (clientX - r.left) / r.width)) * (model.t1 - model.t0);
  };
  let dragging = false;
  els.tl.addEventListener('pointerdown', (e) => {
    if (!model) return;
    dragging = true;
    els.tl.setPointerCapture(e.pointerId);
    app.seek(tFromX(e.clientX));
  });
  els.tl.addEventListener('pointermove', (e) => {
    if (!model) return;
    const t = tFromX(e.clientX);
    els.hover.hidden = false;
    els.hover.style.left = pct(t) + '%';
    els.hover.textContent = fmtHM(t);
    if (dragging) app.seek(t);
  });
  els.tl.addEventListener('pointerup', () => { dragging = false; });
  els.tl.addEventListener('pointerleave', () => { els.hover.hidden = true; });
  els.tl.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { app.seek(app.getT() - 60000); e.preventDefault(); e.stopPropagation(); }
    if (e.key === 'ArrowRight') { app.seek(app.getT() + 60000); e.preventDefault(); e.stopPropagation(); }
  });

  function buildTimeline() {
    els.rows.innerHTML = '';
    els.ticks.innerHTML = '';
    blocks = new Map();
    const span = model.t1 - model.t0;
    for (let h = 0; h <= span / 3600000; h++) {
      const t = model.t0 + h * 3600000;
      const i = document.createElement('i');
      i.style.left = pct(t) + '%';
      i.innerHTML = `<span>${fmtHM(t)}</span>`;
      els.ticks.appendChild(i);
    }
    const rowH = 100 / ROOMS.length;
    ROOMS.forEach((r, ri) => {
      const row = document.createElement('div');
      row.className = 'tl-row';
      row.style.top = `calc(${ri} * (100% - 8px) / ${ROOMS.length - 1})`;
      row.innerHTML = `<span class="rn">${r.short}</span>`;
      for (const s of model.sessions.filter((x) => x.roomId === r.id)) {
        const b = document.createElement('div');
        b.className = 'blk' + (s.hasData ? '' : ' proj');
        b.style.left = pct(s.start) + '%';
        b.style.width = Math.max(0.35, pct(s.end) - pct(s.start)) + '%';
        b.style.setProperty('--c', ROOM_HUE[r.id]);
        b.style.setProperty('--o', (0.35 + 0.6 * Math.min(1, s.pop.score)).toFixed(2));
        b.title = `${fmtHM(s.start)}–${fmtHM(s.end)} · ${r.name} · ${s.title}`;
        b.dataset.sid = s.id;
        row.appendChild(b);
        blocks.set(s.id, b);
      }
      els.rows.appendChild(row);
    });
    // clicks on blocks: select the room and jump to the session start (without dragging the playhead)
    els.rows.onclick = null;
  }
  function updateCoverage() {
    els.cov.innerHTML = '';
    const cov = model.covered;
    let k = 0;
    while (k < model.K) {
      if (!cov[k]) { k++; continue; }
      let e = k;
      while (e + 1 < model.K && cov[e + 1]) e++;
      const i = document.createElement('i');
      i.style.left = pct(model.t0 + k * model.step) + '%';
      i.style.width = Math.max(0.2, pct(model.t0 + (e + 1) * model.step) - pct(model.t0 + k * model.step)) + '%';
      els.cov.appendChild(i);
      k = e + 1;
    }
  }
  function updateNow(nowMs) {
    const on = nowMs >= model.t0 && nowMs <= model.t1;
    els.now.style.display = on ? 'block' : 'none';
    if (on) els.now.style.left = pct(nowMs) + '%';
  }

  // ---- panel
  function sessionHistory(s) {
    if (!s.hasData) return 'No room samples yet for this session, so everything shown for it is a projection from its format, room size and the popularity of its topics so far.';
    const pts = s.points;
    const first = pts[0];
    const mins = (t) => Math.round((s.start - t) / 60000);
    const tF = pts.find((p) => p.level === 'filling' || p.level === 'full');
    const tU = pts.find((p) => p.level === 'full');
    const bits = [];
    if (first.level === 'running') bits.push('First recorded sample was already “running”, so the fill history before the start is missing and the level is carried over from the previous session / a prior.');
    else {
      if (tF) bits.push(tF.t < s.start ? `Reached “${tF.level}” ${mins(tF.t)} min before the start.` : `Reached “${tF.level}” only after the start.`);
      else bits.push('Stayed “open” until the start.');
      if (tU && tU !== tF) bits.push(`“Full” ${tU.t < s.start ? mins(tU.t) + ' min before the start' : 'after the start'}.`);
    }
    return bits.join(' ');
  }
  function sessionFor(roomId, t) {
    const list = model.sessions.filter((s) => s.roomId === roomId);
    return list.find((s) => t >= s.start && t < s.end) || list.find((s) => s.start > t) || list[list.length - 1];
  }
  function renderPanel(t, force) {
    if (!selectedRoom) { els.panel.hidden = true; return; }
    const room = ROOMS.find((r) => r.id === selectedRoom);
    const s = sessionFor(selectedRoom, t);
    const st = model.at(t);
    const rm = st.rooms[selectedRoom];
    const lv = model.levelAt(selectedRoom, t);
    const key = [selectedRoom, s && s.id, lv.level, lv.rec, Math.round(rm.count), model.nSamples].join('|');
    if (!force && key === lastPanelKey && !els.panel.hidden) return;
    lastPanelKey = key;
    const col = LEVEL_HEX[lv.idle ? 'none' : lv.level] || LEVEL_HEX.none;
    const list = model.sessions.filter((x) => x.roomId === selectedRoom);
    let h = `<button class="close" aria-label="Close">×</button><h2>${esc(room.name)}</h2><div class="sub">${room.cap} seats (assumed) · ${esc(app.floorLabel(room.floor))}</div>`;
    h += `<div class="lv"><i style="background:${col}"></i>${esc(LEVEL_NAME[lv.idle ? 'none' : lv.level])} <span class="tag ${lv.rec ? '' : 'p'}">${lv.rec ? 'measured level' : 'projected'}</span></div>`;
    h += `<div class="big">≈ ${Math.round(rm.count)} <small>of ${room.cap} · estimated headcount</small></div><div class="meter"><u style="width:${Math.min(100, rm.fill * 100).toFixed(0)}%"></u></div>`;
    if (s) {
      const sp = s.speakers.length ? s.speakers.join(', ') + (s.company.length ? ' · ' + [...new Set(s.company)].join(', ') : '') : '';
      h += `<div class="sess"><div class="sub">${t >= s.start && t < s.end ? 'Now' : t < s.start ? 'Next' : 'Last'} · ${fmtHM(s.start)}–${fmtHM(s.end)} · ${esc(s.format)}</div><h3>${esc(s.title)}</h3>`;
      if (sp) h += `<div class="sub">${esc(sp)}</div>`;
      h += `<div>${s.topics.slice(0, 4).map((tp) => { const tt = model.topics.find((x) => x.id === tp.id); return tt ? `<span class="tag">${esc(tt.short)}</span>` : ''; }).join('')}</div>`;
      const sc = Math.round(Math.min(1, s.pop.score) * 100);
      h += `<div class="why"><b>Popularity ${sc}/100</b> ${s.hasData ? '' : '<span class="tag p">projected</span>'}<div class="meter"><u style="width:${sc}%"></u></div>${esc(sessionHistory(s))}</div>`;
      if (s.pop.unmet) h += `<div class="warn">Full room with only ${room.cap} seats: likely unmet demand (more people wanted in than fitted).</div>`;
      if (s.hasData) h += `<div class="why" style="color:var(--muted)">Estimated peak ≈ ${Math.round(s.peakCount)} of ${room.cap} seats.</div>`;
    }
    h += `<div class="sess"><div class="sub">Schedule in this room</div><ul class="up">${list.map((x) => `<li data-t="${x.start}" style="${s && x.id === s.id ? 'color:var(--text)' : ''}">${fmtHM(x.start)} · ${esc(x.title.slice(0, 44))}${x.title.length > 44 ? '…' : ''}</li>`).join('')}</ul></div>`;
    els.panel.innerHTML = h;
    els.panel.hidden = false;
    $('.close', els.panel).onclick = () => app.selectRoom(null);
    els.panel.querySelectorAll('li[data-t]').forEach((li) => { li.onclick = () => app.seek(+li.dataset.t - 5 * 60000); });
  }

  // ---- tooltip for topic clouds
  function showTip(info, x, y) {
    if (!info) { els.tip.hidden = true; return; }
    const { topic, val, proj } = info;
    const feeding = model.sessions.filter((s) => s.topics.some((tp) => tp.id === topic.id));
    const unit = app.topicMode() === 'cum' ? `≈ ${Math.round(val)} audience-minutes so far` : `≈ ${Math.round(val)} people in sessions on this topic now`;
    els.tip.innerHTML = `<b>${esc(topic.label)}</b><div class="row">${unit}${proj > 0.5 ? ' <span class="row p">(mostly projected)</span>' : ''}</div>` +
      `<div class="row">${topic.kind === 'keyword' ? 'Keyword from session descriptions' : 'Curated session topic'} · ${feeding.length} session${feeding.length === 1 ? '' : 's'}</div>` +
      `<div class="row">${feeding.slice(0, 6).map((s) => `${fmtHM(s.start)} ${ROOMS.find((r) => r.id === s.roomId).short}`).join(' · ')}${feeding.length > 6 ? ' …' : ''}</div>`;
    els.tip.hidden = false;
    const w = els.tip.offsetWidth, h = els.tip.offsetHeight, W = window.innerWidth, H = window.innerHeight;
    els.tip.style.left = Math.max(8, Math.min(W - w - 8, x + 14)) + 'px';
    els.tip.style.top = Math.max(8, Math.min(H - h - 8, y + 14)) + 'px';
  }

  function setHighlightTopic(id) {
    highlightTopic = id;
    for (const [sid, b] of blocks) {
      const s = model.sessions.find((x) => x.id === sid);
      b.classList.toggle('hl', !!id && s.topics.some((tp) => tp.id === id));
    }
  }

  return {
    setModel(m) {
      const first = !model;
      model = m;
      buildTimeline();
      updateCoverage();
      if (selectedRoom) renderPanel(app.getT(), true);
      if (highlightTopic) setHighlightTopic(highlightTopic);
      if (first) $('#lg-crowd').textContent = m.crowd;
    },
    setHead(t) { els.head.style.left = pct(t) + '%'; },
    update(t, st) {
      // st: {live, playing, mode: 'rec'|'proj', demo, nowMs, liveAvailable, src}
      const rec = model.at(t).covered;
      els.clockT.textContent = fmtHMS(t);
      els.clockSub.textContent = dmy.format(t) + (st.live ? ' · live' : '') + (rec ? '' : ' · projected');
      els.chipMode.textContent = rec ? (st.demo ? 'Synthetic data' : 'Recorded levels') : 'Projected · not measured';
      els.chipMode.className = 'chip ' + (rec ? (st.demo ? 'demo' : '') : 'proj');
      const last = model.lastSample;
      els.chipData.textContent = st.demo ? 'demo mode · no real data' : last ? `last sample ${fmtHMS(last)} · ${model.nSamples} samples · ${st.src}` : `no samples yet · ${st.src}`;
      els.live.classList.toggle('on', st.live);
      els.live.disabled = !st.liveAvailable;
      els.live.title = st.liveAvailable ? 'Follow real time (L)' : 'Live is only available between 12:00 and 17:00 on the conference day';
      els.play.textContent = st.playing || st.live ? '⏸' : '▶';
      els.play.setAttribute('aria-label', st.playing || st.live ? 'Pause' : 'Play');
      els.speed.disabled = st.live;
      els.btnTopic.textContent = 'Topics: ' + (app.topicMode() === 'cum' ? 'so far' : 'now');
      updateNow(st.nowMs);
      els.tl.setAttribute('aria-valuenow', Math.round(pct(t)));
      els.tl.setAttribute('aria-valuetext', fmtHM(t));
      $('#lg-meta').textContent = st.demo ? 'Demo: all data synthetic.' : `Source: recording.jsonl (${st.src}); ${model.nSamples} samples, last ${last ? fmtHMS(last) : 'none'}. Crowd total ${model.crowd} and room capacities are assumptions.`;
      renderPanel(t, false);
    },
    selectRoom(id) { selectedRoom = id; lastPanelKey = ''; if (!id) els.panel.hidden = true; for (const [sid, b] of blocks) { const s = model.sessions.find((x) => x.id === sid); b.classList.toggle('sel', !!id && s.roomId === id); } if (id) renderPanel(app.getT(), true); },
    get selectedRoom() { return selectedRoom; },
    showTip, setHighlightTopic, updateNow, updateCoverage,
    toggleLegend() { els.legend.hidden = !els.legend.hidden; },
    closeLegend() { els.legend.hidden = true; },
    showDemoLink(show) { $('#lg-demo').hidden = !show; },
  };
}
