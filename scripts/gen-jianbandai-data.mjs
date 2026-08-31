// scripts/gen-jianbandai-data.mjs — 从 渐变带/开局界面.txt 程序化提取渐变带角色卡的开局数据，
// 生成 src/preset/jianbandai-data.json（本扩展自用表格存储，不依赖外部数据库脚本）。
//
// 用法：node scripts/gen-jianbandai-data.mjs [开局界面.txt 路径]
// 纪要表按需求排除（与剑与汽水一致）；只保留 陆安追踪表。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const starPath = process.argv[2] ?? resolve(ROOT, '../渐变带/开局界面.txt');
const OUT = resolve(ROOT, 'src/preset/jianbandai-data.json');

const raw = readFileSync(starPath, 'utf8');
const code = raw.replace(/^```html\s*/i, '').replace(/```\s*$/, '');

function slice(fromMark, toMark) {
  const a = code.indexOf(fromMark);
  const b = toMark ? code.indexOf(toMark) : code.length;
  if (a < 0 || b < 0 || b <= a) throw new Error(`切片失败：${fromMark} → ${toMark}`);
  return code.slice(a, b);
}

// 数据段（不包含 DOM/事件代码）
const segDefs =
  slice('var ROUTE_INFO', '// ===== 获取数据库 API') +      // ROUTE_INFO + PRESET_OPENINGS
  slice('var DEFAULT_UPDATE_CONFIG', '// ===== 表写入辅助') + // TABLE_STRUCTS（纪要表 + 陆安追踪表）
  slice('function buildData', '// ===== 写入数据库');        // buildData

const sandbox = new Function(
  `"use strict";\n${segDefs}\n;return { ROUTE_INFO, PRESET_OPENINGS, TABLE_STRUCTS, buildData };`,
);
const ctx = sandbox();

const PURPOSES = {
  陆安追踪表: '陆安心理动态追踪（单行表：自洽/共情/解构/对主角信任度，0-17）',
};

// ── 转换表定义（排除纪要表；去 row_id 列；规则文本按 note/insert/update/delete 拆分）──
const tables = [];
const tableByName = {};
for (const tableName of Object.keys(ctx.TABLE_STRUCTS)) {
  if (tableName === '纪要表') continue;
  const struct = ctx.TABLE_STRUCTS[tableName];
  const sd = struct.sourceData || {};
  const def = {
    uid: String(struct.uid || '').replace(/^sheet_/, ''),
    name: tableName,
    purpose: PURPOSES[tableName] || '',
    scope: 'always',
    headers: (struct.headers || []).filter(h => h !== 'row_id'),
    sourceData: {
      note: sd.note || '',
      insertRule: [sd.initNode, sd.insertNode].filter(x => x && x !== '禁止。').join('\n'),
      updateRule: sd.updateNode || '',
      deleteRule: sd.deleteRule || '',
    },
    updateConfig: { enabled: true },
  };
  tables.push(def);
  tableByName[tableName] = { def, struct };
}

// ── 初始数据（buildData 无性别差异，男/女同版；行对象 → 与表头对齐的行数组）──
const data = ctx.buildData();
const FIELD_MAP = [['陆安追踪表', 'luAnTracking']];
const seeds = {};
for (const gender of ['男', '女']) {
  const perGender = {};
  for (const [tableName, field] of FIELD_MAP) {
    const t = tableByName[tableName];
    const raw = data[field];
    if (!t || raw === undefined) continue;
    const list = Array.isArray(raw) ? raw : [raw];
    const rows = list
      .filter(obj => obj && typeof obj === 'object')
      .map(obj => t.def.headers.map(h => {
        const v = obj[h];
        return v === undefined || v === null ? '' : String(v);
      }));
    if (rows.length > 0) perGender[tableName] = rows;
  }
  seeds[gender] = perGender;
}

const info = ctx.ROUTE_INFO['学院线'] || {};
const openings = ctx.PRESET_OPENINGS['学院线'] || { 男: '', 女: '' };

const out = {
  version: 1,
  line: {
    name: '学院线',
    subtitle: info.subtitle || '',
    maleDesc: info.maleDesc || '',
    femaleDesc: info.femaleDesc || '',
    openings: { 男: openings['男'] ?? '', 女: openings['女'] ?? '' },
    tables,
    seeds,
  },
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(out, null, 2), 'utf8');

console.log(`学院线: ${tables.length} 张表（${tables.map(t => t.name).join('/')}）`);
for (const g of ['男', '女']) {
  console.log(`开场白[${g}]: ${out.line.openings[g].length} 字 | 种子: ${Object.keys(seeds[g]).join('/') || '无'}`);
}
console.log(`已生成 ${OUT}`);
