// build.mjs — esbuild 打包：产出自包含扩展 bundle（SillyTavern manifest 注入主页面）
//
// 用法：node build.mjs            生产构建
//      node build.mjs --dev       开发构建（未压缩 + 内联 sourcemap）
//      node build.mjs --watch     监听变化自动重建
//
// 产物：
//   dist/index.js    主 bundle（ESM：ST 用 import() 加载扩展脚本，import.meta.url 可用）
//   dist/index.css   全部样式（从 src/ui/styles.ts 的 PANEL_CSS 提取，manifest 的 css 字段注入）

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const SRC = resolve(ROOT, 'src');
const OUTDIR = resolve(ROOT, 'dist');
const JS_OUT = resolve(OUTDIR, 'index.js');

// esbuild 解析：本目录 node_modules → 参考项目 node_modules（pnpm 布局）→ 报错提示安装
const REF_NM = resolve(ROOT, '..', '开局框架-扩展', 'node_modules');
async function loadEsbuild() {
  try {
    return await import('esbuild');
  } catch { /* 回落到参考项目 */ }
  const ref = resolve(REF_NM, '.pnpm', 'esbuild@0.24.0', 'node_modules', 'esbuild', 'lib', 'main.js');
  if (existsSync(ref)) return await import(pathToFileURL(ref).href);
  throw new Error('找不到 esbuild：请 pnpm install（本目录或 ../开局框架-扩展 均可）');
}

const esbuild = await loadEsbuild();
const CSS_OUT = resolve(OUTDIR, 'index.css');

const args = process.argv.slice(2);
const isDev = args.includes('--dev') || args.includes('--watch');
const isWatch = args.includes('--watch');

if (!isWatch && existsSync(OUTDIR)) rmSync(OUTDIR, { recursive: true, force: true });
mkdirSync(OUTDIR, { recursive: true });

// ?raw 导入 plugin（tables/standard.json 以文本打进 bundle）
const rawPlugin = {
  name: 'raw-loader',
  setup(build) {
    build.onResolve({ filter: /\?raw$/ }, (args) => {
      const realPath = args.path.replace(/\?raw$/, '');
      return { path: resolve(dirname(args.importer), realPath), namespace: 'raw' };
    });
    build.onLoad({ filter: /.*/, namespace: 'raw' }, (args) => {
      return { contents: readFileSync(args.path, 'utf8'), loader: 'text' };
    });
  },
};

const options = {
  entryPoints: [resolve(SRC, 'index.ts')],
  bundle: true,
  minify: !isDev,
  sourcemap: isDev ? 'inline' : false,
  target: ['es2022'],
  charset: 'utf8', // 保留中文原文（默认 ascii 会全部转 \uXXXX，产物可读性差且体积更大）
  // ESM：SillyTavern 以 import() 加载扩展 js；slash 命令模块也按相对 URL 动态 import
  format: 'esm',
  platform: 'browser',
  legalComments: 'none',
  outfile: JS_OUT,
  plugins: [rawPlugin],
  logLevel: 'info',
};

/** 从 ui/styles.ts 提取 PANEL_CSS 字符串，写成独立 css 文件（manifest css 字段指向它） */
function extractCss() {
  const stylesTs = readFileSync(resolve(SRC, 'ui', 'styles.ts'), 'utf8');
  const m = stylesTs.match(/export const PANEL_CSS = `([\s\S]*?)`;/);
  if (!m) {
    console.warn('[build] 未找到 PANEL_CSS，css 输出为空');
    writeFileSync(CSS_OUT, '', 'utf8');
    return;
  }
  writeFileSync(CSS_OUT, m[1], 'utf8');
  console.log(`[build] css 已导出 (${(m[1].length / 1024).toFixed(1)} KB)`);
}

async function run() {
  if (isWatch) {
    const ctx = await esbuild.context(options);
    await ctx.watch();
    console.log('[build] watching for changes...');
    return;
  }
  const t0 = Date.now();
  await esbuild.build(options);
  extractCss();
  emitHtml();
  const size = readFileSync(JS_OUT, 'utf8').length;
  console.log(`[build] done in ${Date.now() - t0}ms → dist/index.js (${(size / 1024).toFixed(1)} KB)`);
}

/** 产出独立的开局/状态栏 HTML 交付物（引擎已内联，可直接放进正则替换或手动打开） */
function emitHtml() {
  const eng = resolve(__dirname, 'src', 'gradband', 'engine', 'circuit-engine.js');
  const assets = resolve(__dirname, 'src', 'gradband', 'assets');
  const engine = readFileSync(eng, 'utf8');
  const htmlTargets = {
    statusbar: '状态栏面板.html',
    opening: '开局界面.html',
    'statusbar-desk': '状态栏面板-双桌.html', // 双桌工作台（另存，不替换旧版）
  };
  for (const [name, outName] of Object.entries(htmlTargets)) {
    const tpl = readFileSync(resolve(assets, `${name}.html`), 'utf8');
    const out = tpl.replace('/*@ENGINE@*/', () => engine);
    const file = resolve(OUTDIR, outName);
    writeFileSync(file, out, 'utf8');
    console.log(`[build] ${file} (${(out.length / 1024).toFixed(1)} KB)`);
  }
}

run().catch((e) => { console.error(e); process.exit(1); });
