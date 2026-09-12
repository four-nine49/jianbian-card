// ui/pages/gradband-prompts.ts — 渐变带·自由回路 提示词编辑页（特殊页：数据/法术 AI）
//
// 数据AI 一套 + 法术AI 两套（v1.8.7 起拆分：自创申报 / 剧情获得送审，AI 不再自行识别场景；
// 标准表填表走剑与汽水共用「提示词模板」页）。
// 段编辑交互同开局框架提示词页：ON/OFF、↑↓、删除、新增、恢复默认；占位符见页首说明。
import { loadSettings, saveSettings, 默认提示词, type PromptSegment } from '../../gradband/core/settings';

const GROUPS = ['数据AI', '法术AI自创', '法术AI剧情'] as const;

const GROUP_HINTS: Record<(typeof GROUPS)[number], string> = {
  数据AI: '逐轮读取正文 → 输出状态变更包',
  法术AI自创: '审核玩家自创申报（{{参数}}=中文参数明细；通过时输出「效果文字稿」、严禁参数向量）',
  法术AI剧情: '审核剧情获得回路（{{参数}}=参数模板JSON；通过时必须补全「参数向量」）',
};

const PLACEHOLDER_HINTS: Record<string, string> = {
  数据AI: '{{状态}} {{场景}} {{正文}}',
  法术AI自创: '{{描述}} {{参数}} {{亲和}} {{场景}}',
  法术AI剧情: '{{描述}} {{参数}} {{亲和}} {{场景}}',
};

export function renderGradbandPromptsPage(el: HTMLElement): void {
  el.innerHTML = `<div style="padding:16px">
    <div class="of-h1">渐变带 · 提示词</div>
    <div class="of-hint" style="margin-bottom:12px">数据 一套 + 法术 两套（自创申报 / 剧情获得送审，各自独立调用）提示词。每套里：<b>ON/OFF</b> 控制这段发不发，↑↓ 调顺序，可删可加、可恢复默认。</div>
    <div id="gbfc-pg-groups"></div>
  </div>`;

  const groupsEl = el.querySelector('#gbfc-pg-groups') as HTMLElement;
  GROUPS.forEach(w => renderGroup(groupsEl, w));
}

function renderGroup(root: HTMLElement, which: (typeof GROUPS)[number]): void {
  const s = loadSettings();
  const segs = s.提示词[which].map(x => ({ ...x }));
  const wrap = document.createElement('div');
  wrap.className = 'of-card';
  wrap.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
      <div class="of-h2" style="margin:0">${which} 提示词</div>
      <span class="of-hint" style="font-size:11px">${GROUP_HINTS[which]}</span>
      <span class="of-hint" style="font-size:11px">占位符：<code>${PLACEHOLDER_HINTS[which]}</code></span>
    </div>
    <div class="gbfc-pg-segs" style="margin-top:8px"></div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-add">＋ 添加一段</button>
      <button class="of-btn of-btn-ghost of-btn-sm gbfc-pg-preset">恢复默认</button>
    </div>`;
  root.appendChild(wrap);

  const segsEl = wrap.querySelector('.gbfc-pg-segs') as HTMLElement;

  function renderSegs() {
    segsEl.innerHTML = segs.map((seg, i) => `
      <div class="of-card" style="margin-bottom:8px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
          <select class="of-select" data-role="${i}" style="width:100px">
            <option value="system" ${seg.role === 'system' ? 'selected' : ''}>system</option>
            <option value="user" ${seg.role === 'user' ? 'selected' : ''}>user</option>
            <option value="assistant" ${seg.role === 'assistant' ? 'selected' : ''}>assistant</option>
          </select>
          <input class="of-input" data-note="${i}" value="${(seg.note || '').replace(/"/g, '&quot;')}" placeholder="备注" style="flex:1">
          <button class="of-btn of-btn-ghost of-btn-sm" data-up="${i}" title="上移">↑</button>
          <button class="of-btn of-btn-ghost of-btn-sm" data-down="${i}" title="下移">↓</button>
          <button class="of-btn of-btn-sm ${seg.enabled ? 'of-btn-ok' : 'of-btn-ghost'}" data-toggle="${i}">${seg.enabled ? 'ON' : 'OFF'}</button>
          <button class="of-btn of-btn-danger of-btn-sm" data-delseg="${i}" title="删除">删</button>
        </div>
        <textarea class="of-textarea" data-content="${i}" rows="3">${(seg.content || '').replace(/</g, '&lt;')}</textarea>
      </div>
    `).join('');
  }
  renderSegs();

  function save() {
    const cur = loadSettings();
    cur.提示词[which] = segs.map(x => ({ ...x }));
    saveSettings(cur);
    toastr?.success?.(`已保存 ${which} 提示词`);
  }

  segsEl.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const up = t.closest('[data-up]'); const down = t.closest('[data-down]');
    const tog = t.closest('[data-toggle]'); const del = t.closest('[data-delseg]');
    if (up) { const i = parseInt(up.getAttribute('data-up')!, 10); if (i > 0) { [segs[i - 1], segs[i]] = [segs[i], segs[i - 1]]; save(); renderSegs(); } }
    if (down) { const i = parseInt(down.getAttribute('data-down')!, 10); if (i < segs.length - 1) { [segs[i + 1], segs[i]] = [segs[i], segs[i + 1]]; save(); renderSegs(); } }
    if (tog) { const i = parseInt(tog.getAttribute('data-toggle')!, 10); segs[i].enabled = !segs[i].enabled; save(); renderSegs(); }
    if (del) {
      const i = parseInt(del.getAttribute('data-delseg')!, 10);
      if (!confirm(`删除「${segs[i]?.note || segs[i]?.role || '这一段'}」？`)) return;
      segs.splice(i, 1); save(); renderSegs();
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
  wrap.querySelector('.gbfc-pg-add')!.addEventListener('click', () => {
    segs.push({ role: 'system', content: '（新分段，占位符见页首说明）', enabled: true, note: '自定义' });
    save(); renderSegs();
  });
  wrap.querySelector('.gbfc-pg-preset')!.addEventListener('click', () => {
    if (!confirm(`恢复 ${which} 提示词为默认？当前自定义会丢失。`)) return;
    segs.splice(0, segs.length, ...默认提示词()[which].map(x => ({ ...x })));
    save(); renderSegs();
  });
}
