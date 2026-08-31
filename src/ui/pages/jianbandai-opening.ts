// ui/pages/jianbandai-opening.ts — 「渐变带角色卡专用」：学院线（陆安）五步向导
//
// 流程（对齐渐变带开局界面 HTML，改为本扩展实现）：
//   ① 路线（学院线）确认 → 写入陆安追踪表 + 自动把 陆安/地下竞技 条目设蓝灯
//   ② 世界书控制：全蓝灯 / 不变
//   ③ 主角性别
//   ④ 开场白（预设填入，可改）
//   ⑤ 确认 → 开场白写入第 0 楼
// 进度存聊天变量（随聊天持久化）；清除进度时会把世界书恢复初始灯态。
import { refreshCurrent } from '../app';
import { JIANBANDAI } from '../../preset/jianbandai-data';
import {
  applyJianbandaiTables, applyWorldbookAcademy, applyWorldbookRouteDefault, resetWorldbookInitial,
} from '../../preset/jianbandai-apply';
import { injectOpeningToFloor0 } from '../../preset/preset-apply';
import { getChatVar, setChatVar } from '../../preset/chat-vars';
import { syncToLastFloor } from '../../sync/message-sync';

const NS = '__of_jianbandai_state__';

interface JbState {
  gender: string;   // '' = 未选
  opening: string;
}

function loadState(): JbState | null {
  const raw = getChatVar<Partial<JbState>>(NS);
  if (!raw || typeof raw !== 'object') return null;
  return {
    gender: typeof raw.gender === 'string' ? raw.gender : '',
    opening: typeof raw.opening === 'string' ? raw.opening : '',
  };
}

function stepOf(s: JbState | null): number {
  if (!s) return 0;
  if (s.opening) return 4;
  if (s.gender) return 3;
  return 2;
}

let step = 0;
let state: JbState | null = null;

export function renderJianbandaiPage(el: HTMLElement): void {
  state = loadState();
  step = state ? stepOf(state) : 0;
  render(el);
}

function render(el: HTMLElement): void {
  el.innerHTML = `<div style="padding:16px;max-width:760px">
    <div style="display:flex;align-items:center;margin-bottom:4px">
      <div class="of-h1" style="margin:0">渐变带角色卡专用开局</div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-jb-reset" style="margin-left:auto">清除进度</button>
    </div>
    <div class="of-hint" style="margin-bottom:10px">学院线（陆安）。路线写入表格 → 世界书控制 → 性别 → 开场白 → 注入第 0 楼。进度随当前聊天保存。</div>

    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;font-size:12px">
      ${[0, 1, 2, 3, 4].map(i => `<span style="width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;${i === step ? 'background:#89b4fa;color:#1e1e2e;font-weight:700' : i < step ? 'background:#a6e3a1;color:#1e1e2e' : 'background:#313244;color:#6c7086'}">${i + 1}</span>${i < 4 ? '<span style="flex:0 0 20px;height:2px;background:#313244"></span>' : ''}`).join('')}
      <span class="of-hint" style="margin-left:8px">${['路线选择', '世界书控制', '主角性别', '确认开场白', '注入第 0 楼'][step]}</span>
    </div>

    <div id="of-jb-body"></div>
  </div>`;

  el.querySelector('#of-jb-reset')!.addEventListener('click', async () => {
    if (!confirm('清除本线开局进度？（同时会把渐变带世界书恢复初始灯态）')) return;
    try { await resetWorldbookInitial(); } catch { /* 非致命 */ }
    state = null;
    setChatVar(NS, null);
    step = 0;
    render(el);
  });

  const body = el.querySelector('#of-jb-body') as HTMLElement;
  if (step === 0) renderStep1(body);
  else if (step === 1) renderStep2(body);
  else if (step === 2) renderStep3(body);
  else if (step === 3) renderStep4(body);
  else renderStep5(body);
}

function rerenderRoot(node: HTMLElement): void {
  let root: HTMLElement | null = node;
  while (root && !root.querySelector?.('#of-jb-reset')) root = root.parentElement;
  if (root) render(root);
  else refreshCurrent();
}

// ── 第 1 步：路线（学院线）确认并写入 ──
function renderStep1(body: HTMLElement): void {
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择故事路线</div>
      <div class="of-grid2">
        <button class="of-path-card active" data-route="学院线">
          <div class="of-path-title">🏫 学院线</div>
          <div class="of-path-desc">魔素时代 · 中级魔法学院<br>晶体专业新生与地下极限玩家<br>从一次课堂解围开始</div>
        </button>
      </div>
      <button class="of-btn of-btn-ok" id="of-jb-route-ok" style="margin-top:12px">确认路线并写入数据</button>
      <div class="of-hint" id="of-jb-route-state" style="margin-top:6px"></div>
    </div>`;

  body.querySelector('#of-jb-route-ok')!.addEventListener('click', async () => {
    const okBtn = body.querySelector('#of-jb-route-ok') as HTMLButtonElement;
    const stateEl = body.querySelector('#of-jb-route-state') as HTMLElement;
    okBtn.disabled = true;
    stateEl.textContent = '正在创建并写入开局表格…';
    try {
      const r = applyJianbandaiTables();
      state = { gender: '', opening: '' };
      setChatVar(NS, state);
      stateEl.textContent = `写入成功：${r.tables} 张表 / ${r.rows} 行初始数据`;
      toastr?.success?.(`开局表格已写入（${r.tables} 张）`);
      // 自动把 陆安 + 地下竞技 条目设为蓝灯（非致命）
      try {
        const wb = await applyWorldbookRouteDefault();
        if (wb.ok) console.info('[渐变带开局] 世界书已自动应用蓝灯：', wb.summary);
      } catch { /* 忽略 */ }
      step = 1;
      rerenderRoot(body);
    } catch (e) {
      stateEl.textContent = `写入失败：${(e as Error).message}`;
      okBtn.disabled = false;
    }
  });
}

// ── 第 2 步：世界书控制 ──
function renderStep2(body: HTMLElement): void {
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">世界书控制</div>
      <div class="of-hint" style="margin-bottom:10px">
        · <b>全蓝灯</b>：把原本条目（渐变带 1-13）全部设为蓝灯常驻（你自己新加的条目不算）。<br>
        · <b>不变</b>：保持当前世界书状态（含上一步自动设置的 陆安/地下竞技 蓝灯）。<br>
        要开 agent 世界书控制就选「不变」；不知道什么是 agent 控制就选「全蓝灯」。
      </div>
      <div style="display:flex;gap:8px">
        <button class="of-btn" id="of-jb-wb-blue" style="flex:1">全蓝灯</button>
        <button class="of-btn of-btn-ghost" id="of-jb-wb-keep" style="flex:1">不变</button>
      </div>
      <div class="of-hint" id="of-jb-wb-state" style="margin-top:8px"></div>
    </div>`;

  const advance = () => { step = 2; rerenderRoot(body); };
  body.querySelector('#of-jb-wb-blue')!.addEventListener('click', async () => {
    const btn = body.querySelector('#of-jb-wb-blue') as HTMLButtonElement;
    const stateEl = body.querySelector('#of-jb-wb-state') as HTMLElement;
    btn.disabled = true;
    stateEl.textContent = '正在应用全蓝灯…';
    const r = await applyWorldbookAcademy();
    btn.disabled = false;
    if (r.ok) {
      stateEl.textContent = `已应用全蓝灯。${r.summary ?? ''}`;
      toastr?.success?.('世界书已全部设为蓝灯');
      advance();
    } else {
      stateEl.textContent = `应用失败：${r.error}（可重试或选「不变」跳过）`;
    }
  });
  body.querySelector('#of-jb-wb-keep')!.addEventListener('click', () => {
    toastr?.info?.('已选择「不变」，保持当前世界书状态');
    advance();
  });
}

// ── 第 3 步：主角性别 ──
function renderStep3(body: HTMLElement): void {
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">选择主角性别</div>
      <div class="of-grid2">
        <button class="of-path-card" data-gender="男"><div class="of-path-title">♂ 男</div><div class="of-path-desc">${JIANBANDAI.maleDesc.replace(/\n/g, '<br>')}</div></button>
        <button class="of-path-card" data-gender="女"><div class="of-path-title">♀ 女</div><div class="of-path-desc">${JIANBANDAI.femaleDesc.replace(/\n/g, '<br>')}</div></button>
      </div>
      <button class="of-btn of-btn-ok" id="of-jb-gender-ok" style="margin-top:12px" disabled>确认性别并继续</button>
    </div>`;

  let picked = state?.gender ?? '';
  if (picked) (body.querySelector(`[data-gender="${picked}"]`) as HTMLElement)?.classList.add('active');
  const okBtn = body.querySelector('#of-jb-gender-ok') as HTMLButtonElement;
  if (picked) okBtn.disabled = false;

  body.querySelectorAll('[data-gender]').forEach(card => {
    card.addEventListener('click', () => {
      body.querySelectorAll('[data-gender]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      picked = card.getAttribute('data-gender')!;
      okBtn.disabled = false;
    });
  });

  okBtn.addEventListener('click', () => {
    if (!picked) return;
    state = { gender: picked, opening: state?.opening ?? '' };
    setChatVar(NS, state);
    step = 3;
    rerenderRoot(body);
  });
}

// ── 第 4 步：开场白 ──
function renderStep4(body: HTMLElement): void {
  const presetText = JIANBANDAI.openings[(state!.gender === '女' ? '女' : '男') as '男' | '女'] ?? '';
  if (!state!.opening) state!.opening = presetText;
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白（预设已填入，可直接修改）</div>
      <textarea class="of-textarea" id="of-jb-opening" rows="12" style="min-height:220px">${state!.opening.replace(/</g, '&lt;')}</textarea>
      <div class="of-hint" style="margin-top:6px">{{user}} 宏在注入第 0 楼后由酒馆自动替换。注入会覆盖第 0 楼现有内容。</div>
      <div style="display:flex;gap:8px;margin-top:10px">
        <button class="of-btn of-btn-ghost" id="of-jb-opening-reset">恢复默认开场白</button>
        <button class="of-btn of-btn-ok" id="of-jb-opening-ok" style="margin-left:auto">确认开场白</button>
      </div>
    </div>`;

  const ta = body.querySelector('#of-jb-opening') as HTMLTextAreaElement;
  ta.addEventListener('input', () => {
    state!.opening = ta.value;
    setChatVar(NS, state!);
  });
  body.querySelector('#of-jb-opening-reset')!.addEventListener('click', () => {
    ta.value = presetText;
    state!.opening = presetText;
    setChatVar(NS, state!);
  });
  body.querySelector('#of-jb-opening-ok')!.addEventListener('click', () => {
    const text = ta.value.trim();
    if (!text) { toastr?.warning?.('开场白为空'); return; }
    state!.opening = text;
    setChatVar(NS, state!);
    step = 4;
    rerenderRoot(body);
  });
}

// ── 第 5 步：确认并注入第 0 楼 ──
function renderStep5(body: HTMLElement): void {
  body.innerHTML = `<div class="of-card">
      <div class="of-h2" style="font-size:13px">确认信息</div>
      <div class="of-hint">路线：学院线 ｜ 主角性别：${state!.gender || '男'} ｜ 陆安追踪表已写入（表格数据页可查看/修改）。</div>
    </div>
    <div class="of-card">
      <div class="of-h2" style="font-size:13px">开场白预览</div>
      <div style="white-space:pre-wrap;font-size:13px;line-height:1.8;max-height:260px;overflow-y:auto" id="of-jb-final-preview"></div>
      <button class="of-btn of-btn-ghost of-btn-sm" id="of-jb-back" style="margin-top:8px">← 返回修改开场白</button>
    </div>
    <button class="of-btn of-btn-ok" id="of-jb-start" style="margin-top:12px">注入第 0 楼并开始游戏</button>
    <div class="of-hint" id="of-jb-start-state" style="margin-top:6px"></div>`;

  (body.querySelector('#of-jb-final-preview') as HTMLElement).textContent = state!.opening;
  body.querySelector('#of-jb-back')!.addEventListener('click', () => { step = 3; rerenderRoot(body); });

  const startBtn = body.querySelector('#of-jb-start') as HTMLButtonElement;
  const stateEl = body.querySelector('#of-jb-start-state') as HTMLElement;
  startBtn.addEventListener('click', async () => {
    startBtn.disabled = true;
    stateEl.textContent = '正在注入第 0 楼…';
    try {
      await injectOpeningToFloor0(state!.opening);
      stateEl.textContent = '已写入第 0 楼！进度已清除，可以开始游戏了。';
      toastr?.success?.('开场白已注入第 0 楼，游戏开始！');
      // 开局完成：同步一次楼层变量（第 0 楼刚生成，快照落在第 0 楼）
      void syncToLastFloor();
      state = null;
      setChatVar(NS, null);
      step = 0;
      startBtn.textContent = '已完成 ✓';
    } catch (e) {
      stateEl.textContent = `注入失败：${(e as Error).message}`;
      startBtn.disabled = false;
    }
  });
}
