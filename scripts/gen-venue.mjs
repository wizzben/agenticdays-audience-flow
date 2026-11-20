// Generates src/venue/geometry.js from reference/venue-map-1.svg.
// The SVG is a stacked ("exploded") axonometric drawing: four floor slabs drawn one above the other.
// We invert a dimetric projection (plan axes drawn at about +27 and -24 degrees) to recover plan
// coordinates per floor, then shift each floor so the connections (lift, escalator) line up.
import fs from 'node:fs';

const svg = fs.readFileSync('reference/venue-map-1.svg', 'utf8');
const U = [0.891, 0.454]; // screen direction of plan axis X
const V = [0.914, -0.407]; // screen direction of plan axis Z
const det = U[0] * V[1] - U[1] * V[0];

// Per-floor vertical drawing offsets (screen px). main2 is the reference.
const D = { main2: 0, main1: 335, n4: -146, n0: 174 };
const ELEV = { main1: 0, main2: 5.5, n0: 0, n4: 10.5 }; // metres (schematic)

function pts(d) {
  return [...d.matchAll(/[ML](-?\d+\.?\d*)\s*(-?\d+\.?\d*)/g)].map((m) => [+m[1], +m[2]]);
}
function plan(p, floor) {
  const sx = p[0], sy = p[1] - D[floor];
  // solve sx = a*U0 + b*V0 ; sy = a*U1 + b*V1
  const a = (sx * V[1] - sy * V[0]) / det;
  const b = (U[0] * sy - U[1] * sx) / det;
  return [a, b];
}
const slabs = [...svg.matchAll(/class="vm-slab" d="([^"]+)"/g)].map((m) => pts(m[1]));
const slabFloor = ['n4', 'n0', 'main2', 'main1'];
const roomDefs = {};
for (const m of svg.matchAll(/<path id="room-([a-z0-9]+)" class="([^"]+)" d="([^"]+)"/g)) roomDefs[m[1]] = { cls: m[2], pts: pts(m[3]) };
const roomFloor = { millennium: 'main2', studio4: 'n4', studio6: 'n4', studio3: 'n0', studio1: 'main1', century: 'main2', hub2: 'main2', hub4: 'n4', saechsiluute: 'n4' };

function dp(poly, eps) {
  if (poly.length < 4) return poly;
  const sq = (a, b, c) => {
    const dx = c[0] - b[0], dy = c[1] - b[1];
    const l2 = dx * dx + dy * dy || 1;
    const t = Math.max(0, Math.min(1, ((a[0] - b[0]) * dx + (a[1] - b[1]) * dy) / l2));
    return Math.hypot(a[0] - b[0] - t * dx, a[1] - b[1] - t * dy);
  };
  const rec = (arr) => {
    let mx = 0, idx = 0;
    for (let i = 1; i < arr.length - 1; i++) { const d = sq(arr[i], arr[0], arr[arr.length - 1]); if (d > mx) { mx = d; idx = i; } }
    if (mx > eps) return [...rec(arr.slice(0, idx + 1)).slice(0, -1), ...rec(arr.slice(idx))];
    return [arr[0], arr[arr.length - 1]];
  };
  // close ring: split at farthest points
  let i0 = 0, j0 = 0, best = 0;
  for (let i = 0; i < poly.length; i++) for (let j = i + 1; j < poly.length; j++) { const d = Math.hypot(poly[i][0] - poly[j][0], poly[i][1] - poly[j][1]); if (d > best) { best = d; i0 = i; j0 = j; } }
  const a = poly.slice(i0, j0 + 1), b = [...poly.slice(j0), ...poly.slice(0, i0 + 1)];
  return [...rec(a).slice(0, -1), ...rec(b).slice(0, -1)];
}
function hull(p) {
  const s = [...p].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [];
  for (const q of s) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  const up = [];
  for (const q of s.reverse()) { while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 0) up.pop(); up.push(q); }
  return [...lo.slice(0, -1), ...up.slice(0, -1)];
}
function obb(poly) {
  const h = hull(poly);
  let best = null;
  for (let i = 0; i < h.length; i++) {
    const a = h[i], b = h[(i + 1) % h.length];
    const ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
    const c = Math.cos(-ang), s = Math.sin(-ang);
    let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
    for (const p of h) { const x = p[0] * c - p[1] * s, y = p[0] * s + p[1] * c; x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
    const area = (x1 - x0) * (y1 - y0);
    if (!best || area < best.area) {
      const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2;
      best = { area, w: x1 - x0, d: y1 - y0, rot: ang, cx: cx * Math.cos(ang) - cy * Math.sin(ang), cz: cx * Math.sin(ang) + cy * Math.cos(ang) };
    }
  }
  return best;
}

// scale: make Millennium's long side about 34 m
const milPlan = roomDefs.millennium.pts.map((p) => plan(p, 'main2'));
const mo = obb(milPlan);
const SC = 34 / Math.max(mo.w, mo.d);

// centre of everything
const all = [];
slabs.forEach((s, i) => s.forEach((p) => all.push(plan(p, slabFloor[i]))));
const bb = all.reduce((a, p) => [Math.min(a[0], p[0]), Math.max(a[1], p[0]), Math.min(a[2], p[1]), Math.max(a[3], p[1])], [1e9, -1e9, 1e9, -1e9]);
const CX = (bb[0] + bb[1]) / 2, CZ = (bb[2] + bb[3]) / 2;
const W = (p, floor) => { const q = plan(p, floor); return [(q[0] - CX) * SC, (q[1] - CZ) * SC]; };
const r1 = (n) => Math.round(n * 10) / 10;
const rp = (p) => [r1(p[0]), r1(p[1])];

const out = { scale: SC, elev: ELEV, slabs: [], rooms: {}, nodes: {}, bbox: null };
slabs.forEach((s, i) => {
  out.slabs.push({ floor: slabFloor[i], y: ELEV[slabFloor[i]], poly: dp(s, 6).map((p) => rp(W(p, slabFloor[i]))) });
});
for (const [id, def] of Object.entries(roomDefs)) {
  const f = roomFloor[id];
  if (!f) continue;
  const wp = def.pts.map((p) => W(p, f));
  const o = obb(wp);
  out.rooms[id] = {
    floor: f, y: ELEV[f], kind: def.cls.includes('foyer') ? 'hub' : def.cls.includes('service') ? 'service' : 'room',
    poly: dp(def.pts, 5).map((p) => rp(W(p, f))),
    obb: { cx: r1(o.cx), cz: r1(o.cz), w: r1(o.w), d: r1(o.d), rot: Math.round(o.rot * 1000) / 1000 },
  };
}
// nodes (screen coords + floor) for routes
const NODES = {
  welcome: [850, 952, 'main2'], esc_bot: [998, 816, 'main2'], esc_top: [1088, 716, 'n4'], skywalk_mid: [1168, 684, 'n4'],
  h4_in: [1344, 602, 'n4'], h4_mid: [1388, 556, 'n4'], n4_corr: [1404, 440, 'n4'], lift_top: [1507, 456, 'n4'],
  lift_bot: [1507, 776, 'n0'], entr_n: [1300, 814, 'n0'], entr_mid: [1436, 800, 'n0'],
  stair_top: [912, 930, 'main2'], stair_bot: [912, 1234, 'main1'], s1_door: [812, 1284, 'main1'],
  c_door: [437, 896, 'main2'], h2_door: [690, 960, 'main2'],
  s6_door: [1158, 540, 'n4'], s4_door: [1450, 520, 'n4'], s3_door: [1400, 770, 'n0'], m_door: [940, 985, 'main2'],
  s6_link: [1210, 668, 'n4'],
};
for (const [k, [x, y, f]] of Object.entries(NODES)) {
  const w = W([x, y], f);
  out.nodes[k] = [r1(w[0]), ELEV[f], r1(w[1])];
}
// compute bbox
const xs = out.slabs.flatMap((s) => s.poly.map((p) => p[0])), zs = out.slabs.flatMap((s) => s.poly.map((p) => p[1]));
out.bbox = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)].map(r1);
fs.mkdirSync('src/venue', { recursive: true });
fs.writeFileSync('src/venue/geometry.js', '// generated by scripts/gen-venue.mjs from reference/venue-map-1.svg — do not edit\nexport default ' + JSON.stringify(out) + ';\n');
console.log('scale', SC, 'bbox', out.bbox);
for (const [k, v] of Object.entries(out.rooms)) console.log(k, v.floor, JSON.stringify(v.obb));
for (const s of out.slabs) console.log(s.floor, s.poly.length, 'pts');
// plan preview svg
const col = { main2: '#58a', main1: '#8a5', n4: '#a85', n0: '#a58' };
let sv = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${out.bbox[0] - 5} ${out.bbox[2] - 5} ${out.bbox[1] - out.bbox[0] + 10} ${out.bbox[3] - out.bbox[2] + 10}" width="1200" style="background:#111">`;
for (const s of out.slabs) sv += `<polygon points="${s.poly.map((p) => p.join(',')).join(' ')}" fill="${col[s.floor]}" fill-opacity=".25" stroke="${col[s.floor]}" stroke-width=".3"/>`;
for (const [k, r] of Object.entries(out.rooms)) sv += `<polygon points="${r.poly.map((p) => p.join(',')).join(' ')}" fill="${col[r.floor]}" fill-opacity=".5"/><text x="${r.obb.cx}" y="${r.obb.cz}" font-size="2.5" fill="#fff">${k}</text>`;
for (const [k, n] of Object.entries(out.nodes)) sv += `<circle cx="${n[0]}" cy="${n[2]}" r=".7" fill="#f55"/><text x="${n[0] + 1}" y="${n[2]}" font-size="1.6" fill="#fcc">${k}</text>`;
sv += '</svg>';
fs.writeFileSync(process.env.PREVIEW || 'plan-preview.svg', sv);
