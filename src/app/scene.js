// Three.js scene: renderer, camera, venue geometry (modelled from the venue map), room volumes, labels.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import G from '../venue/geometry.js';
import { ROOMS, HUBS } from '../model/config.js';
import { buildRoutes } from './routes.js';

export const LEVEL_HEX = { open: '#4fd6a8', filling: '#f4c24f', full: '#f0605d', running: '#6b8cff', none: '#7a869c' };
const LC = {};
for (const [k, hex] of Object.entries(LEVEL_HEX)) LC[k] = new THREE.Color(hex);
const lc = (k) => (LC[k] || LC.none).clone();
const lcRef = (k) => LC[k] || LC.none;

const FLOOR_LABEL = { n4: 'Floor 4 · north building', n0: 'Ground floor · north building', main2: '2nd floor · main building', main1: '1st floor · main building' };

export function createScene(container, labelsEl) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x070b16, 1);
  container.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x070b16, 220, 520);
  const camera = new THREE.PerspectiveCamera(38, 1, 1, 1200);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.minDistance = 25;
  controls.maxDistance = 420;
  controls.screenSpacePanning = true;

  scene.add(new THREE.HemisphereLight(0xaac4ff, 0x1a2036, 1.15));
  const sun = new THREE.DirectionalLight(0xffffff, 0.9);
  sun.position.set(60, 120, 80);
  scene.add(sun);

  const home = { pos: new THREE.Vector3(114, 66, 114), target: new THREE.Vector3(0, 25, 0) };
  camera.position.copy(home.pos);
  controls.target.copy(home.target);

  // --- venue
  const venue = new THREE.Group();
  scene.add(venue);
  const slabMat = (floor) => new THREE.MeshStandardMaterial({ color: floor.startsWith('n') ? 0x1b2744 : 0x172540, transparent: true, opacity: 0.42, roughness: 0.9, metalness: 0, depthWrite: false, side: THREE.DoubleSide });
  const lineMat = new THREE.LineBasicMaterial({ color: 0x5a7fc0, transparent: true, opacity: 0.85 });
  const shapeOf = (poly) => new THREE.Shape(poly.map((p) => new THREE.Vector2(p[0], -p[1])));
  for (const s of G.slabs) {
    const geo = new THREE.ExtrudeGeometry(shapeOf(s.poly), { depth: 0.5, bevelEnabled: false });
    geo.rotateX(-Math.PI / 2);
    const m = new THREE.Mesh(geo, slabMat(s.floor));
    m.position.y = s.y - 0.5;
    m.renderOrder = 1;
    venue.add(m);
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 20), lineMat);
    e.position.y = s.y - 0.5;
    venue.add(e);
  }
  // hubs (floor patches)
  const hubMeshes = {};
  // `entry` is the area between Hub 2 and the foot of the escalator: drawn like a hub, but nobody is assigned to it
  for (const h of [...HUBS, { id: 'entry' }]) {
    const r = G.rooms[h.id];
    if (!r) continue;
    const geo = new THREE.ShapeGeometry(shapeOf(r.poly));
    geo.rotateX(-Math.PI / 2);
    const mat = new THREE.MeshBasicMaterial({ color: 0xf0a860, transparent: true, opacity: 0.16, depthWrite: false, side: THREE.DoubleSide });
    const m = new THREE.Mesh(geo, mat);
    m.position.y = r.y + 0.06;
    m.renderOrder = 2;
    venue.add(m);
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0xf0a860, transparent: true, opacity: 0.45 }));
    e.position.y = r.y + 0.07;
    venue.add(e);
    hubMeshes[h.id] = m;
  }
  // walking routes (corridors, escalator, skywalk, stairs)
  {
    const { edges } = buildRoutes(ROOMS.map((r) => r.id));
    const pos = [];
    for (const [a, b] of edges) { pos.push(...G.nodes[a], ...G.nodes[b]); }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    const l = new THREE.LineSegments(geo, new THREE.LineBasicMaterial({ color: 0x7fb4ff, transparent: true, opacity: 0.22 }));
    venue.add(l);
    // Everything that changes floor (escalator to the skywalk, stairs down to Studio 1, north building staircase)
    // gets visible steps and handrails, so the floors read as connected.
    const flights = edges.filter(([a, b]) => Math.abs(G.nodes[a][1] - G.nodes[b][1]) > 0.3);
    const WIDTH = 2.4, counts = flights.map(([a, b]) => Math.max(4, Math.round(Math.abs(G.nodes[a][1] - G.nodes[b][1]) / 0.42)));
    const treads = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 0.14, WIDTH), new THREE.MeshBasicMaterial({ color: 0x9fc2ff, transparent: true, opacity: 0.6, depthWrite: false }), counts.reduce((x, y) => x + y, 0));
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc3 = new THREE.Vector3(), p3 = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);
    const rail = [];
    let n = 0;
    flights.forEach(([a, b], fi) => {
      const A = G.nodes[a], B = G.nodes[b], N = counts[fi];
      const dx = B[0] - A[0], dz = B[2] - A[2], run = Math.hypot(dx, dz) || 0.001;
      q.setFromAxisAngle(up, Math.atan2(-dz, dx));
      sc3.set(Math.max(0.5, (run / N) * 0.92), 1, 1);
      for (let i = 0; i < N; i++) {
        const f = (i + 0.5) / N;
        p3.set(A[0] + dx * f, A[1] + (B[1] - A[1]) * f, A[2] + dz * f);
        treads.setMatrixAt(n++, m4.compose(p3, q, sc3));
      }
      const ox = (-dz / run) * (WIDTH / 2), oz = (dx / run) * (WIDTH / 2);
      for (const s of [1, -1]) rail.push(A[0] + ox * s, A[1] + 1, A[2] + oz * s, B[0] + ox * s, B[1] + 1, B[2] + oz * s);
    });
    treads.renderOrder = 2;
    venue.add(treads);
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(rail, 3));
    venue.add(new THREE.LineSegments(rg, new THREE.LineBasicMaterial({ color: 0xbcd6ff, transparent: true, opacity: 0.8 })));
  }

  // --- rooms
  const rooms = {};
  const hitMeshes = [];
  for (const r of ROOMS) {
    const g = G.rooms[r.id];
    if (!g) continue;
    const o = g.obb;
    const H = 3.6;
    const grp = new THREE.Group();
    grp.position.set(o.cx, g.y, o.cz);
    grp.rotation.y = -o.rot;
    const box = new THREE.BoxGeometry(o.w, H, o.d);
    box.translate(0, H / 2, 0);
    const glassMat = new THREE.MeshBasicMaterial({ color: lc('none'), transparent: true, opacity: 0.07, depthWrite: false });
    const glass = new THREE.Mesh(box, glassMat);
    glass.renderOrder = 3;
    glass.userData.roomId = r.id;
    grp.add(glass);
    hitMeshes.push(glass);
    const edgeMat = new THREE.LineBasicMaterial({ color: lc('none'), transparent: true, opacity: 0.95 });
    grp.add(new THREE.LineSegments(new THREE.EdgesGeometry(box), edgeMat));
    const liqGeo = new THREE.BoxGeometry(o.w * 0.98, 1, o.d * 0.98);
    liqGeo.translate(0, 0.5, 0);
    const liqMat = new THREE.MeshBasicMaterial({ color: lc('none'), transparent: true, opacity: 0.3, depthWrite: false });
    const liq = new THREE.Mesh(liqGeo, liqMat);
    liq.scale.y = 0.02;
    liq.renderOrder = 2;
    grp.add(liq);
    venue.add(grp);
    rooms[r.id] = { id: r.id, def: r, geo: g, group: grp, glass, glassMat, edgeMat, liq, liqMat, color: lc('none'), anchor: new THREE.Vector3(o.cx, g.y + H + 0.6, o.cz), curFill: 0 };
  }

  // --- labels (DOM)
  const labels = [];
  const mk = (cls, html, anchor, extra) => {
    const el = document.createElement('div');
    el.className = 'lbl ' + cls;
    el.innerHTML = html;
    labelsEl.appendChild(el);
    const o = { el, anchor, lx: -1e9, ly: -1e9, ...extra };
    labels.push(o);
    return o;
  };
  for (const r of ROOMS) {
    const rm = rooms[r.id];
    if (!rm) continue;
    const l = mk('room', `<b>${r.name}</b><span class="cnt"></span><i class="bar"><u></u></i>`, rm.anchor, { roomId: r.id });
    rm.label = l;
    l.cnt = l.el.querySelector('.cnt');
    l.bar = l.el.querySelector('u');
    l.barWrap = l.el.querySelector('.bar');
  }
  for (const h of HUBS) {
    const g = G.rooms[h.id];
    if (!g) continue;
    const l = mk('hub', `<b>${h.name}</b><span class="cnt"></span>`, new THREE.Vector3(g.obb.cx, g.y + 3.2, g.obb.cz), { hubId: h.id });
    l.cnt = l.el.querySelector('.cnt');
  }
  if (G.rooms.entry) mk('floor', 'Entry area', new THREE.Vector3(G.rooms.entry.obb.cx, G.rooms.entry.y + 0.4, G.rooms.entry.obb.cz));
  const floorAnchors = {};
  for (const s of G.slabs) {
    const xs = s.poly.map((p) => p[0]);
    const minX = Math.min(...xs);
    const pt = s.poly.reduce((a, p) => (p[0] === minX ? p : a), s.poly[0]);
    floorAnchors[s.floor] = new THREE.Vector3(pt[0] - 2, s.y, pt[1]);
    mk('floor', FLOOR_LABEL[s.floor], floorAnchors[s.floor]);
  }

  // --- sizing
  function resize() {
    const w = container.clientWidth || 800, h = container.clientHeight || 600;
    renderer.setSize(w, h, false);
    renderer.domElement.style.width = w + 'px';
    renderer.domElement.style.height = h + 'px';
    camera.aspect = w / h;
    // keep the venue in view on tall (phone) screens: look along the long axis and widen the field of view
    const tall = w / h < 0.8;
    camera.fov = tall ? 55 : 38;
    camera.updateProjectionMatrix();
    if (tall) { home.pos.set(52, 96, 204); home.target.set(0, 27, -6); } else { home.pos.set(114, 66, 114); home.target.set(0, 25, 0); }
    if (!userMoved) { camera.position.copy(home.pos); controls.target.copy(home.target); }
  }
  let userMoved = false;
  window.addEventListener('resize', resize);
  resize();

  // --- camera animation
  let anim = null;
  function flyTo(pos, target, ms = 900) {
    anim = { t0: performance.now(), ms, p0: camera.position.clone(), q0: controls.target.clone(), p1: pos.clone(), q1: target.clone() };
  }
  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  function stepAnim(now) {
    if (!anim) return;
    const k = Math.min(1, (now - anim.t0) / anim.ms), e = ease(k);
    camera.position.lerpVectors(anim.p0, anim.p1, e);
    controls.target.lerpVectors(anim.q0, anim.q1, e);
    if (k >= 1) anim = null;
  }
  controls.addEventListener('start', () => { anim = null; userMoved = true; });
  function resetView() { flyTo(home.pos, home.target); }
  function focusRoom(id) {
    const rm = rooms[id];
    if (!rm) return;
    const t = new THREE.Vector3(rm.group.position.x, rm.group.position.y + 2, rm.group.position.z);
    const dir = camera.position.clone().sub(controls.target).normalize();
    const dist = id === 'millennium' ? 85 : 55;
    flyTo(t.clone().add(dir.multiplyScalar(dist)), t);
  }

  // --- label projection (no allocation per frame beyond a shared vector)
  const v = new THREE.Vector3();
  const placed = new Float32Array(64);
  function updateLabels() {
    const w = container.clientWidth, h = container.clientHeight;
    let np = 0;
    for (const l of labels) {
      v.copy(l.anchor).project(camera);
      const vis = v.z < 1 && v.z > -1 && Math.abs(v.x) < 1.15 && Math.abs(v.y) < 1.15;
      if (!vis) { if (l.shown !== false) { l.el.style.display = 'none'; l.shown = false; } continue; }
      if (l.shown === false) { l.el.style.display = ''; l.shown = true; }
      let x = (v.x + 1) * 0.5 * w, y = (1 - v.y) * 0.5 * h;
      if (l.roomId || l.hubId) {
        if (!l.w || l.wAt !== w) { l.w = l.el.offsetWidth || 90; l.h = l.el.offsetHeight || 34; l.wAt = w; }
        x = Math.min(w - l.w / 2 - 4, Math.max(l.w / 2 + 4, x));
        // simple vertical de-overlap against already placed room/hub labels
        for (let pass = 0; pass < 8; pass++) {
          let hit = false;
          for (let i = 0; i < np; i++) {
            const o = i * 4;
            if (x - l.w / 2 < placed[o + 2] + 3 && x + l.w / 2 > placed[o] - 3 && y - l.h < placed[o + 3] && y > placed[o + 1]) { y = placed[o + 1] - 3; hit = true; break; }
          }
          if (!hit) break;
        }
        if (np < 16) { const o = np * 4; placed[o] = x - l.w / 2; placed[o + 1] = y - l.h; placed[o + 2] = x + l.w / 2; placed[o + 3] = y; np++; }
      }
      if (Math.abs(x - l.lx) > 0.6 || Math.abs(y - l.ly) > 0.6) { l.lx = x; l.ly = y; l.el.style.transform = `translate(-50%,-100%) translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`; }
    }
  }

  // --- room state
  function setRoomState(id, fill, level, rec, selected, hl) {
    const rm = rooms[id];
    if (!rm) return;
    const target = lcRef(level);
    rm.color.lerp(target, 0.15);
    rm.curFill += (fill - rm.curFill) * 0.2;
    const f = Math.max(0.02, rm.curFill);
    rm.liq.scale.y = 3.5 * f;
    rm.liqMat.color.copy(rm.color);
    rm.liqMat.opacity = rec ? 0.32 : 0.16;
    rm.edgeMat.color.copy(rm.color);
    rm.edgeMat.opacity = selected ? 1 : hl ? 1 : 0.7;
    rm.glassMat.color.copy(rm.color);
    rm.glassMat.opacity = selected ? 0.18 : hl ? 0.2 : 0.07;
  }

  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pick(clientX, clientY, objects) {
    const rect = renderer.domElement.getBoundingClientRect();
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hits = raycaster.intersectObjects(objects, false);
    return hits.length ? hits[0].object : null;
  }

  return { renderer, scene, camera, controls, rooms, hitMeshes, hubMeshes, labels, resize, flyTo, resetView, focusRoom, stepAnim, updateLabels, setRoomState, pick, home, FLOOR_LABEL };
}
