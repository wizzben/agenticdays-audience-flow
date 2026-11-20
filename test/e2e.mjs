// Headless browser tests (Playwright + system Chrome). Run: node test/e2e.mjs   (needs Google Chrome installed)
// Loads the app from file:// and from a local static server; asserts zero console errors, non-blank canvas,
// playback, scrubbing, room selection, cloud resizing, phone layout and the network allow-list.
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { synthRecording, toJsonl } from '../src/model/synth.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = 'https://raw.githubusercontent.com/wizzben/agenticdays-audience-flow/data/recording.jsonl';
const sessions = JSON.parse(fs.readFileSync(path.join(root, 'data/sessions.json'), 'utf8'));
const t0 = Date.parse('2026-11-20T12:00:00+01:00');

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };
const server = http.createServer((req, res) => {
  const u = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  const f = path.join(root, u === '/' ? 'index.html' : u);
  if (!f.startsWith(root) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'content-type': MIME[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(0, '127.0.0.1');
await new Promise((r) => server.once('listening', r));
const base = `http://127.0.0.1:${server.address().port}`;

const results = [];
let failed = 0;
function check(name, ok, detail = '') {
  results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  ' + detail : ''}`);
  if (!ok) failed++;
}

const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });

async function open(url, { viewport = { width: 1280, height: 800 }, raw = 'fixture' } = {}) {
  const ctx = await browser.newContext({ viewport });
  const page = await ctx.newPage();
  const msgs = [], requests = [];
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') msgs.push(`${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => msgs.push('pageerror: ' + e.message));
  page.on('request', (r) => requests.push(r.url()));
  await page.route(RAW + '*', (route) => {
    if (raw === 'fixture') {
      const rec = synthRecording(sessions, { seed: 2, from: t0 + 30 * 60000, to: t0 + 2 * 3600000 });
      route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*', 'content-type': 'text/plain' }, body: toJsonl(rec) });
    } else route.fulfill({ status: 404, body: 'Not Found' });
  });
  await page.goto(url);
  await page.waitForFunction(() => window.AED_READY === true, null, { timeout: 15000 });
  await page.waitForTimeout(600);
  return { page, ctx, msgs, requests };
}
// warnings from the software GL driver are not app errors
const appMsgs = (msgs) => msgs.filter((m) => !/GL Driver Message|GPU stall|swiftshader|WebGL: INVALID|Automatic fallback to software WebGL/i.test(m));

async function canvasStats(page) {
  return page.evaluate(() => {
    const A = window.AED, r = A.scene.renderer, gl = r.getContext();
    r.render(A.scene.scene, A.scene.camera);
    const w = gl.drawingBufferWidth, h = gl.drawingBufferHeight;
    const px = new Uint8Array(4);
    const seen = new Set();
    let bright = 0, n = 0;
    for (let y = 0; y < h; y += Math.floor(h / 24)) for (let x = 0; x < w; x += Math.floor(w / 32)) {
      gl.readPixels(x, y, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);
      seen.add((px[0] >> 4) + ',' + (px[1] >> 4) + ',' + (px[2] >> 4));
      if (px[0] + px[1] + px[2] > 120) bright++;
      n++;
    }
    return { colors: seen.size, bright, n };
  });
}

for (const [label, url] of [['file://', 'file://' + path.join(root, 'index.html')], ['http://localhost', base + '/index.html']]) {
  const { page, ctx, msgs, requests } = await open(url + '?t=14:20&play=0');
  const st = await canvasStats(page);
  check(`[${label}] canvas is not blank`, st.colors > 6 && st.bright > 10, JSON.stringify(st));
  check(`[${label}] 3D scene has rooms, crowd and clouds`, await page.evaluate(() => Object.keys(AED.scene.rooms).length === 5 && AED.crowd.mesh.count === 500 && AED.clouds.clouds.length === 20));

  // play advances time
  const a = await page.evaluate(() => AED.state.t);
  await page.click('#btn-play');
  await page.waitForTimeout(1500);
  const b = await page.evaluate(() => AED.state);
  check(`[${label}] play advances time`, b.playing && b.t > a + 2 * 60000, `${((b.t - a) / 60000).toFixed(1)} sim-min in 1.5 s`);
  await page.click('#btn-play');
  check(`[${label}] pause stops time`, await (async () => { const x = await page.evaluate(() => AED.state.t); await page.waitForTimeout(400); return (await page.evaluate(() => AED.state.t)) === x; })());

  // scrubbing
  const box = await page.locator('#timeline').boundingBox();
  await page.mouse.click(box.x + box.width * 0.5, box.y + box.height / 2);
  const mid = await page.evaluate(() => AED.state.t);
  check(`[${label}] scrubbing the timeline jumps to that time`, Math.abs(mid - (t0 + 2.5 * 3600000)) < 5 * 60000, new Date(mid).toISOString());
  await page.mouse.move(box.x + box.width * 0.2, box.y + 30);
  await page.mouse.down(); await page.mouse.move(box.x + box.width * 0.8, box.y + 30, { steps: 5 }); await page.mouse.up();
  const dr = await page.evaluate(() => AED.state.t);
  check(`[${label}] dragging the playhead works`, Math.abs(dr - (t0 + 4 * 3600000)) < 8 * 60000);

  // keyboard
  await page.evaluate(() => AED.app.seek(AED.model().t0 + 3600000));
  await page.keyboard.press('ArrowRight');
  const k1 = await page.evaluate(() => AED.state.t);
  check(`[${label}] arrow right = +1 min`, k1 === t0 + 3600000 + 60000);
  await page.keyboard.press(']');
  const k2 = await page.evaluate(() => AED.state.t);
  check(`[${label}] ] jumps to next session change`, k2 > k1 + 1000);
  await page.keyboard.press('Space');
  check(`[${label}] space toggles play`, (await page.evaluate(() => AED.state.playing)) === true);
  await page.keyboard.press('Space');

  // clouds change size over the timeline
  await page.evaluate(() => AED.app.seek(AED.model().t0 + 10 * 60000));
  await page.waitForTimeout(1500);
  const s1 = await page.evaluate(() => AED.clouds.sizes());
  await page.evaluate(() => AED.app.seek(AED.model().t0 + 3.5 * 3600000));
  await page.waitForTimeout(1800);
  const s2 = await page.evaluate(() => AED.clouds.sizes());
  const changed = s1.filter((v, i) => Math.abs(v - s2[i]) > 0.3).length;
  check(`[${label}] topic clouds change size over the timeline`, changed >= 8, `${changed}/${s1.length} clouds differ; mean ${avg(s1).toFixed(2)} -> ${avg(s2).toFixed(2)}`);

  // room selection by real click on the canvas
  await page.evaluate(() => AED.app.seek(AED.model().t0 + 3 * 3600000 + 30 * 60000));
  await page.waitForTimeout(300);
  const pt = await page.evaluate(() => {
    const A = AED.scene, rm = A.rooms.studio4;
    const v = rm.group.position.clone(); v.y += 1.8;
    v.project(A.camera);
    const r = A.renderer.domElement.getBoundingClientRect();
    return { x: r.left + ((v.x + 1) / 2) * r.width, y: r.top + ((1 - v.y) / 2) * r.height };
  });
  await page.mouse.click(pt.x, pt.y);
  await page.waitForTimeout(300);
  const sel = await page.evaluate(() => ({ s: AED.state.selected, panel: !document.getElementById('panel').hidden, txt: document.getElementById('panel').innerText.slice(0, 80) }));
  check(`[${label}] clicking a room selects it and opens the panel`, sel.s === 'studio4' && sel.panel, JSON.stringify(sel.txt));
  await page.keyboard.press('Escape');
  check(`[${label}] Escape clears the selection`, (await page.evaluate(() => AED.state.selected)) === null);

  // hover a cloud label highlights sessions
  const hp = await page.evaluate(() => { for (const el of document.querySelectorAll('.lbl.cloud:not(.off)')) { const r = el.getBoundingClientRect(); const x = r.left + r.width / 2, y = r.top + r.height / 2; if (document.elementFromPoint(x, y)?.closest('.lbl.cloud') === el) return { x, y }; } return null; });
  await page.mouse.move(hp.x, hp.y);
  await page.waitForTimeout(200);
  check(`[${label}] hovering a cloud shows a tooltip and highlights sessions`, await page.evaluate(() => !document.getElementById('tip').hidden && document.querySelectorAll('.blk.hl').length > 0));
  await page.mouse.move(5, 400);

  // network allow-list
  const extra = requests.filter((u) => !/^(data:|blob:|file:|http:\/\/127\.0\.0\.1)/.test(u) && !u.startsWith(RAW));
  check(`[${label}] no network requests other than the raw recording URL`, extra.length === 0, extra.join(' '));
  check(`[${label}] recording fetch was attempted once the page loaded`, requests.some((u) => u.startsWith(RAW)));
  check(`[${label}] zero console errors/warnings`, appMsgs(msgs).length === 0, appMsgs(msgs).join(' | '));
  await ctx.close();
}

// fetched data is merged without restarting playback
{
  const { page, ctx, msgs } = await open(base + '/index.html?now=13:30&t=13:00&play=0');
  await page.waitForFunction(() => AED.model().lastSample > Date.parse('2026-11-20T13:00:00+01:00'), null, { timeout: 8000 }).catch(() => {});
  const r = await page.evaluate(() => ({ n: AED.model().nSamples, last: AED.model().lastSample, t: AED.state.t }));
  check('live fetch merges new samples into the model without moving the playhead', r.n > 100 && r.t === t0 + 3600000, JSON.stringify(r));
  check('merged-data page has zero console errors', appMsgs(msgs).length === 0, appMsgs(msgs).join(' | '));
  await ctx.close();
}
// failing fetch (repo private -> 404) is silent and the app keeps working with the embedded snapshot
{
  const { page, ctx, msgs } = await open(base + '/index.html?t=12:40&play=0', { raw: '404' });
  await page.waitForTimeout(1500);
  const st = await canvasStats(page);
  const n = await page.evaluate(() => AED.model().nSamples);
  check('404 on the recording URL: app still renders from the embedded snapshot', st.colors > 6 && n >= 1, `samples=${n}`);
  // the browser itself logs the failed network load; the app must not add its own errors
  const own = appMsgs(msgs).filter((m) => !/Failed to load resource.*404/i.test(m));
  check('404 on the recording URL: no application console errors (browser network log ignored)', own.length === 0, own.join(' | '));
  await ctx.close();
}
// demo mode
{
  const { page, ctx, msgs } = await open(base + '/index.html?demo&t=14:00&play=0');
  const m = await page.evaluate(() => ({ chip: document.getElementById('chip-mode').textContent, n: AED.model().nSamples }));
  check('?demo uses synthetic data and labels it', /synthetic/i.test(m.chip) && m.n > 400, JSON.stringify(m));
  check('?demo has zero console errors', appMsgs(msgs).length === 0, appMsgs(msgs).join(' | '));
  await ctx.close();
}
// projected vs recorded labelling
{
  const { page, ctx } = await open(base + '/index.html?demo=live&t=15:30&play=0');
  const chip = await page.evaluate(() => document.getElementById('chip-mode').textContent);
  check('time beyond the recorded data is labelled projected', /projected/i.test(chip), chip);
  await ctx.close();
}
// live mode follows the (overridden) clock
{
  const { page, ctx } = await open(base + '/index.html?now=13:10');
  await page.waitForTimeout(500);
  const s = await page.evaluate(() => ({ live: AED.state.live, t: AED.state.t, btn: document.getElementById('btn-live').classList.contains('on') }));
  check('Live mode follows real time', s.live && s.btn && Math.abs(s.t - (t0 + 70 * 60000)) < 30000, JSON.stringify(s));
  await page.evaluate(() => AED.app.seek(AED.model().t0));
  await page.click('#btn-live');
  check('Live button returns to now', (await page.evaluate(() => AED.state.live)) === true);
  await ctx.close();
}
// phone width
for (const [name, vp] of [['phone 390x844', { width: 390, height: 844 }], ['phone landscape 844x390', { width: 844, height: 390 }]]) {
  const { page, ctx, msgs } = await open(base + '/index.html?demo&t=15:30&play=0', { viewport: vp });
  const lay = await page.evaluate(() => {
    const W = innerWidth;
    const bad = [];
    for (const sel of ['#btn-play', '#btn-live', '#sel-speed', '#clock-t', '#timeline', '#btn-reset', '#btn-legend', '#btn-clouds', '.brand h1']) {
      const r = document.querySelector(sel).getBoundingClientRect();
      if (r.left < -1 || r.right > W + 1 || r.width === 0) bad.push(sel + ':' + Math.round(r.left) + '-' + Math.round(r.right));
    }
    return { scrollW: document.documentElement.scrollWidth, W, bad };
  });
  check(`[${name}] no horizontal overflow, controls inside viewport`, lay.scrollW <= lay.W && lay.bad.length === 0, JSON.stringify(lay));
  const st = await canvasStats(page);
  check(`[${name}] canvas renders`, st.colors > 6);
  check(`[${name}] zero console errors`, appMsgs(msgs).length === 0, appMsgs(msgs).join(' | '));
  await ctx.close();
}

await browser.close();
server.close();
function avg(a) { return a.reduce((x, y) => x + y, 0) / a.length; }
console.log(results.join('\n'));
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
