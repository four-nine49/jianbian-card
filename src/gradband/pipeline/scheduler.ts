// pipeline/scheduler.ts — 回合调度：AI回复 → 数据AI → 契约校验 → 结算 → 感情AI → 快照/标记
import { eventOn, getChatMessages, setChatMessages, getLastMessageId, updateVariablesWith } from '../../bridge/tavern';
import { loadSettings, STATUS_MARKER } from '../core/settings';
import { loadGame, saveGame, syncSnapshot } from '../core/store';
import { runDataAI } from './data-ai';
import { runFeelAI } from './feel-ai';
import { settle } from './settle';

const SYNCABLE_TYPES = ['normal', 'regenerate', 'continue', 'swipe'];
let unsub: { stop: () => void } | null = null;
let busy = false;
let aiReplyCount = 0;

export interface 回合报告 { log: string[]; notices: string[]; error?: string }

let lastReport: 回合报告 | null = null;
export function getLastReport(): 回合报告 | null { return lastReport; }

async function appendStatusMarker(floorId: number): Promise<void> {
  const msgs = getChatMessages(floorId);
  const msg = msgs?.[0];
  if (!msg || msg.is_user) return;
  if ((msg.message || '').endsWith(STATUS_MARKER)) return;
  await setChatMessages([{ message_id: floorId, message: msg.message + '\n' + STATUS_MARKER }], { refresh: 'affected' });
}

async function runTurn(): Promise<回合报告> {
  const report: 回合报告 = { log: [], notices: [] };
  const settings = loadSettings();
  let g = loadGame();
  if (!g) { report.error = '未初始化存档（先完成开局）'; return report; }

  // 数据AI + 契约校验 + ⑥结算
  if (settings.开关.自动结算) {
    const res = await runDataAI(g);
    for (const ig of res.忽略的回路) report.notices.push(`回路报告忽略：${ig.回路}×${ig.次数}（${ig.原因}）`);
    if (!res.ok) {
      report.error = res.error;
      report.log.push('⑤ 契约校验拒绝：' + res.error);
      report.log.push('（整包打回。可调整提示词后重试，或手动在工具页结算）');
    } else if (res.pack) {
      const r = settle(g, res.pack);
      report.log.push(...r.log);
      report.notices.push(...r.notices);
    }
  } else {
    report.log.push('（自动结算已关闭）');
  }

  // 感情分析AI（按角色，一个角色一次调用）
  if (settings.开关.感情分析) {
    for (const ch of settings.感情角色) {
      if (!ch.enabled) continue;
      const r = await runFeelAI(g, ch);
      if (r.ok) report.log.push(`感情AI《${ch.名称}》字段已更新`);
      else report.notices.push(`感情AI《${ch.名称}》失败：${r.error}`);
    }
  }

  await saveGame(g);
  await syncSnapshot(g);
  // 结算日志落盘（状态栏「管线」页读取）
  await updateVariablesWith(v => {
    v['渐变带日志'] = { log: report.log, notices: report.notices, error: report.error ?? null, 时间: new Date().toLocaleString() };
    return v;
  }, { type: 'chat' });
  lastReport = report;
  return report;
}

function shouldRun(settings: { 频率: { 数据AI: number; 感情AI: number } }): boolean {
  const n = Math.max(1, Math.round(settings.频率.数据AI || 1));
  aiReplyCount++;
  return aiReplyCount % n === 0 || aiReplyCount === 1 ? true : false;
}

export function startScheduler(): void {
  if (unsub) return;
  unsub = eventOn('message_received', (messageId: number, type: string) => {
    if (!SYNCABLE_TYPES.includes(type)) return;
    if (typeof messageId !== 'number' || messageId < 0) return;
    void (async () => {
      if (busy) return;
      const settings = loadSettings();
      if (!shouldRun(settings)) {
        if (settings.开关.状态栏标记) await appendStatusMarker(messageId);
        return;
      }
      busy = true;
      try {
        console.info('[渐变带] 开始回合结算…');
        await runTurn();
      } catch (e) {
        console.error('[渐变带] 回合结算异常', e);
      } finally {
        if (settings.开关.状态栏标记) await appendStatusMarker(getLastMessageId());
        busy = false;
      }
    })();
  });
  console.info('[渐变带] 回合调度已启动');
}

export function stopScheduler(): void { unsub?.stop(); unsub = null; }

/** 手动触发一次结算（工具页按钮） */
export async function manualTurn(): Promise<回合报告> {
  if (busy) return { log: [], notices: [], error: '上一轮结算尚未完成' };
  busy = true;
  try { return await runTurn(); } finally { busy = false; }
}
