// ui/pages/chat.ts — AI 对话页：开局引导的独立会话（流式渲染 + 可停止）
import { uiState, refreshMessages, getGuidedEngine } from '../state';
import { getPresetState } from '../../preset/preset-store';
import { injectOpeningToFloor0 } from '../../preset/preset-apply';
import { syncToLastFloor } from '../../sync/message-sync';

export function renderChatPage(el: HTMLElement): void {
  const adapter = getGuidedEngine();
  refreshMessages(adapter);
  el.innerHTML = `
    <div style="display:flex;flex-direction:column;height:100%">
      <div class="of-hint" style="padding:6px 12px 0">独立引导会话：只显示开局引导的对话，与酒馆聊天记录互不相干；历史随当前聊天保存。</div>
      <div id="of-chat-list" style="flex:1;overflow-y:auto;padding:12px"></div>
      <div style="border-top:1px solid #313244;padding:8px;display:flex;gap:8px">
        <button class="of-btn of-btn-ghost of-btn-sm" id="of-chat-preset" title="把「原预设开局」生成的开场白直接写入第 0 楼">开场白注入</button>
        <textarea id="of-chat-input" class="of-textarea" rows="2" placeholder="和引导 AI 对话，回车发送…（说「回到第 X 步」可回退）" style="flex:1;resize:none"></textarea>
        <button class="of-btn of-btn-danger" id="of-chat-stop" title="中断生成（已发送的消息会保留）" style="display:none">停止</button>
        <button class="of-btn" id="of-chat-send">发送</button>
      </div>
    </div>
  `;
  const listEl = el.querySelector('#of-chat-list') as HTMLElement;
  const inputEl = el.querySelector('#of-chat-input') as HTMLTextAreaElement;
  const sendBtn = el.querySelector('#of-chat-send') as HTMLButtonElement;
  const stopBtn = el.querySelector('#of-chat-stop') as HTMLButtonElement;

  function setBusy(busy: boolean): void {
    uiState.isGenerating = busy;
    sendBtn.disabled = busy;
    stopBtn.style.display = busy ? '' : 'none';
  }

  function renderList() {
    const msgs = uiState.messages;
    if (msgs.length === 0) {
      listEl.innerHTML = `<div style="text-align:center;color:#6c7086;margin-top:32px;font-size:13px">（还没有引导对话。发一句话开始，或回「开局」页选其他开局方式。）</div>`;
      return;
    }
    listEl.innerHTML = msgs.map(m => {
      const esc = (m.message || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const isUser = m.is_user;
      const cls = isUser ? 'of-msg-user' : 'of-msg-ai';
      const name = isUser ? '玩家' : '引导 AI';
      const actions = isUser
        ? `<button class="of-btn of-btn-ghost of-btn-sm" data-del="${m.message_id}">删</button>`
        : `<button class="of-btn of-btn-ghost of-btn-sm" data-reroll="${m.message_id}" ${uiState.isGenerating ? 'disabled' : ''}>重新生成</button> <button class="of-btn of-btn-ghost of-btn-sm" data-del="${m.message_id}">删</button>`;
      return `<div class="of-msg ${cls}"><div class="of-msg-head"><span class="of-msg-name">${name} · #${m.message_id}</span><span class="of-msg-actions">${actions}</span></div><div style="font-family:ui-monospace,monospace">${esc}</div></div>`;
    }).join('');
    listEl.scrollTop = listEl.scrollHeight;
  }
  renderList();

  // ── 流式气泡：生成中的 AI 回复实时渲染（不整页重绘，直接改文本）──
  let streamEl: HTMLElement | null = null;
  function removeStreamBubble(): void {
    streamEl?.remove();
    streamEl = null;
  }
  const unsubStream = adapter.onStreamUpdate?.((partial) => {
    if (!streamEl) {
      streamEl = document.createElement('div');
      streamEl.className = 'of-msg of-msg-ai of-streaming';
      streamEl.innerHTML = `<div class="of-msg-head"><span class="of-msg-name">引导 AI · 生成中…</span></div><div class="of-stream-text" style="font-family:ui-monospace,monospace;white-space:pre-wrap;word-break:break-word"></div>`;
      listEl.appendChild(streamEl);
    }
    const textEl = streamEl.querySelector('.of-stream-text') as HTMLElement;
    textEl.textContent = partial || '…';
    listEl.scrollTop = listEl.scrollHeight;
  });

  // ── 停止 ──
  stopBtn.addEventListener('click', () => {
    if (!adapter.stop?.()) toastr?.warning?.('当前没有可停止的生成');
  });

  // ── 开场白注入（原预设开局生成的开场白 → 直接写第 0 楼）──
  el.querySelector('#of-chat-preset')!.addEventListener('click', async () => {
    const st = getPresetState();
    if (!st?.opening?.trim()) {
      toastr?.warning?.('还没有预设开场白：请先到「原预设开局」面板走一遍流程生成');
      return;
    }
    if (!confirm(`把「${st.character}」（${st.gender || '男'}）线的开场白写入第 0 楼？\n（会覆盖第 0 楼现有内容，{{user}} 宏由酒馆自动替换）`)) return;
    try {
      await injectOpeningToFloor0(st.opening);
      toastr?.success?.('开场白已注入第 0 楼');
      // 选完开局：立即同步一次楼层变量（无条件，状态栏马上有数据）
      void syncToLastFloor();
    } catch (e) {
      toastr?.error?.('注入失败：' + (e as Error).message);
    }
  });

  // 事件委托
  listEl.addEventListener('click', async (e) => {
    const t = e.target as HTMLElement;
    const rerollBtn = t.closest('[data-reroll]');
    const delBtn = t.closest('[data-del]');
    if (rerollBtn) {
      setBusy(true);
      try { await adapter.reroll(parseInt(rerollBtn.getAttribute('data-reroll')!, 10)); }
      finally { setBusy(false); removeStreamBubble(); refreshMessages(adapter); renderList(); }
    } else if (delBtn) {
      const id = parseInt(delBtn.getAttribute('data-del')!, 10);
      if (!confirm('删除这条消息？（只删引导会话里的，不影响酒馆楼层）')) return;
      await adapter.delete(id);
      refreshMessages(adapter); renderList();
    }
  });

  async function send() {
    const text = inputEl.value.trim();
    if (!text || uiState.isGenerating) return;
    inputEl.value = '';
    setBusy(true);
    try { await adapter.sendMessage(text); }
    finally { setBusy(false); removeStreamBubble(); refreshMessages(adapter); renderList(); }
  }
  sendBtn.addEventListener('click', () => { void send(); });
  inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); void send(); } });

  // 会话内消息变化（发送/重roll/删除）自动刷新；切页时由 app.ts 调 _ofDispose 清理
  const unsub = adapter.onMessagesChanged(() => { refreshMessages(adapter); renderList(); });
  (el as any)._ofDispose = () => { unsub(); unsubStream?.(); };
}
