// ui/pages/prompt-template.ts — 提示词模板编辑（占位符说明、段增删/排序/开关）
import { loadSettings, updatePromptTemplate, resetPromptTemplate } from '../../store/settings';
import { PROMPT_PLACEHOLDER_DOCS } from '../../store/types';

export function renderPromptTemplatePage(el: HTMLElement): void {
  const s = loadSettings();
  const segs = s.promptTemplate.segments.map((x) => ({ ...x }));
  let instr = s.promptTemplate.instructions;

  el.innerHTML = `<div style="padding:16px">
    <div style="display:flex;align-items:center;margin-bottom:12px"><div class="of-h2">提示词模板</div><button class="of-btn of-btn-ghost of-btn-sm" id="of-pt-reset" style="margin-left:auto">恢复默认</button></div>
    <div class="of-hint" style="margin-bottom:12px">每次填表发给 AI 的完整提示词，由下面这些「段」按顺序拼成。每段里的占位符会被替换成实际内容；<b>ON/OFF</b> 控制这段发不发，↑↓ 调整顺序，可以随意添加、删除段。</div>

    <div class="of-card" style="margin-bottom:12px">
      <div class="of-h2" style="font-size:13px">可用占位符</div>
      <table class="of-table"><tbody>
        ${PROMPT_PLACEHOLDER_DOCS.map(p => `<tr><td style="width:190px"><code style="color:#a6e3a1">${p.name}</code></td><td style="color:#cdd6f4">${p.desc}</td></tr>`).join('')}
      </tbody></table>
      <div class="of-hint" style="margin-top:6px">写错的占位符会原样保留在提示词里，方便发现拼写错误。</div>
    </div>

    <label class="of-label">填表指令 instructions（{{instructions}} 的内容）</label>
    <textarea class="of-textarea" id="of-pt-instr" rows="4">${instr || ''}</textarea>
    <div class="of-hint">AI 填表的行为准则：什么时候该加行/改行、数值范围等。会替换到带 {{instructions}} 占位符的段里。</div>

    <div id="of-pt-segs" style="margin-top:12px"></div>
    <div style="margin-top:8px"><button class="of-btn of-btn-ok of-btn-sm" id="of-pt-add">＋ 添加一段</button></div>
  </div>`;

  const segsEl = el.querySelector('#of-pt-segs') as HTMLElement;

  function renderSegs() {
    segsEl.innerHTML = segs.map((seg, i) => `
      <div class="of-card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${i}" style="width:100px" title="这段以什么身份发送">
            <option value="system" ${seg.role === 'system' ? 'selected' : ''}>system</option>
            <option value="user" ${seg.role === 'user' ? 'selected' : ''}>user</option>
            <option value="assistant" ${seg.role === 'assistant' ? 'selected' : ''}>assistant</option>
          </select>
          <input class="of-input" data-note="${i}" value="${(seg.note || '').replace(/"/g, '&quot;')}" placeholder="备注（只给自己看）" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${i}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${i}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${seg.enabled ? 'of-btn-ok' : 'of-btn-ghost'}" data-toggle="${i}" title="发送 / 不发送这段">${seg.enabled ? 'ON' : 'OFF'}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${i}" title="删除这段">删</button>
        </div>
        <textarea class="of-textarea" data-content="${i}" rows="3" placeholder="这段的内容，可用上面列表里的占位符">${(seg.content || '').replace(/</g, '&lt;')}</textarea>
      </div>
    `).join('');
  }
  renderSegs();

  function save() {
    instr = (el.querySelector('#of-pt-instr') as HTMLTextAreaElement).value;
    updatePromptTemplate({ segments: segs.map((x) => ({ ...x })), instructions: instr });
    toastr?.success?.('已保存');
  }

  segsEl.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const up = t.closest('[data-up]'); const down = t.closest('[data-down]'); const tog = t.closest('[data-toggle]'); const del = t.closest('[data-delseg]');
    if (up) { const i = parseInt(up.getAttribute('data-up')!, 10); if (i > 0) { [segs[i - 1], segs[i]] = [segs[i], segs[i - 1]]; save(); renderSegs(); } }
    if (down) { const i = parseInt(down.getAttribute('data-down')!, 10); if (i < segs.length - 1) { [segs[i + 1], segs[i]] = [segs[i], segs[i + 1]]; save(); renderSegs(); } }
    if (tog) { const i = parseInt(tog.getAttribute('data-toggle')!, 10); segs[i].enabled = !segs[i].enabled; save(); renderSegs(); }
    if (del) {
      const i = parseInt(del.getAttribute('data-delseg')!, 10);
      const name = segs[i]?.note || segs[i]?.role || '这一段';
      if (!confirm(`删除「${name}」？`)) return;
      segs.splice(i, 1);
      save(); renderSegs();
    }
  });
  segsEl.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    const roleSel = t.closest('[data-role]'); const noteInp = t.closest('[data-note]');
    if (roleSel) { segs[parseInt(roleSel.getAttribute('data-role')!, 10)].role = (roleSel as HTMLSelectElement).value as any; save(); }
    if (noteInp) { segs[parseInt(noteInp.getAttribute('data-note')!, 10)].note = (noteInp as HTMLInputElement).value; save(); }
  });
  segsEl.querySelectorAll('[data-content]').forEach(ta => {
    ta.addEventListener('blur', () => {
      const i = parseInt(ta.getAttribute('data-content')!, 10);
      segs[i].content = (ta as HTMLTextAreaElement).value;
      save();
    });
  });
  (el.querySelector('#of-pt-instr') as HTMLTextAreaElement).addEventListener('blur', save);
  el.querySelector('#of-pt-add')!.addEventListener('click', () => {
    segs.push({ role: 'system', content: '', enabled: true, note: '' });
    save(); renderSegs();
    segsEl.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
  el.querySelector('#of-pt-reset')!.addEventListener('click', () => {
    if (!confirm('恢复默认提示词模板？当前自定义（含添加/删除的段）将丢失。')) return;
    resetPromptTemplate();
    toastr?.info?.('已恢复默认');
    const cur = loadSettings();
    segs.splice(0, segs.length, ...cur.promptTemplate.segments.map((x) => ({ ...x })));
    instr = cur.promptTemplate.instructions;
    (el.querySelector('#of-pt-instr') as HTMLTextAreaElement).value = instr;
    renderSegs();
  });
}
