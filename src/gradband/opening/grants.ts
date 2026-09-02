// opening/grants.ts — 开局发放：把开局选择写进存档（新手包 / 自挑）
import { 默认游戏, 默认感情角色, type 游戏, type 回路, type 补给 } from '../core/schema';
import { 预设回路清单, 预设补给清单, 新手包 } from '../core/presets';
import { 构建回路记录 } from '../pipeline/settle';
import { 解析剧情时间 } from '../core/time';
import type { FeelCharacter } from '../core/settings';

export interface 开局选择 {
  性别: '男' | '女';
  主分支: { 族: string; 分支: string }[];
  次分支: { 族: string; 分支: string }[];
  发放模式: '新手包' | '自挑';
  自挑回路: string[];          // 预设回路 key 列表
  自挑补给: string[];          // 预设补给名称列表
  剧情时间label: string;       // "2026年9月1日，08：00"
}

/** 应用开局：返回全新存档（调用方负责落盘+快照） */
export function 应用开局(sel: 开局选择, extra?: { 开场白?: string; 感情角色?: FeelCharacter[] }): 游戏 {
  const t0 = 解析剧情时间(sel.剧情时间label) ?? 解析剧情时间('2026年9月1日，08：00')!;
  const g = 默认游戏();
  g.主角.剧情时间.label = sel.剧情时间label;
  g.主角.上次结算min = t0;
  g.亲和.主分支 = sel.主分支;
  g.亲和.次分支 = sel.次分支;

  // 发放固定回路 → 依次装入固定槽
  const keys = sel.发放模式 === '新手包' ? 新手包.回路 : sel.自挑回路;
  let slot = 0;
  for (const key of keys) {
    const p = 预设回路清单.find(x => x.key === key);
    if (!p || slot >= 10) continue;
    const c: 回路 = 构建回路记录({
      id: `fx-${String(slot + 1).padStart(2, '0')}`,
      名称: p.名称, type: 'fixed', famKey: p.famKey,
      params: p.params, e: p.e ?? 0, g,
      来源: '开局预设',
    });
    c.基线账单.一句话效果 = p.一句话效果 || c.基线账单.一句话效果;
    g.回路库.push(c);
    g.槽位.固定槽[slot] = c.id;
    slot++;
  }

  // 发放补给（一补给一牌：预设数量 N → N 条独立记录，uid 区分）
  const supplies = sel.发放模式 === '新手包'
    ? 预设补给清单.filter(s => 新手包.补给.includes(s.名称))
    : 预设补给清单.filter(s => sel.自挑补给.includes(s.名称));
  const 补给条: 补给[] = [];
  for (const s of supplies) {
    for (let k = 0; k < s.数量; k++) {
      补给条.push({
        名称: s.名称, 数量: 1, 纯度: s.纯度, 效果: { ...s.效果 },
        uid: `${s.名称}${s.纯度 != null ? '-' + s.纯度 : ''}#开局${k}`,
      } as 补给);
    }
  }
  g.补给物品 = 补给条;

  // 感情追踪初始化（按设置里的角色模板；无设置时用默认陆安）
  g.感情追踪 = {};
  for (const ch of (extra?.['感情角色'] as FeelCharacter[] | undefined) ?? 默认感情角色) {
    g.感情追踪[ch.名称] = {};
    for (const f of ch.fields) (g.感情追踪[ch.名称] as any)[f.名] = f.类型 === 'number' ? 0 : '';
  }
  // 陆安默认初始值
  if (g.感情追踪['陆安']) {
    Object.assign(g.感情追踪['陆安'], { 自洽: 10, 共情: 6, 解构: 10, 对主角的信任度: 5 });
  }

  void extra; // 开场白由调用方直接写 0 楼
  return g;
}
