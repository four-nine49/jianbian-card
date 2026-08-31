// chat/guided-chat-adapter.ts — 对话引擎版 ChatAdapter（开局引导）
//
// 引导对话是**独立会话**：历史存聊天变量 __of_dialogue__.history，
// 不读写酒馆楼层、不掺酒馆本身的聊天记录（面板对话页只显示这个会话）。
// 上下文用 generateRaw + ordered_prompts 完全自控（规则表 100% 注入）：
//   规则文本 + 进度注入 + 本会话最近 N 条历史，除此之外什么都不发。
// 生成后分析：提 [台账] 行、推进七步状态机、检测结算块 → 自动落地。
import { generateRaw, stopGenerationById, onStreamFullText } from '../bridge/tavern';
import type { ChatMessage } from '../bridge/tavern';

import type { ChatAdapter } from './chat-adapter';
import {
  loadDialogueState, saveDialogueState, buildProgressHint, advanceTo, recordLedger, markSettled,
  STEP_NAMES,
} from '../dialogue/state-machine';
import type { DialogueMessage, DialogueState } from '../dialogue/state-machine';
import { extractSettlementBlock, parseAndValidate } from '../dialogue/settlement-parser';
import { applySettlement } from '../dialogue/apply-settlement';
import { syncToLastFloor } from '../sync/message-sync';
import type { ResolvedPackage } from '../dialogue/rule-package';

export interface GuidedAdapterOptions {
  rulesText: string;
  /** 当前规则包：结算块标记 / 必填键 / 落地表格 / 种子行都来自它 */
  pkg: ResolvedPackage;
  /** 自定义 API 载荷（generateRaw 的 custom_api）；不传 = 跟随酒馆当前 API */
  customApi?: Record<string, any>;
  /** 发给 AI 的最大历史条数（1 条 = 一条消息，约 2 条一轮） */
  maxHistoryEntries?: number;
  /** 结算落地成功回调 */
  onSettled?: (result: { packageName: string; rows: number }) => void;
  /** 结算失败回调 */
  onSettleError?: (error: string) => void;
}

// [台账] 正则：规则表第 6 节固定格式
const LEDGER_RE = /\[台账\][\s\S]*?(?=$|\n|【)/;
// 步骤推进正则：`下一步：第 N 步·步骤名`
const NEXT_STEP_RE = /下一步\s*[:：]\s*第\s*(\d+)\s*步/i;

export function guidedChatAdapter(opts: GuidedAdapterOptions): ChatAdapter {
  const maxEntries = opts.maxHistoryEntries ?? 20;
  const subscribers = new Set<() => void>();
  const streamSubscribers = new Set<(partial: string) => void>();
  let activeGenerationId: string | null = null; // 当前流式生成的 id（stop 用）
  let stopRequested = false;                    // 用户主动停止标记（区别于报错）

  function notify(): void {
    subscribers.forEach(cb => { try { cb(); } catch { /* 忽略 */ } });
  }

  function emitStream(partial: string): void {
    streamSubscribers.forEach(cb => { try { cb(partial); } catch { /* 忽略 */ } });
  }

  /** 停止当前生成（ChatAdapter.stop） */
  function stop(): boolean {
    if (!activeGenerationId) return false;
    stopRequested = true;
    try { return stopGenerationById(activeGenerationId); } catch { return false; }
  }

  function toChatMessages(history: DialogueMessage[]): ChatMessage[] {
    return history.map((m, i) => ({
      message_id: i,
      name: m.role === 'user' ? '玩家' : 'AI',
      role: m.role,
      is_user: m.role === 'user',
      message: m.content,
    }));
  }

  function analyzeReply(text: string, state: DialogueState): void {
    if (state.status === 'settled') return;

    // 1. 台账行
    const ledgerMatch = text.match(LEDGER_RE);
    if (ledgerMatch) recordLedger(ledgerMatch[0].trim());

    // 2. 步骤推进（只前进不后退；回退由玩家说"回到第 X 步"触发）
    const stepMatch = text.match(NEXT_STEP_RE);
    if (stepMatch) {
      const n = parseInt(stepMatch[1], 10);
      if (n >= 0 && n <= 7 && n > state.currentStep) {
        advanceTo(n as typeof state.currentStep);
      }
    }

    // 3. 结算检测（优先级最高；标记/必填键/落地表格全部来自当前规则包）
    if (extractSettlementBlock(text, opts.pkg.settlementStartMark, opts.pkg.settlementEndMark)) {
      const result = parseAndValidate(text, {
        startMark: opts.pkg.settlementStartMark,
        endMark: opts.pkg.settlementEndMark,
        requiredKeys: opts.pkg.requiredKeys,
      });
      if (result.ok && result.settlement) {
        const applied = applySettlement(result.settlement, opts.pkg);
        if (applied.ok) {
          markSettled(result.settlement.raw);
          opts.onSettled?.({ packageName: applied.packageName, rows: applied.rowsSeeded });
          toastr?.success?.(`开局结算已落地：${applied.packageName}（${applied.sheetsImported} 张表，${applied.rowsSeeded} 行数据）`);
          // AI 自定义开局完成：立即同步一次楼层变量（无条件，状态栏马上有数据）
          void syncToLastFloor();
        } else {
          opts.onSettleError?.(applied.error || '落地失败');
          toastr?.error?.('结算解析成功但落地失败：' + (applied.error || '未知错误'));
        }
      } else {
        opts.onSettleError?.(result.error || '结算校验失败');
        toastr?.error?.('结算块校验失败：' + (result.error || '未知错误'));
      }
    }
  }

  // 玩家消息里的"回到第 X 步 / 改模式"处理
  function handleUserIntent(text: string): void {
    const state = loadDialogueState();
    if (state.status === 'settled') return;
    const back = text.match(/回到第\s*(\d+)\s*步/);
    if (back) {
      const n = parseInt(back[1], 10);
      if (n >= 0 && n <= 7 && n < state.currentStep) {
        advanceTo(n as typeof state.currentStep);
        toastr?.info?.(`已回到第 ${n} 步（${STEP_NAMES[n]}）`);
        return;
      }
    }
    if (/改模式|换模式/.test(text)) {
      toastr?.warning?.('模式选定后不可更改，建议重新开局');
    }
  }

  /** 核心：按会话历史末尾的玩家消息生成 AI 回复并落历史（流式：边生成边推给面板） */
  async function generateFromHistory(): Promise<void> {
    const state = loadDialogueState();
    const history = state.history;
    const lastUser = [...history].reverse().find(m => m.role === 'user');
    if (!lastUser) throw new Error('会话历史里没有玩家消息');

    const progressHint = buildProgressHint();
    const orderedPrompts: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
      { role: 'system', content: opts.rulesText },
      ...(progressHint ? [{ role: 'system' as const, content: progressHint }] : []),
      ...history.slice(-maxEntries).map(m => ({ role: m.role, content: m.content })),
    ];

    stopRequested = false;
    activeGenerationId = `of_chat_${Date.now()}`;
    const unsubStream = onStreamFullText(activeGenerationId, (full) => emitStream(full));
    try {
      const result = await generateRaw({
        ordered_prompts: orderedPrompts,
        should_stream: true,             // 流式：token 经 js_stream_token_received_fully 推给面板
        should_silence: true,
        generation_id: activeGenerationId,
        ...(opts.customApi ? { custom_api: opts.customApi } : {}),
      });
      const finalText = typeof result === 'string' ? result : (result as any)?.content || '';
      if (!finalText) throw new Error('AI 返回为空');

      // AI 回复落会话历史
      const cur = loadDialogueState();
      cur.history.push({ role: 'assistant', content: finalText });
      saveDialogueState(cur);
      notify();
      analyzeReply(finalText, cur);
    } finally {
      unsubStream.stop();
      activeGenerationId = null;
    }
  }

  return {
    read(): ChatMessage[] {
      return toChatMessages(loadDialogueState().history);
    },

    async sendMessage(text: string): Promise<void> {
      const content = text.trim();
      if (!content) return;
      handleUserIntent(content);

      // 玩家消息落会话历史
      const state = loadDialogueState();
      state.history.push({ role: 'user', content });
      if (state.status === 'idle') state.status = 'in_progress';
      saveDialogueState(state);
      notify();

      try {
        await generateFromHistory();
      } catch (e) {
        // 用户主动停止：保留玩家消息（可继续追问或重发），不报错
        if (stopRequested) {
          toastr?.info?.('已停止生成（这条消息已保留，可继续补充发送）');
          return;
        }
        // 生成失败：回滚玩家消息（失败不落盘），提示后可重发
        const cur = loadDialogueState();
        if (cur.history.length > 0 && cur.history[cur.history.length - 1].role === 'user') {
          cur.history.pop();
          saveDialogueState(cur);
          notify();
        }
        console.error('[开局对话] 生成失败', e);
        toastr?.error?.('对话生成失败：' + (e as Error).message);
      }
    },

    async reroll(messageId: number): Promise<void> {
      const state = loadDialogueState();
      const last = state.history[state.history.length - 1];
      if (!last || last.role !== 'assistant' || messageId !== state.history.length - 1) {
        toastr?.warning?.('只能重新生成最后一条 AI 回复');
        return;
      }
      // 移除这条 AI 回复后重新生成（玩家消息保留）
      state.history.pop();
      saveDialogueState(state);
      notify();
      try {
        await generateFromHistory();
      } catch (e) {
        if (stopRequested) {
          toastr?.info?.('已停止生成（旧回复已移除，可再次点重新生成）');
          return;
        }
        console.error('[开局对话] 重新生成失败', e);
        toastr?.error?.('重新生成失败：' + (e as Error).message);
      }
    },

    async delete(messageId: number): Promise<void> {
      const state = loadDialogueState();
      if (messageId < 0 || messageId >= state.history.length) return;
      state.history.splice(messageId, 1);
      saveDialogueState(state);
      notify();
    },

    onMessagesChanged(cb: () => void): () => void {
      subscribers.add(cb);
      return () => { subscribers.delete(cb); };
    },

    stop,

    onStreamUpdate(cb: (partial: string) => void): () => void {
      streamSubscribers.add(cb);
      return () => { streamSubscribers.delete(cb); };
    },
  };
}

export { guidedChatAdapter as createGuidedAdapter };
