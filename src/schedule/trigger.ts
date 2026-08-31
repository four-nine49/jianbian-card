// schedule/trigger.ts — 填表调度（自动 + 手动）
//
// 自动：监听 tavern_events.MESSAGE_RECEIVED，按每表 updateFrequency 计数触发。
// 手动：手动填表按钮 → 全表填一次。
// 防重入：isFilling 标志。
//
// 依赖：bridge/tavern（eventOn / tavern_events）、全局 toastr（提示）。
import { eventOn, tavern_events } from '../bridge/tavern';

import { loadStore, getSheet, getAllSheets, saveStore, applyOperations } from '../store/table-store';
import { loadSettings } from '../store/settings';
import { buildRequests, groupLabel } from '../fill/prompt-builder';
import { buildRawRecentText } from '../fill/messages-slice';
import { fetchWorldbookText } from '../fill/worldbook';
import { effectiveUpdateConfig } from '../store/types';
import { maybeAutoSyncAfterFill } from '../sync/message-sync';
import { callFillApi } from '../fill/api-call';
import { applyFillResponse, parseFillResponse, preflightOperations } from '../fill/response-parser';
import { FillOperation } from '../store/types';

let isFilling = false;
let aiFloorCount = 0;          // 收到的 AI 楼总数（本局）
let lastFillFloor = -1;        // 上次填表时的 aiFloorCount
let autoFillEvent: { stop: () => void } | null = null;

// ──────────────────────────────────────────────
// 一次填表执行（可指定目标表；不指定=所有 enabled 的表）
// ──────────────────────────────────────────────

export interface RunFillOptions {
  targetSheetKeys?: string[];   // 指定表（uid/name/key）；不传=全部 enabled
  reason?: string;              // 日志原因
}

export async function runFill(opts: RunFillOptions = {}): Promise<{ ok: boolean; applied: number; errors: string[] }> {
  if (isFilling) {
    toastr?.warning?.('正在填表中，请稍候');
    return { ok: false, applied: 0, errors: ['busy'] };
  }
  const store = loadStore();
  let targets = getAllSheets(store).filter(s => s.updateConfig.enabled);
  if (opts.targetSheetKeys && opts.targetSheetKeys.length > 0) {
    targets = opts.targetSheetKeys
      .map(k => getSheet(store, k))
      .filter((s): s is NonNullable<typeof s> => !!s)
      .filter(s => s.updateConfig.enabled);
  }
  if (targets.length === 0) {
    toastr?.info?.('没有需要填写的表');
    return { ok: true, applied: 0, errors: [] };
  }

  const settings = loadSettings();
  if (!settings.autoFillEnabled && !(opts.reason === 'manual')) {
    return { ok: false, applied: 0, errors: ['auto disabled'] };
  }

  isFilling = true;
  const errors: string[] = [];
  let totalApplied = 0;
  const genId = `of_fill_${Date.now()}`;

  try {
    const floorInfo = `AI 回复计数=${aiFloorCount}，上次填表=${lastFillFloor}`;
    // 世界书预取：仅当提示词模板里有启用的 {{worldbook}} 段时才读
    // （全局 + 角色卡 + 聊天绑定的世界书；蓝灯全发、绿灯按最近对话关键词命中）
    const needsWorldbook = settings.promptTemplate.segments.some(seg => seg.enabled && seg.content.includes('{{worldbook}}'));
    const worldbookText = needsWorldbook
      ? await fetchWorldbookText({ matchText: buildRawRecentText(settings.globalDefaults.contextRounds) })
      : '';
    const requests = buildRequests({
      sheets: targets,
      settings,
      floorInfo,
      worldbookText,
      charDescription: '',
      personaDescription: '',
    });

    for (const req of requests) {
      const gLabel = groupLabel(req.group);
      const gTag = encodeURIComponent(req.group || '_');
      const apiOut = await callFillApi({
        orderedPrompts: req.orderedPrompts,
        settings,
        generationId: `${genId}_g${gTag}`,
      });
      if (!apiOut.ok || !apiOut.text) {
        errors.push(`分组[${gLabel}]: ${apiOut.error}`);
        // 重试
        if (settings.maxRetries > 0) {
          const retry = await callFillApi({
            orderedPrompts: req.orderedPrompts,
            settings,
            generationId: `${genId}_g${gTag}_r`,
          });
          if (retry.ok && retry.text) {
            const applied = applyFillResponse(retry.text);
            if (applied.ok) totalApplied += applied.applied;
            else errors.push(`分组[${gLabel}] 重试后应用失败: ${applied.error}`);
          } else {
            errors.push(`分组[${gLabel}] 重试失败: ${retry.error}`);
          }
        }
        continue;
      }
      const applied = applyFillResponse(apiOut.text);
      if (applied.ok) {
        totalApplied += applied.applied;
        console.info(`[开局框架] 分组[${gLabel}] 完成（${req.sheets.length} 张表，读取 ${req.contextRounds} 轮）`);
      } else {
        errors.push(`分组[${gLabel}] 应用失败: ${applied.error}`);
      }
    }

    lastFillFloor = aiFloorCount;
    // 自动同步开着时：填表刚更新完表格，此刻同步到最新楼最准
    void maybeAutoSyncAfterFill();
    if (errors.length === 0) toastr?.success?.(`填表完成，应用 ${totalApplied} 条操作`);
    else toastr?.warning?.(`填表完成（${errors.length} 个错误）`);
    console.info('[开局框架] runFill 完成', { applied: totalApplied, errors, reason: opts.reason });
    return { ok: errors.length === 0, applied: totalApplied, errors };
  } catch (e) {
    const msg = (e as Error).message;
    errors.push(msg);
    console.error('[开局框架] runFill 异常:', e);
    return { ok: false, applied: totalApplied, errors };
  } finally {
    isFilling = false;
  }
}

export function isBusy(): boolean {
  return isFilling;
}

// ──────────────────────────────────────────────
// 自动调度
// ──────────────────────────────────────────────

/** 启动自动填表监听 */
export function startAutoFill(): void {
  if (autoFillEvent) return;
  autoFillEvent = eventOn(tavern_events.MESSAGE_RECEIVED, (_id: number, type: string) => {
    // 只对正常 AI 回复计数（排除 quiet/extension 等）
    if (type === 'normal' || type === 'regenerate' || type === 'continue' || type === 'swipe') {
      aiFloorCount += 1;
      const settings = loadSettings();
      const store = loadStore();
      // 频率/跳楼按"生效参数"判断（a 档表 = 全局默认）
      const due = getAllSheets(store).filter(s => {
        if (!s.updateConfig.enabled) return false;
        const eff = effectiveUpdateConfig(s, settings.globalDefaults);
        const freq = Math.max(1, eff.updateFrequency || 1);
        return aiFloorCount % freq === 0;
      });
      if (due.length === 0) return;
      // skipFloors：距上次填表不足的不触发（简化：用 aiFloorCount - lastFillFloor）
      const sinceLast = aiFloorCount - lastFillFloor;
      const minSkip = Math.max(0, ...due.map(s => effectiveUpdateConfig(s, settings.globalDefaults).skipFloors || 0));
      if (sinceLast < minSkip) return;
      void runFill({ targetSheetKeys: due.map(s => s.uid), reason: 'auto' });
    }
  });
  console.info('[开局框架] 自动填表已启动');
}

/** 停止自动填表监听 */
export function stopAutoFill(): void {
  if (autoFillEvent) { autoFillEvent.stop(); autoFillEvent = null; }
}

/** 重置楼层计数（换聊天时调） */
export function resetFloorCount(): void {
  aiFloorCount = 0;
  lastFillFloor = -1;
}
