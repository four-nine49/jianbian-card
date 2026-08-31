// core/presets.ts — 开局预设清单（新手包 / 自挑模式的数据源，内容可在此调整）
import type { 回路, 补给 } from './schema';

/** 预设固定回路：注册参数 → 开局时由引擎现算 基线账单/参数明细/微调预算 */
export interface 预设回路 { key: string; 名称: string; famKey: 'pour' | 'flow' | 'struct' | 'life' | 'perce'; e?: number; params: Record<string, number>; 一句话效果: string }

export const 预设回路清单: 预设回路[] = [
  { key: 'windcut', 名称: '风切·标准发', famKey: 'flow', params: { mode: 1, sub: 1, fmed: 0, fa: 33, fv: 70, br: 100 }, 一句话效果: '风刃 A=0.049m² v=397m/s' },
  { key: 'fireball', 名称: '火球·标准式', famKey: 'pour', e: 40, params: { phase: 2, pw: 55, th: 25 }, 一句话效果: '热爆轰·收窄束' },
  { key: 'stonewall', 名称: '石肤壁垒', famKey: 'struct', e: 40, params: { base: 1, latt: 80, mass: 55, rate: 3, stress: 0, stressT: 10 }, 一句话效果: '土石壁垒·混相' },
  { key: 'scan', 名称: '周界扫描', famKey: 'perce', e: 5, params: { rad: 30, res: 1, pert: 0, dwell: 0, dwellSec: 20 }, 一句话效果: '半径30m·标准' },
];

/** 预设补给 */
export const 预设补给清单: 补给[] = [
  { 名称: '管控晶（80%纯度魔素晶体）', 数量: 2, 效果: { 目标: '能量', 增加kJ: 200 } },
  { 名称: '民用晶（低纯度魔素晶体）', 数量: 3, 效果: { 目标: '能量', 增加kJ: 50 } },
  { 名称: '安神剂', 数量: 1, 效果: { 目标: '精神', 增加点: 5 } },
  { 名称: '应急精神稳定剂', 数量: 1, 效果: { 目标: '精神', 增加点: 15 } },
];

/** 新手包内容 */
export const 新手包 = {
  回路: ['windcut'],
  补给: ['管控晶（80%纯度魔素晶体）'],
};
