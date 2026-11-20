// Walking graph between the locations of the venue (corridors, escalator, skywalk, lifts).
import G from '../venue/geometry.js';

const EDGES = [
  ['c_door', 'h2_door'], ['h2_door', 'welcome'], ['welcome', 'm_door'], ['welcome', 'esc_bot'],
  ['h2_door', 'stair_top'], ['stair_top', 'stair_bot'], ['stair_bot', 's1_door'],
  ['esc_bot', 'esc_top'], ['esc_top', 'skywalk_mid'], ['skywalk_mid', 's6_link'], ['s6_link', 's6_door'],
  ['skywalk_mid', 'h4_in'], ['h4_in', 'h4_mid'], ['h4_mid', 's4_door'], ['h4_mid', 'lift_top'],
  ['lift_top', 'lift_bot'], ['lift_bot', 'entr_mid'], ['entr_mid', 'entr_n'], ['entr_mid', 's3_door'],
];
export const DOOR = {
  century: 'c_door', hub2: 'h2_door', millennium: 'm_door', studio1: 's1_door', studio3: 's3_door',
  studio4: 's4_door', studio6: 's6_door', hub4: 'h4_mid',
};

export function buildRoutes(locIds) {
  const adj = new Map();
  for (const [a, b] of EDGES) {
    const pa = G.nodes[a], pb = G.nodes[b];
    if (!pa || !pb) continue;
    const d = Math.hypot(pa[0] - pb[0], pa[1] - pb[1], pa[2] - pb[2]) + (Math.abs(pa[1] - pb[1]) > 1 ? 6 : 0);
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push([b, d]); adj.get(b).push([a, d]);
  }
  const path = (from, to) => {
    const dist = new Map([[from, 0]]), prev = new Map(), todo = new Set(adj.keys());
    while (todo.size) {
      let u = null;
      for (const n of todo) if (dist.has(n) && (u == null || dist.get(n) < dist.get(u))) u = n;
      if (u == null || u === to) break;
      todo.delete(u);
      for (const [v, d] of adj.get(u)) if (!dist.has(v) || dist.get(u) + d < dist.get(v)) { dist.set(v, dist.get(u) + d); prev.set(v, u); }
    }
    const out = [to];
    while (out[0] !== from) { const p = prev.get(out[0]); if (!p) return [from, to]; out.unshift(p); }
    return out;
  };
  const L = locIds.length;
  const routes = []; // routes[from*L+to] = {pts:Float32Array, cum:Float32Array, len}
  for (let a = 0; a < L; a++) {
    for (let b = 0; b < L; b++) {
      if (a === b) { routes.push(null); continue; }
      const names = path(DOOR[locIds[a]], DOOR[locIds[b]]);
      const pts = new Float32Array(names.length * 3);
      const cum = new Float32Array(names.length);
      names.forEach((n, i) => {
        const p = G.nodes[n];
        pts[i * 3] = p[0]; pts[i * 3 + 1] = p[1]; pts[i * 3 + 2] = p[2];
        if (i) cum[i] = cum[i - 1] + Math.hypot(pts[i * 3] - pts[i * 3 - 3], pts[i * 3 + 1] - pts[i * 3 - 2], pts[i * 3 + 2] - pts[i * 3 - 1]);
      });
      routes.push({ pts, cum, len: cum[cum.length - 1], n: names.length, names });
    }
  }
  return { routes, edges: EDGES.filter(([a, b]) => G.nodes[a] && G.nodes[b]) };
}
