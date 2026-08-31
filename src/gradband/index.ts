// gradband/index.ts — 渐变带·自由回路 业务中枢（挂进开局框架面板）
//
// 职责：启动/停止回合调度、快照同步、注入开局标记到最新楼。
// 状态栏/开局面板 HTML 只由 build 产出（dist/状态栏面板.html、dist/开局界面.html），
// 玩家手动导入酒馆正则；本模块不再自动注册正则、也不内联任何 HTML 源码。
import { loadSettings } from './core/settings';
import { startScheduler, stopScheduler, manualTurn } from './pipeline/scheduler';
import { syncSnapshot } from './core/store';
import { setChatMessages, getChatMessages, getLastMessageId } from '../bridge/tavern';

export const STATUS_MARKER = '<StatusPlaceHolderImpl/>';
export const OPENING_MARKER = '<渐变带开局/>';

/** 把开局面板标记注入最新楼（工具页按钮 / 开局完成时） */
export async function injectOpeningToLatest(): Promise<void> {
  const id = getLastMessageId();
  const msgs = getChatMessages(id);
  const msg = msgs?.[0];
  if (!msg) return;
  if ((msg.message || '').includes(OPENING_MARKER)) return;
  await setChatMessages([{ message_id: id, message: msg.message + '\n' + OPENING_MARKER }], { refresh: 'affected' });
}

export interface GradbandApi {
  start(): void;
  stop(): void;
  manualTurn: typeof manualTurn;
  syncSnapshot: () => Promise<unknown>;
  injectOpeningToLatest: typeof injectOpeningToLatest;
}

let started = false;

/** 初始化：按设置启动调度（HTML 由玩家手动导入正则，本模块不内联/不自动注册） */
export async function initGradband(): Promise<void> {
  if (started) return;
  started = true;
  loadSettings();
  startScheduler();
  console.info('[渐变带·自由回路] 已随开局框架启动（⚡ 在「渐变带」页操作）');
}

/** 销毁：停止调度（开局框架 destroy 时调用） */
export function destroyGradband(): void {
  stopScheduler();
  started = false;
}

export const gradbandApi: GradbandApi = {
  start: () => startScheduler(),
  stop: () => stopScheduler(),
  manualTurn,
  syncSnapshot: () => syncSnapshot(loadGameSafe()),
  injectOpeningToLatest,
};

import { loadGame } from './core/store';
function loadGameSafe(): any { try { return loadGame(); } catch { return null; } }
