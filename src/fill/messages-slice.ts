// fill/messages-slice.ts — 取最近 N 轮对话 + 标签过滤 + 拼成文本
//
// "1 轮" = 用户发送 + AI 回复。从聊天末尾往前数：每遇到一条用户消息记一轮，
// 末尾还没被用户消息接上的连续 AI 回复也归属最新一轮。
// 依赖：bridge/tavern（getChatMessages）
import { getChatMessages } from '../bridge/tavern';

import { applyContextTagFilters } from './context-filter';
import { GlobalDefaults } from '../store/types';

export interface MessagesTextOpts {
  contextRounds: number;       // 读取最近几轮对话（1 轮 = 用户发送 + AI 回复）
  skipFloors: number;          // 跳过最近 N 楼
  extractTags?: string;
  extractRules?: { start: string; end: string }[];
  excludeTags?: string;
  excludeRules?: { start: string; end: string }[];
}

/** 取最近 contextRounds 轮对话（跳过末尾 skipFloors 楼），过滤标签后拼成 "名字: 内容" 文本 */
export function buildMessagesText(opts: MessagesTextOpts): string {
  const { contextRounds, skipFloors, extractTags, extractRules, excludeTags, excludeRules } = opts;
  if (contextRounds <= 0) return '(无最新对话内容)';

  const all = getChatMessages('0-{{lastMessageId}}');
  if (!all || all.length === 0) return '(无最新对话内容)';

  // 先丢掉末尾 skipFloors 楼（刚生成还没读完的）
  const kept = skipFloors > 0 ? all.slice(0, -skipFloors) : all;
  if (kept.length === 0) return '(无最新对话内容)';

  // 从末尾往前数轮：遇到用户消息记一轮，数满 contextRounds 轮为止；
  // 末尾连续的 AI 回复（还没有用户消息接上）归属最新一轮
  const picked = [];
  let roundsSeen = 0;
  for (let i = kept.length - 1; i >= 0; i--) {
    const m = kept[i];
    if (m.is_user) {
      roundsSeen++;
      if (roundsSeen > contextRounds) break;
    }
    picked.push(m);
  }
  const final = picked.reverse();
  if (final.length === 0) return '(无最新对话内容)';

  const userName = getUserNameSafe();
  const lines = final.map(m => {
    const prefix = m.is_user ? userName : (m.name || '角色');
    let content = m.message || '';
    // 标签过滤只对 AI 楼（和 ACU 一致），用户楼不过滤
    if (!m.is_user && (extractTags || (extractRules && extractRules.length) || excludeTags || (excludeRules && excludeRules.length))) {
      content = applyContextTagFilters(content, { extractTags, extractRules, excludeTags, excludeRules });
    }
    return `${prefix}: ${content}`;
  });
  return lines.join('\n');
}

/** 原始最近对话文本（不做标签过滤；给世界书绿灯关键词扫描用） */
export function buildRawRecentText(rounds: number): string {
  if (rounds <= 0) return '';
  const all = getChatMessages('0-{{lastMessageId}}');
  if (!all || all.length === 0) return '';
  const picked = [];
  let seen = 0;
  for (let i = all.length - 1; i >= 0; i--) {
    if (all[i].is_user) { seen++; if (seen > rounds) break; }
    picked.push(all[i]);
  }
  return picked.reverse().map(m => m.message || '').join('\n');
}

/** 兼容：从 settings.globalDefaults 生成 MessagesTextOpts（单表可覆盖） */
export function optsFromGlobalDefaults(g: GlobalDefaults, overrides: Partial<MessagesTextOpts> = {}): MessagesTextOpts {
  return {
    contextRounds: g.contextRounds,
    skipFloors: g.skipFloors,
    extractTags: g.extractTags,
    excludeTags: g.excludeTags,
    ...overrides,
  };
}

function getUserNameSafe(): string {
  try {
    const name = (SillyTavern as any)?.getContext?.()?.name1 || (window as any).name1 || '用户';
    return String(name || '用户');
  } catch {
    return '用户';
  }
}
