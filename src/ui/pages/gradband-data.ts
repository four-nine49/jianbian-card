// ui/pages/gradband-data.ts — 渐变带·自由回路 数据页（六表运行时状态，只读概览）
//
// 六表：主角 / 补给物品 / 回路库 / 槽位 / 待扣单 / 场景（标准表感情追踪不在特殊页显示）。
// 运行时状态由 settle.ts 引擎维护，本页只读展示 + 引导到「渐变带·自由回路」管理窗口编辑。
// 数据存 chat 变量 `渐变带`（game 对象），快照在 message 变量 stat_data.渐变带。
import { loadGame, NS } from '../../gradband/core/store';
import type { 游戏 } from '../../gradband/core/schema';

function esc(s: unknown): string {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

export function renderGradbandDataPage(el: HTMLElement): void {
  const g = loadGame();
  el.innerHTML = `<div style="padding:16px">
    <div class="of-h1">渐变带 · 数据</div>
    <div class="of-hint" style="margin-bottom:12px">六表运行时状态（由自由回路引擎维护，存聊天变量 <code>${esc(NS)}</code>）。本页只读概览；要改数据请到「渐变带·自由回路」管理窗口。</div>
    ${g ? renderOverview(g) : '<div class="of-card of-muted">未开局：先注入开局面板完成角色创建，或到管理窗口手动建档。</div>'}
  </div>`;
}

function renderOverview(g: 游戏): string {
  const z = g.主角;
  let html = '';

  // 主角
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">主角</div>
    <div class="of-hint">剧情时间：${esc(z.剧情时间?.label ?? '-')}　能量 ${Math.round(z.能量kJ.当前)}/${z.能量kJ.上限} kJ　精神 ${Math.round(z.精神点.当前)}/${z.精神点.上限}　爆发线 ${z.爆发线kW} kW　持续线 ${z.持续线kW} kW　身体 ${esc(z.身体状态)}　战斗中 ${z.战斗中 ? '是' : '否'}</div>
  </div>`;

  // 补给物品
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">补给物品（${g.补给物品.length}）</div>
    ${g.补给物品.length === 0 ? '<div class="of-muted">（无）</div>' : `<table class="of-table"><thead><tr><th>名称</th><th>数量</th><th>效果</th></tr></thead><tbody>${g.补给物品.map(i => `<tr><td>${esc(i.名称)}</td><td>${esc(i.数量)}</td><td>${esc(JSON.stringify(i.效果))}</td></tr>`).join('')}</tbody></table>`}
  </div>`;

  // 回路库（fixed/free）
  const fixed = g.回路库.filter(c => c.type === 'fixed');
  const free = g.回路库.filter(c => c.type === 'free');
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">回路库（固定 ${fixed.length} / 自由 ${free.length}）</div>
    ${g.回路库.length === 0 ? '<div class="of-muted">（无）</div>' : `<table class="of-table"><thead><tr><th>名称</th><th>类型</th><th>族·分支</th><th>效果</th><th>参数</th></tr></thead><tbody>${g.回路库.map(c => `<tr><td>${esc(c.名称)}</td><td>${esc(c.type)}</td><td>${esc(c.族)}·${esc(c.分支)}</td><td>${esc(c.基线账单?.一句话效果 ?? '')}</td><td>${esc(JSON.stringify(c.参数明细 ?? c.参数向量 ?? {}))}</td></tr>`).join('')}</tbody></table>`}
  </div>`;

  // 槽位（固定 10 / 自由 3）
  const 固 = g.槽位?.固定槽 ?? [];
  const 自 = g.槽位?.自由槽 ?? [];
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">槽位</div>
    <div class="of-hint">固定：${固.length ? 固.map((s, i) => `${i + 1}.${esc(s ?? '空')}`).join('　') : '（空）'}</div>
    <div class="of-hint">自由：${自.length ? 自.map((s, i) => `${i + 1}.${esc(s ?? '空')}`).join('　') : '（空）'}</div>
  </div>`;

  // 待扣单
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">待扣单（${g.待扣单.length}）</div>
    ${g.待扣单.length === 0 ? '<div class="of-muted">（无）</div>' : `<table class="of-table"><thead><tr><th>引用</th><th>名称</th><th>计费kJ</th><th>精神</th><th>风险</th></tr></thead><tbody>${g.待扣单.map(t => `<tr><td>${esc(t.ref)}</td><td>${esc(t.名称)}</td><td>${esc(t.bill)}</td><td>${esc(t.mind)}</td><td>${esc(t.risk)}</td></tr>`).join('')}</tbody></table>`}
  </div>`;

  // 场景
  html += `<div class="of-card">
    <div class="of-h2" style="font-size:13px">场景</div>
    <div class="of-hint">${esc(JSON.stringify(g.场景 ?? {}))}</div>
  </div>`;

  return html;
}
