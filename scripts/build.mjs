// Bundles src/app/main.js (+ three.js, data) into one classic IIFE script: dist/app.js (works from file://).
import { build } from 'esbuild';
await build({
  entryPoints: ['src/app/main.js'], bundle: true, minify: true, format: 'iife', target: 'es2020',
  outfile: 'dist/app.js', loader: { '.jsonl': 'text' }, legalComments: 'none', logLevel: 'info',
  define: { 'process.env.NODE_ENV': '"production"' },
});
