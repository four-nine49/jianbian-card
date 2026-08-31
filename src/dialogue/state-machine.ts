// dialogue/state-machine.ts — 开局引导七步状态机
//
// 依据《自定义开局AI规则表》第 3 节流程 + 第 9 节异常处理：
//   步骤 0~7（7 是终审与结算），一次只推进一步，可回退（点数全额退回语义交给 AI 表述）。
// 状态存 chat 变量（跟聊天走，换聊天/重启后重开同一聊天可恢复）。
//
// 状态机是引导对话的"进度记忆"，实际判价/引导全由 AI（规则表）负责，
// 这里只做：当前步 / 已选项摘要 / 最近台账 / 结算状态 / 进度提示文本生成。
import { getVariables, updateVariablesWith } from '../bridge/tavern';

const NAMESPACE = '__of_dialogue__';

export const STEP_NAMES = [
  '选模式', '魔法路线', '种族与属性', '金手指', '技能与凭证', '身份资产资金', '女主/同伴', '终审与结算',
] as const;

export type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export interface DialogueMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface DialogueState {
  currentStep: Step;          // 当前步（0~7）
  selections: string[];       // 每步已选项摘要（长度 8，未到步为空）
  ledger: string;             // 最近一轮 [台账] 行（供上下文注入）
  status: 'idle' | 'in_progress' | 'settled';
  settledText?: string;       // 已产生的结算块原文
  settledAt?: number;
  history: DialogueMessage[]; // 引导对话自己的历史（与酒馆楼层无关，随聊天持久化）
}

const DEFAULT_STATE: DialogueState = {
  currentStep: 0,
  selections: [],
  ledger: '',
  status: 'idle',
  history: [],
};

/** 校验一条历史消息（宽松：非对象/缺字段的丢弃） */
function sanitizeHistory(raw: unknown): DialogueMessage[] {
  if (!Array.isArray(raw)) return [];
  const out: DialogueMessage[] = [];
  for (const m of raw) {
    if (m && typeof m === 'object'
      && typeof (m as any).content === 'string'
      && ((m as any).role === 'user' || (m as any).role === 'assistant')) {
      out.push({ role: (m as any).role, content: (m as any).content });
    }
  }
  return out.slice(-200); // 防止聊天变量无限膨胀
}

export function loadDialogueState(): DialogueState {
  try {
    const all = getVariables({ type: 'chat' });
    const raw = all?.[NAMESPACE];
    if (!raw) return structuredClone(DEFAULT_STATE);
    // 轻量校验（不引入 zod，避免重）
    const s = typeof raw === 'object' && raw !== null ? raw as DialogueState : null;
    if (!s || typeof s.currentStep !== 'number' || !['idle', 'in_progress', 'settled'].includes(s.status)) {
      return structuredClone(DEFAULT_STATE);
    }
    return {
      currentStep: s.currentStep as Step,
      selections: Array.isArray(s.selections) ? s.selections : [],
      ledger: s.ledger || '',
      status: s.status,
      settledText: s.settledText,
      settledAt: s.settledAt,
      history: sanitizeHistory((s as any).history),
    };
  } catch (e) {
    console.warn('[开局对话] 读取对话状态失败', e);
    return structuredClone(DEFAULT_STATE);
  }
}

export function saveDialogueState(s: DialogueState): void {
  updateVariablesWith(v => {
    v[NAMESPACE] = structuredClone(s);
    return v;
  }, { type: 'chat' });
}

/** 玩家选完一步后推进（由规则提示的下一步），丢弃后面所有步的已选项 */
export function advanceTo(step: Step, state: DialogueState = loadDialogueState()): DialogueState {
  const next: DialogueState = {
    ...state,
    currentStep: step,
    // 丢弃 step 之后的所有已选项（回退重选语义）
    selections: state.selections.slice(0, step),
  };
  if (step === 0) next.status = 'in_progress';
  saveDialogueState(next);
  return next;
}

/** 回退到第 X 步（玩家说"回到第 X 步"） */
export function goBackTo(step: Step): DialogueState {
  return advanceTo(step);
}

/** 记录某步已选项摘要（文案来自 AI 回复中的明确表态，脚本只存摘要） */
export function recordSelection(step: Step, summary: string, state: DialogueState = loadDialogueState()): DialogueState {
  const selections = state.selections.slice();
  selections[step] = summary;
  const next = { ...state, selections };
  saveDialogueState(next);
  return next;
}

/** 记录最近台账行 */
export function recordLedger(ledger: string, state: DialogueState = loadDialogueState()): DialogueState {
  const next = { ...state, ledger };
  saveDialogueState(next);
  return next;
}

/** 标记已结算（结算块解析成功并落地后调用） */
export function markSettled(settledText: string, state: DialogueState = loadDialogueState()): DialogueState {
  const next: DialogueState = {
    ...state,
    status: 'settled',
    settledText,
    settledAt: Date.now(),
  };
  saveDialogueState(next);
  return next;
}

/** 重置（换聊天 / 重开一局） */
export function resetDialogue(): void {
  saveDialogueState({ ...DEFAULT_STATE });
}

// ──────────────────────────────────────────────
// 进度提示文本（注入对话上下文的第三段）
// ──────────────────────────────────────────────

/** 生成"当前进度"注入文本：步名 + 已选项 + 最近台账 */
export function buildProgressHint(state: DialogueState = loadDialogueState()): string {
  const lines: string[] = [];
  lines.push(`【对话进度】当前步骤：第 ${state.currentStep} 步·${STEP_NAMES[state.currentStep] ?? ''}`);
  const done = state.selections
    .map((sel, i) => sel ? `第${i}步(${STEP_NAMES[i]})：${sel}` : null)
    .filter(Boolean);
  if (done.length > 0) lines.push('已确认选项：\n' + done.join('\n'));
  if (state.ledger) lines.push(`最近台账：${state.ledger}`);
  lines.push('【引导要求】一次只推进一个问题；玩家说"回到第 X 步"时按规则表第 9 节处理。');
  return lines.join('\n');
}

// 供面板/调试读状态
export function readStateForPanel(): DialogueState {
  return loadDialogueState();
}