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

/** 纯度 → 恢复量档位（晶体/导液 3 档：民用 <80 / 管控 80-99 / 战略 ≥99） */
export function 补给档位(纯度?: number): '民用' | '管控' | '战略' {
  const p = 纯度 ?? 0;
  if (p >= 99) return '战略';
  if (p >= 80) return '管控';
  return '民用';
}

/** 按名称 + 纯度 算补给效果（晶体=能量，导液=精神；创伤补给忽略纯度） */
export function 按纯度算效果(名称: string, 纯度?: number): { 目标: '能量' | '精神' | '创伤'; 增加kJ?: number; 增加点?: number; 身体状态?: '正常' | '轻伤' } | null {
  if (名称 === '魔素晶体') {
    const p = 纯度 ?? 0;
    if (p >= 99) return { 目标: '能量', 增加kJ: 4800 };
    if (p >= 80) return { 目标: '能量', 增加kJ: 1800 };
    return { 目标: '能量', 增加kJ: 500 };
  }
  if (名称 === '魔素导液') {
    const p = 纯度 ?? 0;
    if (p >= 99) return { 目标: '精神', 增加点: 50 };
    if (p >= 80) return { 目标: '精神', 增加点: 30 };
    return { 目标: '精神', 增加点: 12 };
  }
  if (名称 === '快速生化止血喷雾') return { 目标: '创伤', 身体状态: '正常' };
  if (名称 === '仿生神经桥接贴片') return { 目标: '创伤', 身体状态: '轻伤' };
  return null;
}

/** 预设补给（数据AI 白名单同源：魔素晶体/魔素导液 + 2 种创伤治疗） */
export const 预设补给清单: 补给[] = [
  { 名称: '魔素晶体', 数量: 2, 纯度: 64.2, 效果: { 目标: '能量', 增加kJ: 500 } },
  { 名称: '魔素导液', 数量: 2, 纯度: 52, 效果: { 目标: '精神', 增加点: 12 } },
  { 名称: '快速生化止血喷雾', 数量: 1, 效果: { 目标: '创伤', 身体状态: '正常' } },
  { 名称: '仿生神经桥接贴片', 数量: 1, 效果: { 目标: '创伤', 身体状态: '轻伤' } },
];

/** 新手包内容 */
export const 新手包 = {
  回路: ['windcut'],
  补给: ['魔素晶体'],
};
