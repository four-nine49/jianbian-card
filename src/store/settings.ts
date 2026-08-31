// store/settings.ts — 业务设置（填表 API / 全局默认 / 提示词模板 / 调度）
//
// 存 extensionSettings（经 core/settings，指南 五），脚本级全局共享（所有聊天一套发送配置）。
// 旧方案存 TavernHelper script 变量——扩展环境没有真实 script_id，已废弃。
import { loadSettings as loadOfSettings, saveSettingsPatch } from '../core/settings';

import type {
  FrameworkSettings, FillApiConfig, DialogueApiConfig, GlobalDefaults, PromptTemplate, PromptSegment,
} from './types';
import { DEFAULT_PROMPT_SEGMENTS, DEFAULT_INSTRUCTIONS, DEFAULT_PROMPT_TEMPLATE } from './prompt-defaults';

// ──────────────────────────────────────────────
// 读写
// ──────────────────────────────────────────────

/** 读业务设置（core/settings 已做 zod 校验 + 默认兜底） */
export function loadSettings(): FrameworkSettings {
  const s = loadOfSettings();
  return {
    fillApi: s.fillApi,
    dialogueApi: s.dialogueApi,
    globalDefaults: s.globalDefaults,
    promptTemplate: s.promptTemplate,
    autoFillEnabled: s.autoFillEnabled,
    maxRetries: s.maxRetries,
  };
}

/** 整体写回业务设置 */
export function saveSettings(s: FrameworkSettings): void {
  saveSettingsPatch({
    fillApi: s.fillApi,
    dialogueApi: s.dialogueApi,
    globalDefaults: s.globalDefaults,
    promptTemplate: s.promptTemplate,
    autoFillEnabled: s.autoFillEnabled,
    maxRetries: s.maxRetries,
  });
}

// ──────────────────────────────────────────────
// 面板局部更新助手
// ──────────────────────────────────────────────

export function updateFillApi(patch: Partial<FrameworkSettings['fillApi']>): FrameworkSettings {
  const s = loadSettings();
  s.fillApi = { ...s.fillApi, ...patch };
  saveSettings(s);
  return s;
}

export function updateDialogueApi(patch: Partial<FrameworkSettings['dialogueApi']>): FrameworkSettings {
  const s = loadSettings();
  s.dialogueApi = { ...s.dialogueApi, ...patch };
  saveSettings(s);
  return s;
}

export function updateGlobalDefaults(patch: Partial<FrameworkSettings['globalDefaults']>): FrameworkSettings {
  const s = loadSettings();
  s.globalDefaults = { ...s.globalDefaults, ...patch };
  saveSettings(s);
  return s;
}

export function updatePromptTemplate(template: PromptTemplate): FrameworkSettings {
  const s = loadSettings();
  s.promptTemplate = template;
  saveSettings(s);
  return s;
}

export function updatePromptSegment(index: number, patch: Partial<PromptSegment>): FrameworkSettings {
  const s = loadSettings();
  if (!s.promptTemplate.segments[index]) throw new Error(`提示词段不存在：${index}`);
  s.promptTemplate.segments[index] = { ...s.promptTemplate.segments[index], ...patch };
  saveSettings(s);
  return s;
}

export function resetPromptTemplate(): FrameworkSettings {
  const s = loadSettings();
  s.promptTemplate = { segments: DEFAULT_PROMPT_SEGMENTS, instructions: DEFAULT_INSTRUCTIONS };
  saveSettings(s);
  return s;
}
