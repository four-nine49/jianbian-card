// gradband/feel-tables.ts — 感情追踪表注册（多表，方便以后扩展多角色）
//
// 每张感情表 = 一张开局框架表格（__of_tables__，列名 = 追踪字段）
//   + 一套独立提示词（存渐变带 settings.感情提示词[表名]）
// 默认注册：陆安追踪表（单行表：自洽/共情/解构/对主角的信任度 0-17）。
// 以后加角色：在 FEEL_TABLES 里加一条 + 用「渐变带·感情」页建表即可。
import { loadStore, getSheet, importTemplate } from '../store/table-store';
import type { TableDef } from '../store/types';
import { loadSettings, saveSettings } from './core/settings';
import type { PromptSegment } from './core/settings';

export interface FeelTableDef {
  name: string;              // 表名
  uid: string;               // 表格 uid
  headers: string[];         // 列名（追踪字段）
  numCols: string[];         // 数值列（0-17 整数）
  note: string;              // 表规则（注入提示词 + 展示）
}

/** 感情表注册表（默认陆安追踪表；以后加角色在此追加） */
export const FEEL_TABLES: FeelTableDef[] = [
  {
    name: '陆安追踪表',
    uid: 'lu_an_zhui_zong_biao',
    headers: ['姓名', '长期目标', '短期目标', '怎么看待主角', '自洽', '共情', '解构', '对主角的信任度'],
    numCols: ['自洽', '共情', '解构', '对主角的信任度'],
    note: `记录陆安的心理动态变化。此表有且仅有一行。

■ 陆安数值变化规则（常驻）
四条数值：自洽、共情、解构、对主角的信任度，范围0–17。
一、基本规则：单次事件最多 ±2，不确定给 ±1。大多数日常交互是 ±0。同类事件递减（第一次给满，第二次-1，第三次起+0）。
二、±1 还是 ±2：±1=日常交互短暂可控；±2=触及核心矛盾且事件后行为有持续变化；±0=积累条件。
三、自洽/共情/解构（高分=好状态）：
  自洽（她怎么对待自己）：被看见不被评判、风系魔法被认可、听懂"算了"和"接纳"的区别 加分；真实方向被否定、被迫更深入扮演面具、过载受伤被体系善待反而更走不了 扣分。
  共情（她怎么对待他人）：保护弱者后多留一步、用自己的弯路指导被误判的新生 加分；保护时伤及无辜、对圈外人冷漠升级为主动嘲讽 扣分。
  解构（她用语言面对世界）：拿自己开涮不带攻击性、主动提起自己的错路不带自毁式嘲讽 加分；幽默变伤人眼神是死的、拒绝严肃对话、拿别人的真实痛苦开玩笑 扣分。
四、对主角的信任度：退缩时不追问但下次自然接上、记住她随口说过的事、不表演共情、她出事时第一个出现、不利用她的脆弱 加分；退缩时穷追不舍、她的脆弱被当筹码、表演共情说"我完全理解"、答应她又没来、对她的自欺报以说教 扣分。达到17后锁定，只有+2才可从15/16到17。
五、多轴与门槛：同一事件可同时影响多条轴各轴独立判定，一场戏每条轴最多变动一次；信任度突破10需至少一个（自洽/共情/解构）≥6；任一轴12+的加分需此前有足够铺垫。
【强制约束】此表有且仅有一行（row_id=1）；每轮交互后更新；四条数值 0-17 整数；所有 TEXT 字段不可为 NULL 或空串。`,
  },
];

/** 表名 → 定义（找不到返回 null） */
export function getFeelTable(name: string): FeelTableDef | null {
  return FEEL_TABLES.find(t => t.name === name) ?? null;
}

/** 表定义 → 开局框架 TableDef（建表用） */
function toTableDef(t: FeelTableDef): TableDef {
  return {
    uid: t.uid,
    name: t.name,
    purpose: `感情追踪表（${t.name}）：追踪角色心理状态，由感情AI按表规则更新。`,
    scope: 'always',
    type: 'standard',   // 感情表 = standard：标准AI（感情）可见，标准页可编辑；不参与标准自动填表（enabled=false）
    headers: t.headers,
    sourceData: { note: t.note, insertRule: '禁止。', updateRule: '感情AI按规则更新。', deleteRule: '禁止。' },
    updateConfig: { enabled: false },
  };
}

/** 确保所有感情表存在（开局时/首次访问时自动建） */
export function ensureFeelTables(): void {
  try {
    const store = loadStore();
    const missing = FEEL_TABLES.filter(t => !getSheet(store, t.name));
    if (missing.length) {
      importTemplate(missing.map(toTableDef));
      console.info(`[渐变带] 感情表已创建：${missing.map(t => t.name).join('、')}`);
    }
  } catch (e) { console.warn('[渐变带] 感情表创建失败', e); }
}

// ──────────────────────────────────────────────
// 每表一套提示词（存 settings.感情提示词[表名]）
// ──────────────────────────────────────────────

/** 某张感情表的默认提示词（占位符：{{角色}} {{字段说明}} {{当前值}} {{正文}}） */
export function 默认感情提示词(tableName: string): PromptSegment[] {
  return [
    { role: 'system', enabled: true, note: '任务与铁律', content: `你是跑团系统的"感情分析AI"。你只负责跟踪「${tableName}」这个角色的内心状态，阅读最新正文，输出该表各追踪字段的最新值（JSON）。
规则：
1. 数值字段必须是整数，且只在有明确剧情依据时才变动（一般每次 ±1~3，重大事件可更大），严格遵循表 Note 里的 0-17 变化规则。
2. 文本字段用一句话概括当前状态。
3. 没有变化的字段原样输出旧值；字段必须齐全，禁止增删字段。
4. 另给一个"依据"字段，引用正文依据（50字内）。` },
    { role: 'system', enabled: true, note: '表规则 + 当前值（脚本生成）', content: '【表规则】\n{{字段说明}}\n\n【当前值】\n{{当前值}}' },
    { role: 'system', enabled: true, note: '最近正文（脚本生成）', content: '【最近正文】\n{{正文}}' },
    { role: 'user', enabled: true, note: '收尾指令', content: '请输出该表各字段的最新值 JSON（含所有字段 + "依据"）。' },
  ];
}

/** 读取某张感情表的提示词（不存在初始化默认） */
export function getFeelPrompt(tableName: string): PromptSegment[] {
  const s = loadSettings();
  if (!s.感情提示词 || !s.感情提示词[tableName] || !s.感情提示词[tableName].length) {
    s.感情提示词 ??= {};
    s.感情提示词[tableName] = 默认感情提示词(tableName);
    saveSettings(s);
  }
  return s.感情提示词[tableName];
}

/** 写回某张感情表的提示词 */
export function setFeelPrompt(tableName: string, segs: PromptSegment[]): void {
  const s = loadSettings();
  s.感情提示词 ??= {};
  s.感情提示词[tableName] = segs.map(x => ({ ...x }));
  saveSettings(s);
}
