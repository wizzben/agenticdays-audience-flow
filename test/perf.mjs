// Frame-time and allocation check in headless Chrome with the full crowd (500 people) and all clouds.
// Run: node test/perf.mjs [swiftshader|metal]
import { chromium } from 'playwright-core';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const gpu = process.argv[2] || 'metal';
const angle = gpu === 'swiftshader' ? ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] : ['--use-angle=metal'];
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: [...angle, '--ignore-gpu-blocklist', '--enable-precise-memory-info', '--js-flags=--expose-gc'] });
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
await page.goto('file://' + path.join(root, 'index.html') + '?demo&t=14:15&speed=10&play=1&nofetch');
await page.waitForFunction(() => window.AED_READY === true);
await page.waitForTimeout(1500);
const renderer = await page.evaluate(() => { const gl = AED.scene.renderer.getContext(); const e = gl.getExtension('WEBGL_debug_renderer_info'); return e ? gl.getParameter(e.UNMASKED_RENDERER_WEBGL) : 'unknown'; });
// 1) rAF intervals over 6 s while the movie plays (a crowd change happens around 14:20 and 15:20)
const raf = await page.evaluate(() => new Promise((res) => {
  const d = []; let last = performance.now(); const end = last + 6000;
  const tick = (ts) => { d.push(ts - last); last = ts; if (ts < end) requestAnimationFrame(tick); else res(d); };
  requestAnimationFrame(tick);
}));
raf.shift();
const sorted = [...raf].sort((a, b) => a - b);
const mean = raf.reduce((a, b) => a + b, 0) / raf.length;
const p95 = sorted[Math.floor(sorted.length * 0.95)];
// 2) CPU time of one full frame of our code (update crowd + clouds + labels + render submit), measured directly
const cpu = await page.evaluate(() => {
  const A = AED; A.app.seek(AED.model().t0 + 2.3 * 3600000);
  const t = A.state.t;
  const mask = new Uint8Array(8);
  const N = 300; let sum = 0, mx = 0;
  for (let i = 0; i < N; i++) {
    const t0 = performance.now();
    A.crowd.update(t + i * 5000, i * 0.016, mask);
    A.clouds.update(t + i * 5000, 0.016, i * 0.016, false);
    A.scene.updateLabels();
    A.scene.renderer.render(A.scene.scene, A.scene.camera);
    const d = performance.now() - t0; sum += d; if (d > mx) mx = d;
  }
  return { mean: sum / N, max: mx };
});
// 3) allocation in the hot loop, measured with V8's sampling heap profiler (statistical, 32-byte interval)
const cdp = await page.context().newCDPSession(page);
await cdp.send('HeapProfiler.enable');
const FR = 3000;
async function allocOf(fnSrc) {
  await page.evaluate(() => gc());
  await cdp.send('HeapProfiler.startSampling', { samplingInterval: 32 });
  await page.evaluate(`(() => { const A = AED; const mask = new Uint8Array(8); const t = A.model().t0 + 2.3 * 3600000; for (let i = 0; i < ${FR}; i++) { ${fnSrc} } })()`);
  const { profile } = await cdp.send('HeapProfiler.stopSampling');
  let total = 0; const by = {};
  (function walk(n) { total += n.selfSize; if (n.selfSize) by[n.callFrame.functionName + '@' + n.callFrame.url.split('/').pop()] = (by[n.callFrame.functionName + '@' + n.callFrame.url.split('/').pop()] || 0) + n.selfSize; n.children.forEach(walk); })(profile.head);
  return { bytesPerFrame: +(total / FR).toFixed(2), top: Object.entries(by).sort((a, b) => b[1] - a[1]).slice(0, 2) };
}
const alloc = {
  crowdUpdate_500_people: await allocOf('A.crowd.update(t + i * 3000, i * 0.016, mask);'),
  cloudsUpdate_24_clouds_no_label_layout: await allocOf('A.clouds.update(t + i * 3000, 0.016, i * 0.016, false);'),
  roomStates: await allocOf("for (const id of ['millennium','studio4','studio6','studio3','studio1']) A.scene.setRoomState(id, 0.5, 'filling', true, false, false);"),
  labelProjection: await allocOf('A.scene.updateLabels();'),
};
console.log(JSON.stringify({ gpu, renderer, frames: raf.length, rafMeanMs: +mean.toFixed(2), rafP95Ms: +p95.toFixed(2), rafMaxMs: +Math.max(...raf).toFixed(2), fps: +(1000 / mean).toFixed(1), cpuFrameMeanMs: +cpu.mean.toFixed(2), cpuFrameMaxMs: +cpu.max.toFixed(2), alloc, pageErrors: errs }, null, 2));
await browser.close();
