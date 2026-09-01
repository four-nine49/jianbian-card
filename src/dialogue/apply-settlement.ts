// dialogue/apply-settlement.ts — 结算结果 → 落地（通用：按规则包的表格和种子行）
//
// 流程（v1.3 起支持多规则包）：
//   1. importTemplate(pkg.tables)    —— 导入**当前规则包自己的**表结构（修掉旧版写死一套表的 bug）
//   2. 计算初始行 = 包静态 seedRows（声明式） + 包动态 seedDynamic(parsed)（内置开局包的字段映射）
//   3. 逐表 seedInitialRows 写入
// 旧的"结算字段 → 表/行"映射整体收进内置开局包（builtin-packages.ts），换卡 = 换包，框架不动。
import type { TableDef } from '../store/types';
import { importTemplate, seedInitialRows } from '../store/table-store';
import type { ParsedSettlement } from './settlement-parser';
import type { ResolvedPackage } from './rule-package';
import presetDataJson from '../preset/preset-data.json?raw';

export interface ApplySettlementResult {
  ok: boolean;
  packageName: string;
  sheetsImported: number;
  rowsSeeded: number;
  error?: string;
}

// ──────────────────────────────────────────────
// 从剑与汽水预设数据里取现成的表定义（已按本扩展 TableDef 格式转换；
// 纪要表与各女主动态表按需求不引入）——缺了就不加，不阻断
// ──────────────────────────────────────────────
const PRESET_TABLES = (() => {
  try {
    const parsed = JSON.parse(presetDataJson) as { lines: Record<string, { tables: any[] }> };
    const byLine = (line: string, name: string): TableDef | null =>
      (parsed.lines?.[line]?.tables?.find(t => t?.name === name) as TableDef) ?? null;
    return {
      tech: byLine('爱丽丝', '已解锁科技'),
      authority: byLine('爱丽丝', '权柄'),
      recipe: byLine('墨白', '配方'),
      refine: byLine('墨白', '精炼'),
      farm: byLine('墨白', '普通种养'),
      crop: byLine('墨白', '高级作物'),
      livestock: byLine('墨白', '高级养殖'),
    };
  } catch (e) {
    console.warn('[开局框架] 预设表定义加载失败（规则包将不含这批表）：', e);
    return {} as Record<string, TableDef | null>;
  }
})();

// ──────────────────────────────────────────────
// 内置开局包的表定义（随包数据，框架不感知具体结构）
// ──────────────────────────────────────────────

export const SETTLEMENT_TABLE_DEFS: TableDef[] = [
  {
    uid: 'profile', name: '角色档案',
    purpose: '存主角与主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',
    scope: 'always',
    type: 'standard',
    headers: ['角色', '名字', '身份', '种族', '性别', '外貌', '整体状态', '综合属性', '流动资金'],
    sourceData: {
      note: '记录主角和主要角色的档案。固定几行：主角一行、各主要角色一行。综合属性格式"力量X 敏捷X 体质X 智力X"，0-25 整数。属性不轻易变化。',
      insertRule: '新角色登场插入一行。',
      updateRule: '按 角色 定位更新状态/属性/资金。',
      deleteRule: '禁止。角色离场仅更新状态。',
    },
    updateConfig: { enabled: true, contextRounds: 3, updateFrequency: 1 },
  },
  {
    uid: 'skills', name: '技能',
    purpose: '存各角色掌握的技能与熟练阶段。',
    scope: 'always',
    type: 'standard',
    headers: ['所属', '技能名', '技能类型', '阶段', '效果描述'],
    sourceData: {
      note: '记录各角色的技能。每行一个技能。阶段：入门/初学/熟练/精通/大师。',
      insertRule: '学会新技能时插入，初始"初学"。',
      updateRule: '技能提升时更新阶段与效果，每次一阶。',
      deleteRule: '遗忘/废弃时删除。',
    },
    updateConfig: { enabled: true, contextRounds: 3, updateFrequency: 1 },
  },
  // 系统线两张表（来自剑与汽水预设：已解锁科技 / 权柄）
  ...(PRESET_TABLES.tech ? [PRESET_TABLES.tech] : []),
  ...(PRESET_TABLES.authority ? [PRESET_TABLES.authority] : []),
  {
    uid: 'assets', name: '资产',
    purpose: '记录房产/商铺/物品等资产的归属与状态，开局常驻（后续也会自动增删）。',
    scope: 'always',
    type: 'standard',
    headers: ['名称', '简介', '类型', '所属', '实际掌控者', '所属地区'],
    sourceData: {
      note: '记录的房产/商铺/组织/物品等资产。名称|简介|类型|地区 的列表。',
      insertRule: '获得新资产时插入一行。',
      updateRule: '资产状态变化时更新。',
      deleteRule: '失去资产时删除。',
    },
    updateConfig: { enabled: true, contextRounds: 2, updateFrequency: 2 },
  },
  {
    uid: 'region', name: '地区',
    purpose: '开局所在地区的设定，基本只读——结算没提到地区就不建这张表。',
    scope: 'onSeed',
    type: 'standard',
    headers: ['名称', '规模', '简述', '所属', '主导产业', '经济状态', '政治状态', '与主角关系', '关键势力', '当前事件'],
    sourceData: {
      note: '开局所在地区设定。填满十列，无关键势力写"无"。',
      insertRule: '开局时一行，一般不改。',
      updateRule: '地区状态重大变化时更新。',
      deleteRule: '禁止。',
    },
    updateConfig: { enabled: false, contextRounds: 0, updateFrequency: 999 },
  },
  {
    uid: 'network', name: '系统网络',
    purpose: '推演系统的已连接对象（首行固定玩家），开局常驻。',
    scope: 'always',
    type: 'standard',
    headers: ['已连接对象', '智力', '状态', '态度'],
    sourceData: {
      note: '金手指=推演系统时的已连接对象。首行固定"玩家"。',
      insertRule: '新增连接时插入。',
      updateRule: '状态下变化时更新。',
      deleteRule: '断开连接时删除。',
    },
    updateConfig: { enabled: true, contextRounds: 2, updateFrequency: 2 },
  },
  {
    uid: 'overview', name: '系统总览',
    purpose: '推演系统的总览状态（单行表）——结算没产出总览字段就不建。',
    scope: 'onSeed',
    type: 'standard',
    headers: ['当前时间', '系统状态', '当前推演解锁', '已解锁知识库'],
    sourceData: {
      note: '推演系统的总览状态。单行表。',
      insertRule: '禁止。',
      updateRule: '总览变化时更新。',
      deleteRule: '禁止。',
    },
    updateConfig: { enabled: true, contextRounds: 2, updateFrequency: 1 },
  },
  // 墨白线五张表（来自剑与汽水预设：配方 / 精炼 / 普通种养 / 高级作物 / 高级养殖）
  ...(PRESET_TABLES.recipe ? [PRESET_TABLES.recipe] : []),
  ...(PRESET_TABLES.refine ? [PRESET_TABLES.refine] : []),
  ...(PRESET_TABLES.farm ? [PRESET_TABLES.farm] : []),
  ...(PRESET_TABLES.crop ? [PRESET_TABLES.crop] : []),
  ...(PRESET_TABLES.livestock ? [PRESET_TABLES.livestock] : []),
];

// ──────────────────────────────────────────────
// 字段 → 行构建（内置开局包专用，由其 seedDynamic 调用）
// ──────────────────────────────────────────────

function pair(v: ParsedSettlement['parsed'][string] | undefined, key: string): string {
  if (!v || v.kind !== 'pairs') return '';
  return v.pairs[key] ?? '';
}

function listItems(v: ParsedSettlement['parsed'][string] | undefined): { cols: string[] }[] {
  if (!v || v.kind !== 'list') return [];
  return v.items;
}

/** 主角/女主行（角色档案） */
export function buildProfileRows(settlement: ParsedSettlement): (string | null)[][] {
  const rows: (string | null)[][] = [];
  const zhu = settlement.parsed['主角'];
  if (zhu) {
    const p = (zhu.kind === 'pairs') ? zhu.pairs : {};
    rows.push([
      '主角', p['名字'] ?? '{{user}}', p['身份'] ?? '', p['种族'] ?? '', p['性别'] ?? '',
      p['外貌'] ?? '', p['状态'] ?? '健康', p['属性'] ?? '', p['资金'] ?? '',
    ]);
  }
  const nv = settlement.parsed['女主'];
  if (nv && nv.kind === 'pairs' && Object.keys(nv.pairs).length > 0) {
    const p = nv.pairs;
    rows.push([
      '女主', p['名字'] ?? '', p['身份'] ?? '', p['种族'] ?? '', p['性别'] ?? '',
      p['外貌'] ?? '', p['状态'] ?? '健康', p['属性'] ?? '', p['资金'] ?? '',
    ]);
  }
  return rows;
}

/** 技能行（主角/女主技能，所属：主角/女主，五列） */
export function buildSkillRows(settlement: ParsedSettlement): (string | null)[][] {
  const rows: (string | null)[][] = [];
  const owners: [string, string][] = [
    ['主角', '主角技能'],
    ['女主', '女主技能'],
  ];
  for (const [owner, field] of owners) {
    const items = listItems(settlement.parsed[field]);
    for (const item of items) {
      // 格式：技能名|类型|阶段|效果描述（可能 4 或 5 列）
      const [name, type, stage, effect, ...rest] = item.cols;
      if (!name) continue;
      rows.push([owner, name, type ?? '', stage ?? '', effect ?? rest.join('|')]);
    }
  }
  return rows;
}

/** 资产行 */
export function buildAssetRows(settlement: ParsedSettlement): (string | null)[][] {
  const rows: (string | null)[][] = [];
  const items = listItems(settlement.parsed['资产']);
  for (const item of items) {
    const [name, desc, type, region] = item.cols;
    if (!name) continue;
    rows.push([name, desc ?? '', type ?? '', '{{user}}', '{{user}}', region ?? '']);
  }
  return rows;
}

/** 地区行（十列） */
export function buildRegionRows(settlement: ParsedSettlement): (string | null)[][] {
  const items = listItems(settlement.parsed['地区']);
  if (items.length === 0) return [];
  const c = items[0].cols;
  return [[c[0] ?? '', c[1] ?? '', c[2] ?? '', c[3] ?? '', c[4] ?? '', c[5] ?? '', c[6] ?? '', c[7] ?? '', c[8] ?? '无', c[9] ?? '']];
}

/** 网络行 */
export function buildNetworkRows(settlement: ParsedSettlement): (string | null)[][] {
  const rows: (string | null)[][] = [];
  // 首行固定玩家（规则表第 8 节：首行固定 {{user}}|玩家智力|聊天使用中|乐意分享）
  rows.push(['{{user}}', pair(settlement.parsed['网络'], '智力') || '玩家智力', '聊天使用中', '乐意分享']);
  const items = listItems(settlement.parsed['网络']);
  for (const item of items) {
    // 若含额外连接对象（如女主），追加（格式：对象|智力|状态|态度）
    const [obj, iq, st, at] = item.cols;
    if (obj && obj !== '{{user}}') rows.push([obj, iq ?? '', st ?? '', at ?? '']);
  }
  return rows;
}

/** 总览行 */
export function buildOverviewRows(settlement: ParsedSettlement): (string | null)[][] {
  const ov = settlement.parsed['总览'];
  if (!ov || ov.kind !== 'pairs') return [];
  const time = ov.pairs['当前时间'] ?? '';
  const sys = ov.pairs['系统状态'] ?? '闲置';
  const unlock = ov.pairs['当前推演解锁'] ?? '无';
  const kb = ov.pairs['已解锁知识库'] ?? '地球';
  return [[time, sys, unlock, kb]];
}

// ──────────────────────────────────────────────
// 落地主流程（通用：一切以规则包为准）
// ──────────────────────────────────────────────

export function applySettlement(settlement: ParsedSettlement, pkg: ResolvedPackage): ApplySettlementResult {
  try {
    if (!pkg.tables || pkg.tables.length === 0) {
      return { ok: false, packageName: pkg.name, sheetsImported: 0, rowsSeeded: 0, error: `规则包「${pkg.name}」没有配置表结构（tables 为空）` };
    }

    // 1. 计算初始行计划 = 静态声明（pkg.seedRows） + 动态计算（pkg.seedDynamic）
    const plans: Record<string, (string | null)[][]> = {};
    for (const [uid, rows] of Object.entries(pkg.seedRows ?? {})) {
      if (Array.isArray(rows) && rows.length > 0) plans[uid] = rows as (string | null)[][];
    }
    if (pkg.seedDynamic) {
      const dynamic = pkg.seedDynamic(settlement) ?? {};
      for (const [uid, rows] of Object.entries(dynamic)) {
        if (Array.isArray(rows) && rows.length > 0) plans[uid] = rows;
      }
    }

    // 2. 按需建表（行为 B）：always 的表开局必建（含常驻空表）；
    //    onSeed 的表只有真的产生了初始行才建——这局用不上的表根本不创建
    const createdDefs = pkg.tables.filter(d => d.scope === 'onSeed' ? !!(plans[d.uid]?.length) : true);
    importTemplate(createdDefs);

    // 3. 逐表写入初始行（没被创建的表/不存在的表：告警跳过，不中断其它表）
    let seeded = 0;
    for (const [uid, rows] of Object.entries(plans)) {
      try {
        seedInitialRows(`sheet_${uid}`, rows);
        seeded += rows.length;
      } catch (e) {
        console.warn(`[开局对话] 初始行写入失败（表 ${uid}）：`, e);
      }
    }

    const skipped = pkg.tables.filter(d => !createdDefs.includes(d)).map(d => d.name);
    if (skipped.length > 0) console.info(`[开局对话] 按需跳过未用到的表：${skipped.join('、')}`);

    return {
      ok: true,
      packageName: pkg.name,
      sheetsImported: createdDefs.length,
      rowsSeeded: seeded,
    };
  } catch (e) {
    console.error('[开局对话] 结算落地失败', e);
    return { ok: false, packageName: pkg.name, sheetsImported: 0, rowsSeeded: 0, error: (e as Error).message };
  }
}
