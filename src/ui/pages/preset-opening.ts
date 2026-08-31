// ui/pages/preset-opening.ts — 「原预设开局」：剑与汽水5.0 四条线向导
//
// 流程（对齐原开局初始化 HTML，改为本扩展实现）：
//   ① 选角色（同时按线切换世界书：性格/动态/系统相关条目）
//   ② 选性别 → 预览 → 确认写入（表格模板 + 初始数据，存本扩展表格存储）
//   ③ 开场白（预设自动填入，可改，可恢复默认）
//   ④ 确认 → 开场白直接写入第 0 楼
// 进度存聊天变量（随聊天持久化，换聊天各自独立）。
import { refreshCurrent } from '../app';
import { getPresetState, savePresetState, type PresetState } from '../../preset/preset-store';
import { PRESET_LINE_NAMES, PRESET_LINES } from '../../preset/preset-data';
import { applyPresetTables, applyPresetWorldbook, injectOpeningToFloor0 } from '../../preset/preset-apply';
import { syncToLastFloor } from '../../sync/message-sync';

let step = 0;
let state: PresetState | null = null;

export function renderPresetPage(el: HTMLElement): void {
  state = getPresetState();
  step = 0;
  if (state) {
    // 恢复进度：选了角色→第2步；选了性别→第3步；开场白已确认→第4步
    if (state.opening) step = 3;
    else if (state.gender) step = 2;
    else step = 1;
  }
  render(el);
}

function render(el: HTMLElement): void {
  const line = state ? PRESET_LINES[state.character] : null;
  el.innerHTML = `<div style="padding:16px;max-width:760px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">剑与汽水角色卡专用开局</div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-reset" style="margin-left:auto">清除进度</button>
    </div>
    <div class="of-hint" style="margin-bottom:10px">四条线（爱丽丝 / 沧月汐 / 似久 / 墨白）。选角色 → 选性别写入数据 → 确认开场白 → 注入第 0 楼。进度随当前聊天保存。</div>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;font-size:12px">
      ${[0, 1, 2, 3].map(i => `<span style="width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;${i === step ? 'background:#89b4fa;color:#1e1e2e;font-weight:700' : i < step ? 'background:#a6e3a1;color:#1e1e2e' : 'background:#313244;color:#6c7086'}">${i + 1}</span>${i < 3 ? '<span style="flex:0 0 24px;height:2px;background:#313244"></span>' : ''}`).join('')}
      <span class="of-hint" style="margin-left:8px">${['选择角色', '选择性别并写入数据', '确认开场白', '注入第 0 楼'][step]}</span>
    </div>

    <div id="of-po-body"></div>
  </div>`;

  el.querySelector('#of-po-reset')!.addEventListener('click', () => {
    if (!confirm('清除本条线的开局进度？（已写入的表格数据不受影响，可到「表格数据」页查看）')) return;
    state = null;
    savePresetState(null);
    step = 0;
    render(el);
  });

  const body = el.querySelector('#of-po-body') as HTMLElement;
  if (step === 0) renderStep1(body);
  else if (step === 1) renderStep2(body);
  else if (step === 2) renderStep3(body);
  else renderStep4(body);
}

// ── 第 1 步：选择角色 ──
function renderStep1(body: HTMLElement): void {
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择角色线</div>
      <div class="of-hint" style="margin-bottom:10px">确认后自动按线切换世界书（本线性格/动态/系统相关条目开启，其它线关闭）。</div>
      <div class="of-grid2" id="of-po-chars">
        ${PRESET_LINE_NAMES.map(name => {
          const l = PRESET_LINES[name];
          return `<button class="of-path-card" data-char="${name}">
            <div class="of-path-title">${l.title}</div>
            <div class="of-path-desc">${(l.subtitle || '').replace(/\n/g, '<br>')}</div>
          </button>`;
        }).join('')}
      </div>
      <button class="of-btn" id="of-po-char-ok" style="margin-top:12px" disabled>确认角色并继续（切换世界书）</button>
      <div class="of-hint" id="of-po-char-state" style="margin-top:6px"></div>
    </div>`;

  let picked = state?.character ?? '';
  if (picked) (body.querySelector(`[data-char="${picked}"]`) as HTMLElement)?.classList.add('active');
  const okBtn = body.querySelector('#of-po-char-ok') as HTMLButtonElement;
  if (picked) okBtn.disabled = false;

  body.querySelectorAll('[data-char]').forEach(card => {
    card.addEventListener('click', () => {
      body.querySelectorAll('[data-char]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      picked = card.getAttribute('data-char')!;
      okBtn.disabled = false;
    });
  });

  okBtn.addEventListener('click', async () => {
    if (!picked) return;
    okBtn.disabled = true;
    const stateEl = body.querySelector('#of-po-char-state') as HTMLElement;
    stateEl.textContent = '正在切换世界书…';
    state = { character: picked, gender: '', opening: '' };
    savePresetState(state);
    try {
      const r = await applyPresetWorldbook(picked);
      stateEl.textContent = r.ok
        ? `世界书已切换：${r.summary || '无变更'}`
        : `世界书切换跳过：${r.error || '未知原因'}（不影响后续步骤）`;
    } catch (e) {
      stateEl.textContent = `世界书切换异常（已继续）：${(e as Error).message}`;
    }
    okBtn.disabled = false;
    step = 1;
    rerenderRoot(body);
  });
}

// ── 第 2 步：选择性别 + 写入数据 ──
function renderStep2(body: HTMLElement): void {
  const line = PRESET_LINES[state!.character];
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择你的性别（${state!.character} 线）</div>
      <div class="of-grid2" style="margin-top:8px">
        <button class="of-path-card" data-gender="男"><div class="of-path-title">♂ 男</div><div class="of-path-desc">${line.maleDesc.replace(/\n/g, '<br>')}</div></button>
        <button class="of-path-card" data-gender="女"><div class="of-path-title">♀ 女</div><div class="of-path-desc">${line.femaleDesc.replace(/\n/g, '<br>')}</div></button>
      </div>
      <div class="of-hint" id="of-po-gender-preview" style="margin-top:10px"></div>
      <button class="of-btn of-btn-ok" id="of-po-gender-ok" style="margin-top:10px" disabled>确认性别并写入数据</button>
      <div class="of-hint" id="of-po-gender-state" style="margin-top:6px"></div>
    </div>`;

  let picked = state?.gender ?? '';
  if (picked) (body.querySelector(`[data-gender="${picked}"]`) as HTMLElement)?.classList.add('active');
  const okBtn = body.querySelector('#of-po-gender-ok') as HTMLButtonElement;
  const previewEl = body.querySelector('#of-po-gender-preview') as HTMLElement;
  if (picked) { okBtn.disabled = false; showPreview(previewEl, state!.character, picked); }

  body.querySelectorAll('[data-gender]').forEach(card => {
    card.addEventListener('click', () => {
      body.querySelectorAll('[data-gender]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      picked = card.getAttribute('data-gender')!;
      okBtn.disabled = false;
      showPreview(previewEl, state!.character, picked);
    });
  });

  okBtn.addEventListener('click', async () => {
    if (!picked) return;
    okBtn.disabled = true;
    const stateEl = body.querySelector('#of-po-gender-state') as HTMLElement;
    stateEl.textContent = '正在写入表格模板与初始数据…';
    try {
      const r = applyPresetTables(state!.character, picked);
      state = { ...state!, gender: picked };
      savePresetState(state);
      stateEl.textContent = `写入成功：${r.tables} 张表 / ${r.rows} 行初始数据（存本扩展，可到「表格数据」页查看）`;
      toastr?.success?.(`开局数据已写入：${r.tables} 张表 / ${r.rows} 行`);
      // 选完开局：立即同步一次楼层变量（无条件，状态栏马上有数据）
      void syncToLastFloor();
      step = 2;
      rerenderRoot(body);
    } catch (e) {
      stateEl.textContent = `写入失败：${(e as Error).message}`;
      okBtn.disabled = false;
    }
  });
}

function showPreview(el: HTMLElement, character: string, gender: string): void {
  const line = PRESET_LINES[character];
  const seeds = line.seeds[gender === '女' ? '女' : '男'] ?? {};
  const profileRows = seeds['角色档案'] ?? [];
  const main = profileRows[0] ?? [];
  const partner = profileRows[1] ?? [];
  const profileDef = line.tables.find(t => t.name === '角色档案');
  const h = profileDef?.headers ?? [];
  const v = (row: string[], name: string) => { const i = h.indexOf(name); return i >= 0 ? (row[i] || '-') : '-'; };
  const rowCount = Object.entries(seeds).map(([t, r]) => `${t} ${r.length} 行`).join('，');
  el.innerHTML = `<b>主角</b>：${main.length ? `${v(main, '身份')} · ${v(main, '种族')} · ${v(main, '综合属性')} · ${v(main, '流动资金')}` : '-'}
    ${partner.length ? `<br><b>同伴</b>：${v(partner, '名字')} · ${v(partner, '身份')} · ${v(partner, '综合属性')}` : ''}
    <br><b>将写入</b>：${rowCount || '（无初始数据）'}`;
}

// ── 第 3 步：开场白 ──
function renderStep3(body: HTMLElement): void {
  const line = PRESET_LINES[state!.character];
  const presetText = line.openings[(state!.gender === '女' ? '女' : '男') as '男' | '女'] ?? '';
  if (!state!.opening) state!.opening = presetText;
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白（预设已填入，可直接修改）</div>
      <textarea class="of-textarea" id="of-po-opening" rows="12" style="min-height:220px">${state!.opening.replace(/</g, '&lt;')}</textarea>
      <div class="of-hint" style="margin-top:6px">{{user}} 宏在注入第 0 楼后由酒馆自动替换。注入会覆盖第 0 楼现有内容。</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="of-btn of-btn-ghost" id="of-po-opening-reset">恢复默认开场白</button>
        <button class="of-btn of-btn-ok" id="of-po-opening-ok" style="margin-left:auto">确认开场白</button>
      </div>
    </div>`;

  const ta = body.querySelector('#of-po-opening') as HTMLTextAreaElement;
  ta.addEventListener('input', () => {
    state!.opening = ta.value;
    savePresetState(state!);
  });
  body.querySelector('#of-po-opening-reset')!.addEventListener('click', () => {
    ta.value = presetText;
    state!.opening = presetText;
    savePresetState(state!);
  });
  body.querySelector('#of-po-opening-ok')!.addEventListener('click', () => {
    const text = ta.value.trim();
    if (!text) { toastr?.warning?.('开场白为空'); return; }
    state!.opening = text;
    savePresetState(state!);
    step = 3;
    rerenderRoot(body);
  });
}

// ── 第 4 步：确认并注入第 0 楼 ──
function renderStep4(body: HTMLElement): void {
  const line = PRESET_LINES[state!.character];
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">确认信息</div>
      <div class="of-hint">角色线：${state!.character} ｜ 性别：${state!.gender || '男'} ｜ 表格模板与初始数据已写入本扩展表格存储（「表格数据」页可查看/修改）。</div>
    </div>
    <div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白预览</div>
      <div style="white-space:pre-wrap;font-size:13px;line-height:1.8;max-height:260px;overflow-y:auto" id="of-po-final-preview"></div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-po-back" style="margin-top:8px">← 返回修改开场白</button>
    </div>
    <button class="of-btn of-btn-ok" id="of-po-start" style="margin-top:12px">注入第 0 楼并开始游戏</button>
    <div class="of-hint" id="of-po-start-state" style="margin-top:6px"></div>`;

  (body.querySelector('#of-po-final-preview') as HTMLElement).textContent = state!.opening;
  body.querySelector('#of-po-back')!.addEventListener('click', () => { step = 2; rerenderRoot(body); });

  const startBtn = body.querySelector('#of-po-start') as HTMLButtonElement;
  const stateEl = body.querySelector('#of-po-start-state') as HTMLElement;
  startBtn.addEventListener('click', async () => {
    startBtn.disabled = true;
    stateEl.textContent = '正在注入第 0 楼…';
    try {
      await injectOpeningToFloor0(state!.opening);
      stateEl.textContent = '已写入第 0 楼！进度已清除，可以开始游戏了。';
      toastr?.success?.('开场白已注入第 0 楼，游戏开始！');
      // 开局完成（第 0 楼已存在）：再同步一次，确保第 0 楼变量带最新表格快照
      void syncToLastFloor();
      state = null;
      savePresetState(null);
      step = 0;
      startBtn.textContent = '已完成 ✓';
    } catch (e) {
      stateEl.textContent = `注入失败：${(e as Error).message}`;
      startBtn.disabled = false;
    }
  });
}

/** 从子节点向上找面板根并重渲染 */
function rerenderRoot(node: HTMLElement): void {
  let root: HTMLElement | null = node;
  while (root && !root.querySelector?.('#of-po-reset')) root = root.parentElement;
  if (root) render(root);
  else refreshCurrent();
}
