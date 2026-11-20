// usage: node scripts/shot.mjs <url|file> <out.png> [w] [h] [waitMs] [js-to-eval]
import { chromium } from 'playwright-core';
import path from 'node:path';
const [, , src, out, w = '1280', h = '800', wait = '1500', js] = process.argv;
const b = await chromium.launch({ channel: 'chrome', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
p.on('console', (m) => console.log('[console.' + m.type() + ']', m.text()));
p.on('pageerror', (e) => console.log('[pageerror]', e.message));
await p.goto(/^(https?|file):/.test(src) ? src : 'file://' + path.resolve(src));
await p.waitForTimeout(+wait);
if (js) { console.log('eval ->', JSON.stringify(await p.evaluate(js))); await p.waitForTimeout(800); }
await p.screenshot({ path: out });
await b.close();
