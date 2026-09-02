// gradband/feel-tables.ts — 陆安追踪表定义（女主可选：由「开局界面」选项决定是否建表/种子）
//
// 该表 = 一张开局框架标准表（__of_tables__，列名 = 追踪字段），参与标准自动填表
// （剑与汽水「提示词模板」页流程，updateConfig.enabled=true）。
// 数值列 0-17 约束写在表 Note 里（由 AI 按规则填；脚本不硬钳制）。
import type { TableDef } from '../store/types';

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

/** 表定义 → 开局框架 TableDef（建表/取回用；开局界面按此形状写入 __of_tables__） */
export function toTableDef(t: FeelTableDef): TableDef {
  return {
    uid: t.uid,
    name: t.name,
    purpose: `感情追踪表（${t.name}）：追踪角色心理状态，由自动填表按表规则更新。`,
    scope: 'always',
    type: 'standard',   // 感情表 = standard：标准AI（感情）可见，标准页可编辑；参与标准自动填表（剑与汽水流程）
    headers: t.headers,
    sourceData: { note: t.note, insertRule: '禁止。', updateRule: '自动填表按表规则更新。', deleteRule: '禁止。' },
    updateConfig: { enabled: true },   // 参与自动填表：走开局框架标准填表流程（剑与汽水模板，按全局默认频率/分组）
  };
}
