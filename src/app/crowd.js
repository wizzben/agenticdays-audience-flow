// Instanced crowd: every person is deterministic in time (so scrubbing works), no per-frame allocation.
import * as THREE from 'three';
import G from '../venue/geometry.js';
import { buildRoutes } from './routes.js';

const WALK_SPEED = 1.25; // m/s (real time)

function mulberry32(a) {
  return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
function inPoly(x, z, poly) {
  let c = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > z) !== (b[1] > z) && x < ((b[0] - a[0]) * (z - a[1])) / (b[1] - a[1]) + a[0]) c = !c;
  }
  return c;
}

export function createCrowd(scene, N) {
  const geo = new THREE.CapsuleGeometry(0.28, 0.85, 2, 6);
  geo.translate(0, 0.7, 0);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffffff, emissive: 0x223344, emissiveIntensity: 0.6 });
  const mesh = new THREE.InstancedMesh(geo, mat, N);
  mesh.frustumCulled = false;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  mesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(N * 3), 3);
  mesh.instanceColor.setUsage(THREE.DynamicDrawUsage);
  scene.add(mesh);
  const mArr = mesh.instanceMatrix.array;
  const cArr = mesh.instanceColor.array;

  const rng = mulberry32(99);
  const frac = new Float32Array(N); // departure phase inside a step
  const ph1 = new Float32Array(N), ph2 = new Float32Array(N);
  for (let a = 0; a < N; a++) { frac[a] = rng(); ph1[a] = rng() * 6.283; ph2[a] = rng() * 6.283; }

  let model = null, L = 0, K = 0, routes = null, seats = null, lastChange = null, locKind = null, locIds = null;
  const levelCol = new Float32Array(8 * 3); // per location base color (r,g,b)
  const tmpA = new Float64Array(3);
  let curLoc = 0;

  function buildSeats() {
    seats = [];
    for (let li = 0; li < L; li++) {
      const id = locIds[li];
      const r = G.rooms[id];
      const arr = new Float32Array(N * 3);
      const rg = mulberry32(1000 + li * 31);
      if (!r) { seats.push(arr); continue; }
      const isHub = r.kind === 'hub';
      const o = r.obb, c = Math.cos(o.rot), s = Math.sin(o.rot);
      for (let a = 0; a < N; a++) {
        let x, z;
        for (let tries = 0; tries < 60; tries++) {
          const lx = (rg() - 0.5) * (o.w - 1.6), lz = (rg() - 0.5) * (o.d - 1.6);
          // rows for session rooms: snap along width
          const sx = isHub ? lx : Math.round(lx / 0.95) * 0.95;
          const sz = isHub ? lz : lz;
          x = o.cx + sx * c - sz * s; z = o.cz + sx * s + sz * c;
          if (!isHub || inPoly(x, z, r.poly)) break;
        }
        arr[a * 3] = x; arr[a * 3 + 1] = r.y + 0.12; arr[a * 3 + 2] = z;
      }
      seats.push(arr);
    }
  }

  function setModel(m) {
    model = m; L = m.locIds.length; K = m.K; locIds = m.locIds;
    routes = buildRoutes(locIds);
    if (!seats || seats.length !== L) buildSeats();
    lastChange = new Int16Array(N * K);
    for (let a = 0; a < N; a++) {
      let lc = 0;
      for (let k = 1; k < K; k++) {
        if (m.loc[a * K + k] !== m.loc[a * K + k - 1]) lc = k;
        lastChange[a * K + k] = lc;
      }
    }
  }

  function setLocColor(li, r, g, b) { levelCol[li * 3] = r; levelCol[li * 3 + 1] = g; levelCol[li * 3 + 2] = b; }

  // write world position of agent a at time t into tmp; returns 0 sitting, 1 walking
  function place(a, t) {
    const { t0, step } = model;
    const rel = t - t0;
    let s = Math.floor(rel / step);
    if (s < 0) s = 0;
    if (s > K - 1) s = K - 1;
    const base = a * K;
    let j = s;
    if (s + 1 < K && model.loc[base + s + 1] !== model.loc[base + s] && rel >= (s + frac[a]) * step) j = s + 1;
    const kc = lastChange[base + j];
    const to = model.loc[base + j];
    curLoc = to;
    if (kc === 0) { seatOf(to, a); return 0; }
    const from = model.loc[base + kc - 1];
    const depart = (kc - 1 + frac[a]) * step;
    const el = rel - depart;
    const rt = routes.routes[from * L + to];
    const sf = seats[from], st = seats[to];
    const fx = sf[a * 3], fy = sf[a * 3 + 1], fz = sf[a * 3 + 2];
    const tx = st[a * 3], ty = st[a * 3 + 1], tz = st[a * 3 + 2];
    const n = rt.n, p = rt.pts;
    const l0 = Math.sqrt((p[0] - fx) * (p[0] - fx) + (p[1] - fy) * (p[1] - fy) + (p[2] - fz) * (p[2] - fz));
    const dx1 = tx - p[(n - 1) * 3], dy1 = ty - p[(n - 1) * 3 + 1], dz1 = tz - p[(n - 1) * 3 + 2];
    const l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1 + dz1 * dz1);
    const total = l0 + rt.len + l1;
    const dur = (total / WALK_SPEED) * 1000;
    if (el >= dur || el < 0) { seatOf(to, a); return 0; }
    let d = (el / dur) * total;
    if (d < l0) {
      const q = d / l0;
      tmpA[0] = fx + (p[0] - fx) * q; tmpA[1] = fy + (p[1] - fy) * q; tmpA[2] = fz + (p[2] - fz) * q;
      return 1;
    }
    d -= l0;
    if (d >= rt.len) {
      const q = l1 > 0 ? (d - rt.len) / l1 : 1;
      const ex = p[(n - 1) * 3], ey = p[(n - 1) * 3 + 1], ez = p[(n - 1) * 3 + 2];
      tmpA[0] = ex + (tx - ex) * q; tmpA[1] = ey + (ty - ey) * q; tmpA[2] = ez + (tz - ez) * q;
      return 1;
    }
    let i = 1;
    while (i < n - 1 && rt.cum[i] < d) i++;
    const seg = rt.cum[i] - rt.cum[i - 1] || 1;
    const q = (d - rt.cum[i - 1]) / seg;
    tmpA[0] = p[(i - 1) * 3] + (p[i * 3] - p[(i - 1) * 3]) * q;
    tmpA[1] = p[(i - 1) * 3 + 1] + (p[i * 3 + 1] - p[(i - 1) * 3 + 1]) * q;
    tmpA[2] = p[(i - 1) * 3 + 2] + (p[i * 3 + 2] - p[(i - 1) * 3 + 2]) * q;
    return 1;
  }
  function seatOf(li, a) {
    const sp = seats[li];
    tmpA[0] = sp[a * 3]; tmpA[1] = sp[a * 3 + 1]; tmpA[2] = sp[a * 3 + 2];
  }

  /** Update all instances for sim time t (ms) and wall clock seconds (for hub mingling). */
  function update(t, clock, hubMask) {
    if (!model) return;
    for (let a = 0; a < N; a++) {
      const walking = place(a, t);
      let x = tmpA[0], y = tmpA[1], z = tmpA[2], sc = 1;
      const li = curLoc;
      let r, g, b;
      if (walking) {
        r = 0.55; g = 0.95; b = 1.0; sc = 1.15;
      } else {
        if (hubMask[li]) {
          x += Math.sin(clock * 0.31 + ph1[a]) * 0.9; z += Math.cos(clock * 0.27 + ph2[a]) * 0.9;
          r = 1.0; g = 0.78; b = 0.5;
        } else { r = levelCol[li * 3]; g = levelCol[li * 3 + 1]; b = levelCol[li * 3 + 2]; }
      }
      const o = a * 16;
      mArr[o] = sc; mArr[o + 1] = 0; mArr[o + 2] = 0; mArr[o + 3] = 0;
      mArr[o + 4] = 0; mArr[o + 5] = sc; mArr[o + 6] = 0; mArr[o + 7] = 0;
      mArr[o + 8] = 0; mArr[o + 9] = 0; mArr[o + 10] = sc; mArr[o + 11] = 0;
      mArr[o + 12] = x; mArr[o + 13] = y; mArr[o + 14] = z; mArr[o + 15] = 1;
      cArr[a * 3] = r; cArr[a * 3 + 1] = g; cArr[a * 3 + 2] = b;
    }
    mesh.instanceMatrix.needsUpdate = true;
    mesh.instanceColor.needsUpdate = true;
  }

  return { mesh, setModel, update, setLocColor };
}
