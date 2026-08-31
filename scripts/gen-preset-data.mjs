// scripts/gen-preset-data.mjs — 从 star.txt（原开局初始化 HTML）程序化提取四条线的数据，
// 生成本扩展自用的 src/preset/preset-data.json（不再依赖外部数据库脚本，全部存本扩展表格存储）。
//
// 用法：node scripts/gen-preset-data.mjs [star.txt 路径]
// 提取方式：从 star.txt 的 <script> 里按标记切出数据段（PRESET_OPENINGS / CHARACTER_INFO /
//   buildXxxData 系 / TABLE_STRUCTS 系 / getActiveStructs），在函数沙箱里求值后转换为
//   本扩展的 TableDef + 种子行格式。star.txt 更新后重跑一次即可。
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const starPath = process.argv[2] ?? resolve(ROOT, '../../star.txt');
const OUT = resolve(ROOT, 'src/preset/preset-data.json');

const raw = readFileSync(starPath, 'utf8');
// star.txt 可能整体包在 ```html 围栏里
const code = raw.replace(/^```html\s*/i, '').replace(/```\s*$/, '');

function slice(fromMark, toMark) {
  const a = code.indexOf(fromMark);
  const b = toMark ? code.indexOf(toMark) : code.length;
  if (a < 0 || b < 0 || b <= a) throw new Error(`切片失败：${fromMark} → ${toMark}`);
  return code.slice(a, b);
}

// 数据段（不包含任何 DOM/事件代码）
const segDefs =
  slice('var PRESET_OPENINGS', 'var CHARACTER_INFO') +
  slice('var CHARACTER_INFO', 'function buildAliceData') +
  slice('function buildAliceData', '// ===== 构建数据预览 HTML') +
  slice('var DEFAULT_UPDATE_CONFIG', 'function findSheetKey') +
  slice('var TABLE_STRUCTS_CANGYUEXI', '// 每张表写入时的自增顺序号');

const sandbox = new Function(
  'selectedCharacter',
  `"use strict";\n${segDefs}\n;return { PRESET_OPENINGS, CHARACTER_INFO, buildActiveData, getActiveStructs };`,
);

// ── 转换为目标格式 ──
const PURPOSES = {
  角色档案: '主角与同伴的身份档案、状态与属性',
  技能: '各角色掌握的技能与熟练阶段',
  纪要表: '每轮交互的轮次日志（开局常驻空表，靠自动填表逐轮插入）',
  已解锁科技: '系统线：已解锁科技、传播度与算力',
  权柄: '系统线：权柄与融合溯源',
  系统网络: '推演系统已连接对象',
  资产: '地产/组织类资产的归属与状态',
  地区: '剧情涉及地区的社会与经济状态',
  系统总览: '系统时间与推演状态（单行表）',
  爱丽丝动态变化: '爱丽丝心理动态（单行表）',
  沧月汐动态变化: '沧月汐心理动态（单行表）',
  似久动态变化: '似久心理动态（单行表）',
  墨白动态变化: '墨白心理动态（单行表）',
  配方: '墨白线：持有的配方',
  精炼: '墨白线：材料与成品库存',
  普通种养: '墨白线：普通种植养殖项目',
  高级作物: '墨白线：高级作物种植',
  高级养殖: '墨白线：高级魔物养殖',
};
const UPDATE_OVERRIDES = {
  系统总览: { contextRounds: 2 },
  纪要表: { sendLatestRows: 10 },
  地区: { updateFrequency: 2 },
  资产: { updateFrequency: 2 },
  系统网络: { updateFrequency: 2 },
  已解锁科技: { updateFrequency: 2 },
};

// 数据对象字段 → 表名（爱丽丝/沧月汐/似久 公用一套；墨白单独一套）
const COMMON_FIELD_MAP = [
  ['角色档案', 'profile'],
  ['技能', 'skills'],
  ['DYN', 'dynamics'],      // dynamicsTable 指定实际表名
  ['系统网络', 'network'],
  ['资产', 'asset'],
  ['地区', 'region'],
  ['系统总览', 'overview'],
  ['已解锁科技', 'tech'],
  ['权柄', 'authority'],
];
const MOBAI_FIELD_MAP = [
  ['角色档案', 'profile'],
  ['技能', 'skills'],
  ['配方', 'recipes'],
  ['精炼', 'refine'],
  ['资产', 'asset'],
  ['地区', 'region'],
  ['墨白动态变化', 'dynamics'],
  ['普通种养', 'commonFarm'],
  ['高级作物', 'advancedCrop'],
  ['高级养殖', 'advancedLivestock'],
];

function toTableDef(tableName, struct) {
  const headers = (struct.headers || []).filter(h => h !== 'row_id');
  const sd = struct.sourceData || {};
  return {
    uid: String(struct.uid || '').replace(/^sheet_/, ''),
    name: tableName,
    purpose: PURPOSES[tableName] || '',
    scope: 'always',
    headers,
    sourceData: {
      note: sd.note || '',
      insertRule: [sd.initNode, sd.insertNode].filter(x => x && x !== '禁止。').join('\n'),
      updateRule: sd.updateNode || '',
      deleteRule: sd.deleteNode || '',
    },
    updateConfig: {
      enabled: true,
      contextRounds: UPDATE_OVERRIDES[tableName]?.contextRounds ?? 3,
      updateFrequency: UPDATE_OVERRIDES[tableName]?.updateFrequency ?? 1,
      ...(UPDATE_OVERRIDES[tableName]?.sendLatestRows ? { sendLatestRows: UPDATE_OVERRIDES[tableName].sendLatestRows } : {}),
    },
  };
}

function rowsFromObjects(tableName, struct, rowObjects) {
  const headers = (struct.headers || []).filter(h => h !== 'row_id');
  const list = Array.isArray(rowObjects) ? rowObjects : [rowObjects];
  return list
    .filter(obj => obj && typeof obj === 'object')
    .map(obj => headers.map(h => {
      const v = obj[h];
      return v === undefined || v === null ? '' : String(v);
    }));
}

const LINES = ['爱丽丝', '沧月汐', '似久', '墨白'];
const out = { version: 1, lines: {} };

for (const line of LINES) {
  const ctx = sandbox(line);
  const structs = ctx.getActiveStructs(); // 按线解析后的表结构
  const tables = [];
  const tableByName = {};
  for (const tableName of Object.keys(structs)) {
    if (tableName === '纪要表') continue; // 按需求移除纪要表（原预设开局不用它）
    const def = toTableDef(tableName, structs[tableName]);
    tables.push(def);
    tableByName[tableName] = { def, struct: structs[tableName] };
  }

  const seeds = {};
  const openings = {};
  for (const gender of ['男', '女']) {
    const data = ctx.buildActiveData(gender);
    const map = line === '墨白' ? MOBAI_FIELD_MAP : COMMON_FIELD_MAP;
    const perGender = {};
    for (const [tableName, field] of map) {
      // 'DYN' = 动态变化表，实际表名由数据里的 dynamicsTable 指定（爱丽丝/沧月汐/似久各不同）
      const resolvedName = tableName === 'DYN' ? String(data.dynamicsTable || '') : tableName;
      if (!resolvedName) continue;
      const raw = data[field];
      if (raw === undefined) continue;
      const t = tableByName[resolvedName];
      if (!t) continue;
      const rows = rowsFromObjects(resolvedName, t.struct, raw);
      if (rows.length > 0) perGender[resolvedName] = rows;
    }
    seeds[gender] = perGender;
    openings[gender] = ctx.PRESET_OPENINGS?.[line]?.[gender] ?? '';
  }

  out.lines[line] = {
    title: line,
    subtitle: ctx.CHARACTER_INFO?.[line]?.subtitle ?? '',
    maleDesc: ctx.CHARACTER_INFO?.[line]?.maleDesc ?? '',
    femaleDesc: ctx.CHARACTER_INFO?.[line]?.femaleDesc ?? '',
    openings,
    tables,
    seeds,
  };
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(out, null, 2), 'utf8');

// 摘要
for (const line of LINES) {
  const l = out.lines[line];
  const seedTables = Object.keys(l.seeds['男']).length;
  console.log(`${line}: ${l.tables.length} 张表 | 开场白 ${l.openings['男'].length}/${l.openings['女'].length} 字 | 男版种子 ${seedTables} 表`);
}
console.log(`已生成 ${OUT}`);
