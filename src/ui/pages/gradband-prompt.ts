// ui/pages/gradband-prompt.ts — 渐变带·提示词模板（剑与汽水样式，只针对感情表）
//
// 剑与汽水「提示词模板」页同款：占位符说明表 + 段增删/排序/ON-OFF/恢复默认。
// 但只管理「感情表」的提示词（每张感情表一套，存 settings.感情提示词[表名]），
// 供感情AI（标准AI）在 runTurn 里使用。数据/法术AI 的提示词在「渐变带·提示词」页（特殊页）。
import { FEEL_TABLES, getFeelPrompt, setFeelPrompt, 默认感情提示词 } from '../../gradband/feel-tables';
import type { PromptSegment } from '../../gradband/core/settings';

const PLACEHOLDER_DOCS: { name: string; desc: string }[] = [
  { name: '{{角色}}', desc: '当前感情表名（追踪角色）' },
  { name: '{{字段说明}}', desc: '该表的 Note 规则（数值变化规则，自动注入）' },
  { name: '{{当前值}}', desc: '该表当前各字段的值（自动注入）' },
  { name: '{{正文}}', desc: '最近对话正文（按轮取，自动注入）' },
];

let activeName = FEEL_TABLES[0]?.name ?? '';

function esc(s: unknown): string {
  return String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string));
}

export function renderGradbandPromptPage(el: HTMLElement): void {
  if (!FEEL_TABLES.some(t => t.name === activeName)) activeName = FEEL_TABLES[0]?.name ?? '';

  el.innerHTML = `<div style="padding:16px">
    <div class="of-h1">渐变带 · 提示词模板（感情）</div>
    <div class="of-hint" style="margin-bottom:12px">剑与汽水同款提示词模板页，但只管理「感情表」的提示词（每张感情表一套，供感情AI使用）。数据/法术AI 的提示词请到「渐变带·提示词」页。</div>

    <div class="of-card" style="margin-bottom:12px">
      <div class="of-h2" style="font-size:13px">可用占位符</div>
      <table class="of-table"><tbody>
        ${PLACEHOLDER_DOCS.map(p => `<tr><td style="width:190px"><code style="color:#a6e3a1">${p.name}</code></td><td style="color:#cdd6f4">${p.desc}</td></tr>`).join('')}
      </tbody></table>
      <div class="of-hint" style="margin-top:6px">写错的占位符会原样保留在提示词里，方便发现拼写错误。</div>
    </div>

    <div class="of-split">
      <div class="of-sidelist" id="gp-list" style="width:150px"></div>
      <div style="flex:1;overflow:auto;padding:0 12px" id="gp-body"></div>
    </div>
  </div>`;

  const listEl = el.querySelector('#gp-list') as HTMLElement;
  const bodyEl = el.querySelector('#gp-body') as HTMLElement;

  function renderList() {
    listEl.innerHTML = FEEL_TABLES.map(t =>
      `<button class="of-sidelist-btn${t.name === activeName ? ' active' : ''}" data-name="${t.name}">${t.name}</button>`
    ).join('');
    listEl.innerHTML += `<div style="border-top:1px solid #313244;margin-top:8px;padding-top:6px;font-size:11px;color:#6c7086">多感情表：每表一套提示词。</div>`;
  }

  function renderBody() {
    const segs = getFeelPrompt(activeName).map(x => ({ ...x }));
    bodyEl.innerHTML = `
      <div style="display:flex;align-items:center;margin-bottom:8px">
        <div class="of-h2" style="margin:0">${esc(activeName)} 提示词</div>
        <button class="of-btn of-btn-ghost of-btn-sm" id="gp-reset" style="margin-left:auto">恢复默认</button>
      </div>
      <div id="gp-segs"></div>
      <div style="margin-top:8px"><button class="of-btn of-btn-ok of-btn-sm" id="gp-add">＋ 添加一段</button></div>
    `;
    const segsEl = bodyEl.querySelector('#gp-segs') as HTMLElement;

    function renderSegs() {
      segsEl.innerHTML = segs.map((seg, i) => `
        <div class="of-card" style="margin-bottom:8px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <select class="of-select" data-role="${i}" style="width:96px">
              <option value="system" ${seg.role === 'system' ? 'selected' : ''}>system</option>
              <option value="user" ${seg.role === 'user' ? 'selected' : ''}>user</option>
              <option value="assistant" ${seg.role === 'assistant' ? 'selected' : ''}>assistant</option>
            </select>
            <input class="of-input" data-note="${i}" value="${esc(seg.note || '')}" placeholder="备注" style="flex:1">
            <button class="of-btn of-btn-ghost of-btn-sm" data-up="${i}">↑</button>
            <button class="of-btn of-btn-ghost of-btn-sm" data-down="${i}">↓</button>
            <button class="of-btn of-btn-sm ${seg.enabled ? 'of-btn-ok' : 'of-btn-ghost'}" data-toggle="${i}">${seg.enabled ? 'ON' : 'OFF'}</button>
            <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${i}">删</button>
          </div>
          <textarea class="of-textarea" data-content="${i}" rows="3">${esc(seg.content)}</textarea>
        </div>`).join('');
    }
    renderSegs();

    function save() {
      setFeelPrompt(activeName, segs);
      toastr?.success?.('已保存');
    }

    segsEl.addEventListener('click', (e) => {
      const t = e.target as HTMLElement;
      const up = t.closest('[data-up]'); const down = t.closest('[data-down]');
      const tog = t.closest('[data-toggle]'); const del = t.closest('[data-delseg]');
      if (up) { const i = parseInt(up.getAttribute('data-up')!, 10); if (i > 0) { [segs[i - 1], segs[i]] = [segs[i], segs[i - 1]]; save(); renderSegs(); } }
      if (down) { const i = parseInt(down.getAttribute('data-down')!, 10); if (i < segs.length - 1) { [segs[i + 1], segs[i]] = [segs[i], segs[i + 1]]; save(); renderSegs(); } }
      if (tog) { const i = parseInt(tog.getAttribute('data-toggle')!, 10); segs[i].enabled = !segs[i].enabled; save(); renderSegs(); }
      if (del) { const i = parseInt(del.getAttribute('data-delseg')!, 10); segs.splice(i, 1); save(); renderSegs(); }
    });
    segsEl.addEventListener('change', (e) => {
      const t = e.target as HTMLElement;
      const roleSel = t.closest('[data-role]'); const noteInp = t.closest('[data-note]');
      if (roleSel) { segs[parseInt(roleSel.getAttribute('data-role')!, 10)].role = (roleSel as HTMLSelectElement).value as any; save(); }
      if (noteInp) { segs[parseInt(noteInp.getAttribute('data-note')!, 10)].note = (noteInp as HTMLInputElement).value; save(); }
    });
    segsEl.querySelectorAll('[data-content]').forEach(ta => {
      ta.addEventListener('blur', () => { segs[parseInt(ta.getAttribute('data-content')!, 10)].content = (ta as HTMLTextAreaElement).value; save(); });
    });
    bodyEl.querySelector('#gp-add')!.addEventListener('click', () => { segs.push({ role: 'system', content: '（新分段，占位符见页首说明）', enabled: true, note: '自定义' }); save(); renderSegs(); });
    bodyEl.querySelector('#gp-reset')!.addEventListener('click', () => {
      if (!confirm(`恢复「${activeName}」默认提示词？`)) return;
      segs.splice(0, segs.length, ...默认感情提示词(activeName).map(x => ({ ...x })));
      save(); renderSegs();
    });
  }

  listEl.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest('[data-name]');
    if (!b) return;
    activeName = b.getAttribute('data-name')!;
    renderList(); renderBody();
  });

  renderList();
  renderBody();
}
