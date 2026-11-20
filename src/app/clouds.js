// Soft 3D topic clouds (billboard puffs) whose size follows the topic popularity over time.
import * as THREE from 'three';

function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function puffTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 2, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,0.95)');
  gr.addColorStop(0.45, 'rgba(255,255,255,0.45)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 128, 128);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
const PROJ_COL = new THREE.Color(0x9a8fc4);

export const R_MIN = 2.2, R_MAX = 9, PUFFS = 14;

export function createClouds(scene, labelsEl, camera, container) {
  const tex = puffTexture();
  const group = new THREE.Group();
  scene.add(group);
  let clouds = [];
  let model = null;
  let mode = 'cum';
  let highlight = null; // topic id
  let visible = true;
  const hitSpheres = [];
  const v = new THREE.Vector3();

  function dispose() {
    for (const c of clouds) {
      group.remove(c.g);
      c.matA.dispose(); c.matB.dispose();
      c.label.remove();
    }
    clouds = []; hitSpheres.length = 0;
  }

  function setModel(m) {
    const first = !model || model.topics.length !== m.topics.length || model.topics.some((t, i) => t.id !== m.topics[i].id);
    model = m;
    if (!first) return;
    dispose();
    const n = m.topics.length;
    m.topics.forEach((t, i) => {
      const rng = mulberry32(777 + i * 13);
      const hue = (0.52 + 0.38 * rng()) % 1;
      const baseCol = new THREE.Color().setHSL(hue, 0.55, 0.62);
      const lightCol = new THREE.Color().setHSL(hue, 0.5, 0.82);
      const matA = new THREE.SpriteMaterial({ map: tex, color: baseCol.clone(), transparent: true, opacity: 0.5, depthWrite: false, fog: true });
      const matB = new THREE.SpriteMaterial({ map: tex, color: lightCol.clone(), transparent: true, opacity: 0.55, depthWrite: false, fog: true });
      const g = new THREE.Group();
      // layout: spiral on an ellipse above the venue
      const rr = Math.sqrt((i + 0.6) / n);
      const th = i * 2.399963;
      g.position.set(Math.cos(th) * rr * 64, 34 + ((i * 37) % 5) * 3.2, Math.sin(th) * rr * 76);
      const puffs = [];
      for (let p = 0; p < PUFFS; p++) {
        const a = rng() * 6.283, b = Math.acos(2 * rng() - 1), rad = 0.35 + 0.65 * Math.cbrt(rng());
        const x = Math.sin(b) * Math.cos(a) * rad, y = Math.cos(b) * rad * 0.55, z = Math.sin(b) * Math.sin(a) * rad;
        const sp = new THREE.Sprite(y > 0.05 ? matB : matA);
        sp.position.set(x, y, z);
        const s = 0.9 + rng() * 0.8;
        sp.userData = { x, y, z, s, ph: rng() * 6.283 };
        sp.renderOrder = 10;
        g.add(sp);
        puffs.push(sp);
      }
      group.add(g);
      const baseY = g.position.y;
      const hit = new THREE.Mesh(new THREE.SphereGeometry(1, 8, 6), new THREE.MeshBasicMaterial({ visible: false }));
      hit.userData.topicIdx = i;
      g.add(hit);
      hitSpheres.push(hit);
      const label = document.createElement('div');
      label.className = 'lbl cloud';
      label.innerHTML = `<b></b><small></small>`;
      label.querySelector('b').textContent = t.short;
      label.dataset.topic = i;
      labelsEl.appendChild(label);
      clouds.push({ g, puffs, matA, matB, baseCol, lightCol, hit, label, nameEl: label.querySelector('b'), subEl: label.querySelector('small'), r: R_MIN, target: R_MIN, proj: 0, val: 0, hue, shown: true, lx: -1e9, ly: -1e9, baseY, w: 0, h: 0, topic: t });
    });
  }

  let vv = 0, vp = 0;
  function valueAt(i, t) {
    const f = Math.min(model.K - 1, Math.max(0, (t - model.t0) / model.step));
    const k0 = Math.floor(f), k1 = Math.min(model.K - 1, k0 + 1), a = f - k0;
    const A = mode === 'cum' ? model.topicCum[i] : model.topicNow[i];
    const P = mode === 'cum' ? model.topicProjCum[i] : model.topicProjNow[i];
    const val = A[k0] * (1 - a) + A[k1] * a;
    const pv = P[k0] * (1 - a) + P[k1] * a;
    vv = val; vp = val > 1e-6 ? pv / val : 0;
  }

  let frameNo = 0;
  /** t: sim time ms; dt: seconds since last frame; clock: seconds */
  function update(t, dt, clock, snap) {
    if (!model) return;
    const gmax = mode === 'cum' ? model.topicMaxCum : model.topicMaxNow;
    let cur = 0;
    for (let i = 0; i < clouds.length; i++) { valueAt(i, t); if (vv > cur) cur = vv; }
    const max = Math.max(cur, 0.3 * gmax, 1e-6);
    const k = snap ? 1 : 1 - Math.exp(-dt * 3.2);
    for (let i = 0; i < clouds.length; i++) {
      const c = clouds[i];
      valueAt(i, t);
      const val = vv, pf = vp;
      c.val = val;
      c.target = R_MIN + (R_MAX - R_MIN) * Math.sqrt(Math.min(1, val / max));
      c.r += (c.target - c.r) * k;
      c.proj += (pf - c.proj) * k;
      const hl = highlight === c.topic.id;
      const dim = highlight && !hl;
      const op = (0.2 + 0.4 * Math.min(1, val / max * 1.4 + 0.15)) * (1 - 0.4 * c.proj) * (dim ? 0.45 : 1) * (hl ? 1.5 : 1);
      c.matA.opacity = Math.min(0.85, op);
      c.matB.opacity = Math.min(0.9, op * 1.1);
      c.matA.color.copy(c.baseCol).lerp(PROJ_COL, c.proj * 0.65);
      c.matB.color.copy(c.lightCol).lerp(PROJ_COL, c.proj * 0.55);
      c.g.visible = visible;
      c.hit.scale.setScalar(c.r * 1.1);
      const R = c.r;
      for (let p = 0; p < PUFFS; p++) {
        const sp = c.puffs[p], u = sp.userData;
        const bob = Math.sin(clock * 0.5 + u.ph) * 0.06;
        sp.position.set((u.x + bob) * R, (u.y + bob * 0.6) * R, u.z * R);
        const sc = u.s * R * 0.95;
        sp.scale.set(sc, sc, 1);
      }
      c.g.position.y = c.baseY + Math.sin(clock * 0.3 + i) * 0.8;
    }
    if (frameNo++ % 6 === 0) layoutLabels();
  }

  function layoutLabels() {
    const w = container.clientWidth, h = container.clientHeight;
    const order = clouds.map((c, i) => i).sort((a, b) => clouds[b].r - clouds[a].r);
    const placed = [];
    for (const i of order) {
      const c = clouds[i];
      if (!visible) { if (c.shown) { c.label.style.display = 'none'; c.shown = false; } continue; }
      v.copy(c.g.position); v.y += c.r * 0.15;
      v.project(camera);
      const x0 = (v.x + 1) * 0.5 * w, y = (1 - v.y) * 0.5 * h;
      if (v.z > 1 || x0 < -80 || x0 > w + 80 || y < -20 || y > h + 20) { if (c.shown) { c.label.style.display = 'none'; c.shown = false; } continue; }
      if (!c.w) { c.w = c.label.offsetWidth || 80; c.h = c.label.offsetHeight || 24; }
      const x = Math.min(w - c.w / 2 - 4, Math.max(c.w / 2 + 4, x0));
      const hl = highlight === c.topic.id;
      const rect = [x - c.w / 2, y - c.h / 2, x + c.w / 2, y + c.h / 2];
      let hit = false;
      if (!hl) for (const r of placed) { if (rect[0] < r[2] + 4 && rect[2] > r[0] - 4 && rect[1] < r[3] + 2 && rect[3] > r[1] - 2) { hit = true; break; } }
      if (hit) { if (c.shown) { c.label.classList.add('off'); c.shown = false; } continue; }
      placed.push(rect);
      if (!c.shown) { c.label.classList.remove('off'); c.shown = true; }
      c.label.style.display = '';
      if (Math.abs(x - c.lx) > 0.6 || Math.abs(y - c.ly) > 0.6) { c.lx = x; c.ly = y; c.label.style.transform = `translate(-50%,-50%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; }
      const pj = c.proj > 0.5, op = highlight && !hl ? 0.35 : 1;
      if (c.hlS !== hl) { c.hlS = hl; c.label.classList.toggle('hl', hl); }
      if (c.pjS !== pj) { c.pjS = pj; c.label.classList.toggle('proj', pj); }
      if (c.opS !== op) { c.opS = op; c.label.style.opacity = op; }
    }
  }

  function setMode(m) { mode = m; }
  function setHighlight(id) { highlight = id; layoutLabels(); }
  function setVisible(b) { visible = b; for (const c of clouds) c.g.visible = b; layoutLabels(); }
  function sizes() { return clouds.map((c) => c.r); }
  function describe(i) { const c = clouds[i]; return c ? { topic: c.topic, val: c.val, proj: c.proj } : null; }

  return { setModel, update, setMode, setHighlight, setVisible, sizes, hitSpheres, describe, get clouds() { return clouds; }, get mode() { return mode; } };
}
