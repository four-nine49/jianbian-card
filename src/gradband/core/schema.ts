// core/schema.ts — 数据模型（zod）+ 缺省值
//
// 六表 + 管线暂存区，全部存在 chat 变量 `渐变带` 键下：
//   { version, 主角, 补给物品, 回路库, 槽位, 亲和, 待扣单, 场景 }
// 快照同步到 message 变量 stat_data.渐变带（剥掉 上次结算min —— 任何 AI 永不可见）。
import { z } from 'zod';

/* ── 主角表 ── */
export const 主角Schema = z.object({
  能量kJ: z.object({ 当前: z.number(), 上限: z.number() }),
  精神点: z.object({ 当前: z.number(), 上限: z.number() }),
  爆发线kW: z.number(),
  持续线kW: z.number(),
  战斗中: z.boolean(),
  身体状态: z.enum(['正常', '轻伤', '重伤', '过载透支']),
  剧情时间: z.object({ label: z.string() }),   // 格式 "2026年11月12日，21：12"；分钟数由脚本解析持有
  上次结算min: z.number(),                      // 仅脚本可读，快照剥除
});

/* ── 补给物品（只允许带恢复/治疗效果的补给）── */
export const 补给效果Schema = z.object({
  目标: z.enum(['能量', '精神', '创伤']),
  增加kJ: z.number().optional(),                    // 目标=能量
  增加点: z.number().optional(),                    // 目标=精神
  身体状态: z.enum(['正常', '轻伤']).optional(),    // 目标=创伤：重置为这个状态（只能减轻，不能加重）
});
export const 补给Schema = z.object({
  名称: z.string().min(1),
  数量: z.number().int().min(1),
  uid: z.string().optional(),                       // 一补给一牌的唯一编号（同名补给区分；旧数据无此字段）
  纯度: z.number().min(0).max(99.99).optional(),    // 魔素晶体/导液 的纯度（决定恢复量档位）
  克数: z.number().min(0).optional(),               // 魔素晶体：单颗克重 g（新库存模型，桌面滑杆用）
  容量ml: z.number().min(0).optional(),             // 魔素导液：单安瓿容量 ml（新库存模型，桌面滑杆用）
  效果: 补给效果Schema.optional(),                  // 创伤补给（卡片使用）与旧数据有；晶体/导液新库存无（总量由滑杆面板按公式算）
  桌面位置: z.object({ x: z.number(), y: z.number() }).optional(),  // 补给卡在回路配置桌的自由位置
});

/** 数据AI 只允许报这 4 类补给 */
export const 补给白名单 = ['魔素晶体', '魔素导液', '快速生化止血喷雾', '仿生神经桥接贴片'];

/* ── 回路库（fixed/free 同构一表）── */
export const 回路Schema = z.object({
  id: z.string(),
  名称: z.string(),
  type: z.enum(['fixed', 'free']),
  族: z.string(),                                // 中文族名（倾泻/波动/结构/生机/感知）
  famKey: z.enum(['pour', 'flow', 'struct', 'life', 'perce']),
  分支: z.string(),
  实体: z.string().nullable(),                   // 波动系实体键如 "1-1"；他族 null
  参数向量: z.record(z.string(), z.union([z.number(), z.string()])),  // 引擎原生键（锁死）
  注册e: z.number(),                             // 注册时的 E 滑杆值（施放时复用；flow 系为 0）
  参数明细: z.record(z.string(), z.string()),    // 脚本生成的全中文可读翻译
  微调预算: z.object({ br_min: z.number(), fv_max: z.number(), E_min: z.number(), E_max: z.number() }).nullable(),
  微调预算明细: z.record(z.string(), z.union([z.string(), z.number()])).nullable(),
  基线账单: z.object({ 输出kJ: z.number(), 计费kJ: z.number(), 精神: z.number(), 一句话效果: z.string() }),
  uses: z.number().int().nullable(),             // 仅 free 计数
  来源: z.enum(['面板送审', '转正', '剧情授技', '开局预设']),
  审核存档: z.object({ 原始描述: z.string(), 规范化结果: z.any() }).nullable(),
  // 审核状态（对 AI 不可见；只有免审/已通过 才可装槽/施放）
  //   免审：开局预设 / 转正（系统固化，不经法术AI）
  //   待送审：剧情获得（先入牌库，用户手动点送审，法术AI 填参数后转"已通过"）
  //   已通过：玩家面板自创 / 剧情获得（经法术AI 送审通过）
  审核状态: z.enum(['免审', '待送审', '已通过']).optional(),
  // 过载率（无上限，%）：功率相对主角输出上限（短脉冲比爆发线 / 长脉冲比持续线）的比值
  过载率: z.number().optional(),
  // 过载风险（0-100，%）：综合过载风险 = (过载率映射 + 客观修正) × 精神上限系数β × 当前精神乘数γ
  过载风险: z.number().optional(),
  // 桌面自由放置位置（回路配置桌的自由坐标；无此字段=吸附槽位显示）
  桌面位置: z.object({ x: z.number(), y: z.number() }).optional(),
});

/* ── 槽位 ── */
export const 槽位Schema = z.object({
  固定槽: z.array(z.string().nullable()).length(10),
  自由槽: z.array(z.string().nullable()).length(3),
});

/* ── 亲和（不限族不限数量，主分支为跨族数组）── */
export const 分支Schema = z.object({ 族: z.string(), 分支: z.string() });
export const 亲和Schema = z.object({
  主分支: z.array(分支Schema).min(0),
  次分支: z.array(分支Schema),
});

/* ── 待扣单 ── */
export const 待扣单Schema = z.object({
  ref: z.string(),
  名称: z.string(),
  bill: z.number(),
  mind: z.number(),
  tell: z.number(),
  risk: z.number(),
  锚点: z.string(),
  order: z.string(),
  famKey: z.string().nullable().optional(),
});

/* ── 场景 ── */
export const 场景Schema = z.object({
  风力档: z.number(),
  可塑无机物kJ: z.number(),
  水体在场: z.boolean(),
});

/* ── 整包 ── */
export const 游戏Schema = z.object({
  version: z.number().default(2),
  主角: 主角Schema,
  补给物品: z.array(补给Schema),
  回路库: z.array(回路Schema),
  槽位: 槽位Schema,
  亲和: 亲和Schema,
  待扣单: z.array(待扣单Schema),
  场景: 场景Schema,
});
export type 游戏 = z.infer<typeof 游戏Schema>;
export type 回路 = z.infer<typeof 回路Schema>;
export type 补给 = z.infer<typeof 补给Schema>;

/** 全新开局缺省存档 */
export function 默认游戏(over?: Partial<游戏>): 游戏 {
  return 游戏Schema.parse({
    version: 2,
    主角: {
      能量kJ: { 当前: 5000, 上限: 10000 },
      精神点: { 当前: 80, 上限: 90 },
      爆发线kW: 300,
      持续线kW: 50,
      战斗中: false,
      身体状态: '正常',
      剧情时间: { label: '2026年9月1日，08：00' },
      上次结算min: 0,
    },
    补给物品: [],
    回路库: [],
    槽位: { 固定槽: Array(10).fill(null), 自由槽: Array(3).fill(null) },
    亲和: { 主分支: [], 次分支: [] },
    待扣单: [],
    场景: { 风力档: 40, 可塑无机物kJ: 3000, 水体在场: false },
    ...over,
  });
}
