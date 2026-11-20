// Takes review screenshots: node scripts/screens.mjs <outDir> [baseQuery]
import { chromium } from 'playwright-core';
import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = process.argv[2];
const q = process.argv[3] || 'demo';
fs.mkdirSync(out, { recursive: true });
const browser = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=metal', '--ignore-gpu-blocklist'] });
async function shot(name, query, vp, after) {
  const page = await browser.newPage({ viewport: vp });
  page.on('console', (m) => { if (['error', 'warning'].includes(m.type())) console.log(`[${name}] console.${m.type()}: ${m.text()}`); });
  page.on('pageerror', (e) => console.log(`[${name}] pageerror: ${e.message}`));
  await page.goto('file://' + path.join(root, 'index.html') + '?' + query);
  await page.waitForFunction(() => window.AED_READY === true);
  await page.waitForTimeout(1800);
  if (after) { await after(page); await page.waitForTimeout(1500); }
  await page.screenshot({ path: path.join(out, name + '.png') });
  await page.close();
}
const D = { width: 1440, height: 900 }, P = { width: 390, height: 844 };
await shot('1-start', `${q}&t=12:05&play=0&nofetch`, D);
await shot('2-mid', `${q}&t=14:25&play=0&nofetch`, D);
await shot('3-change', `${q}&t=14:16&play=0&nofetch`, D);
await shot('4-room', `${q}&t=15:30&play=0&nofetch`, D, (p) => p.evaluate(() => AED.app.selectRoom('millennium')));
await shot('5-studio', `${q}&t=14:00&play=0&nofetch`, D, (p) => p.evaluate(() => AED.app.selectRoom('studio4')));
await shot('6-phone', `${q}&t=14:25&play=0&nofetch`, P);
await shot('7-phone-room', `${q}&t=14:25&play=0&nofetch`, P, (p) => p.evaluate(() => AED.app.selectRoom('studio6')));
await shot('8-legend', `${q}&t=14:25&play=0&nofetch&legend`, D);
await shot('9-projection', `demo=live&t=15:20&play=0&nofetch`, D);
await shot('10-topic', `${q}&t=15:00&play=0&nofetch`, D, async (p) => { await p.evaluate(() => AED.scene.labels.length); const pt = await p.evaluate(() => { for (const el of document.querySelectorAll('.lbl.cloud:not(.off)')) { const r = el.getBoundingClientRect(); const x = r.left + r.width / 2, y = r.top + r.height / 2; if (document.elementFromPoint(x, y)?.closest('.lbl.cloud') === el) return { x, y }; } }); await p.mouse.move(pt.x, pt.y); });
await browser.close();
