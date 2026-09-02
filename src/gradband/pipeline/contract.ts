// pipeline/contract.ts — 6.2 数据AI 契约校验（§3.1-⑤，失败=整包打回）
//
// 允许的顶层字段之外出现任何字段 → 拒（越权）
// 剧情数值变更出现白名单之外的键 → 拒（把施法费/物品删改夹带进数值包 → 拒）
// 时间解析失败/倒退 → 拒
// 回路 id 不在槽位也不在待扣单 → 该条忽略（脚本不猜、不发明账单）
import { z } from 'zod';
import { 解析剧情时间 } from '../core/time';
import type { 游戏 } from '../core/schema';

/* ── 6.2 变更包 schema ── */
export const 变更包Schema = z.object({
  现在剧情时间: z.string(),
  本轮使用回路: z.array(z.object({
    回路: z.string().min(1),
    次数: z.number().int().min(1),
  })).default([]),
  剧情数值变更: z.record(z.string(), z.number()).default({}),
  身体: z.object({ 状态: z.enum(['正常', '轻伤', '重伤', '过载透支']) }).nullable().default(null),
  战斗中: z.boolean().nullable().default(null),
  新增补给: z.array(z.object({
    名称: z.string().min(1),
    数量: z.number().int().min(1),
    纯度: z.number().min(0).max(99.99).optional(),   // 魔素晶体/导液 的纯度；创伤补给忽略
    克数: z.number().min(0).optional(),              // 魔素晶体：单颗克重 g（新格式；创伤补给严禁填）
    容量ml: z.number().min(0).optional(),            // 魔素导液：单安瓿容量 ml（新格式；创伤补给严禁填）
  })).default([]),
  场景变更: z.object({
    风力档: z.number().optional(),
    可塑无机物kJ: z.number().optional(),
    水体在场: z.boolean().optional(),
  }).nullable().default(null),
  剧情获得: z.array(z.object({
    种类: z.enum(['fixed', 'free']),
    族: z.enum(['pour', 'flow', 'struct', 'life', 'perce']),
    一句话效果: z.string().min(1),
    次数: z.number().int().min(0).max(10).optional(),
    参数向量: z.record(z.string(), z.union([z.number(), z.string()])).optional(),  // 法术AI 送审后填充
  })).default([]),
});

export type 变更包 = z.infer<typeof 变更包Schema>;

/** 剧情数值变更允许的键（白名单，其余=越权拒绝）。爆发线/持续线 只允许正值（提高，脚本钳制） */
export const 数值变更白名单 = ['能量', '精神', '能量上限', '精神上限', '爆发线', '持续线'];

export interface 契约结果 {
  ok: boolean;
  error?: string;
  data?: 变更包;
  忽略的回路: { 回路: string; 次数: number; 原因: string }[];
  忽略的剧情: string[];
}

/** 从 AI 原始文本抽出 JSON（容忍 ```json 包裹与前后杂文本） */
export function 抽取JSON(text: string): any | null {
  if (!text) return null;
  const fence = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const body = fence ? fence[1] : text;
  const start = body.indexOf('{');
  if (start < 0) return null;
  // 从最后一个 } 收尾，容忍尾部注释
  const end = body.lastIndexOf('}');
  if (end <= start) return null;
  try { return JSON.parse(body.slice(start, end + 1)); } catch { return null; }
}

export function 校验变更包(raw: any, g: 游戏): 契约结果 {
  const 忽略的回路: 契约结果['忽略的回路'] = [];
  const 忽略的剧情: string[] = [];

  if (raw == null || typeof raw !== 'object') return { ok: false, error: '变更包不是 JSON 对象', 忽略的回路, 忽略的剧情 };

  // 顶层字段白名单（§3.1-⑤ 越权字段整包打回）
  const allowed = ['现在剧情时间', '本轮使用回路', '剧情数值变更', '身体', '战斗中', '新增补给', '场景变更', '剧情获得'];
  const extra = Object.keys(raw).filter(k => !allowed.includes(k));
  if (extra.length) return { ok: false, error: `越权字段：${extra.join('、')}（整包打回）`, 忽略的回路, 忽略的剧情 };

  // 剧情数值变更键白名单
  const numKeys = Object.keys(raw.剧情数值变更 ?? {});
  const badNum = numKeys.filter(k => !数值变更白名单.includes(k));
  if (badNum.length) return { ok: false, error: `剧情数值变更含越权键：${badNum.join('、')}（施法费/物品/参数/亲和不得出现在这里）`, 忽略的回路, 忽略的剧情 };

  // 身体只允许 {状态}
  if (raw.身体 != null) {
    const bk = Object.keys(raw.身体);
    const badBody = bk.filter(k => k !== '状态');
    if (badBody.length) return { ok: false, error: `身体字段含越权键：${badBody.join('、')}`, 忽略的回路, 忽略的剧情 };
  }

  const parsed = 变更包Schema.safeParse(raw);
  if (!parsed.success) {
    const issue = parsed.error.issues[0];
    return { ok: false, error: `字段校验失败：${issue?.path?.join('.')} ${issue?.message}`, 忽略的回路, 忽略的剧情 };
  }
  const data = parsed.data;

  // 时间解析 + 倒退检查
  const nowMin = 解析剧情时间(data.现在剧情时间);
  if (nowMin == null) return { ok: false, error: `剧情时间无法解析："${data.现在剧情时间}"（格式应为 2026年11月12日，21：12）`, 忽略的回路, 忽略的剧情 };
  if (nowMin < g.主角.上次结算min) return { ok: false, error: `剧情时间倒退：${data.现在剧情时间} 早于上次结算（拒）`, 忽略的回路, 忽略的剧情 };

  // 回路 id 对账：不在槽位（fixed+free）也不在待扣单 → 该条忽略
  const slotIds = new Set([...g.槽位.固定槽, ...g.槽位.自由槽].filter(Boolean) as string[]);
  const pendingRefs = new Set(g.待扣单.map(p => p.ref));
  const kept = data.本轮使用回路.filter(u => {
    if (slotIds.has(u.回路) || pendingRefs.has(u.回路)) return true;
    忽略的回路.push({ ...u, 原因: 'id 不在槽位/待扣单中，忽略（不发明账单）' });
    return false;
  });
  data.本轮使用回路 = kept;

  // 剧情获得：每回合最多 1 条；与现有回路一句话效果完全相同 → 视为重复忽略
  if (data.剧情获得.length > 1) {
    const dropped = data.剧情获得.slice(1);
    data.剧情获得 = data.剧情获得.slice(0, 1);
    dropped.forEach(d => 忽略的剧情.push(`剧情获得《${d.一句话效果}》忽略（每回合最多 1 条）`));
  }
  const existEffects = new Set(g.回路库.map(c => c.基线账单?.一句话效果 ?? '').filter(Boolean));
  data.剧情获得 = data.剧情获得.filter(d => {
    if (existEffects.has(d.一句话效果)) {
      忽略的剧情.push(`剧情获得《${d.一句话效果}》忽略（与已有回路重复）`);
      return false;
    }
    return true;
  });

  return { ok: true, data, 忽略的回路, 忽略的剧情 };
}
