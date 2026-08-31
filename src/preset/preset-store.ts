// preset/preset-store.ts — 「原预设开局」向导进度（存聊天变量，随聊天持久化、按聊天隔离）
import { getVariables, updateVariablesWith } from '../bridge/tavern';

const NS = '__of_preset_state__';

export interface PresetState {
  character: string;   // 已选角色线
  gender: string;      // 已选性别（'' = 未选）
  opening: string;     // 已生成/编辑的开场白
}

export function getPresetState(): PresetState | null {
  try {
    const raw = getVariables({ type: 'chat' })?.[NS];
    if (!raw || typeof raw !== 'object') return null;
    const s = raw as Partial<PresetState>;
    if (typeof s.character !== 'string' || !s.character) return null;
    return {
      character: s.character,
      gender: typeof s.gender === 'string' ? s.gender : '',
      opening: typeof s.opening === 'string' ? s.opening : '',
    };
  } catch {
    return null;
  }
}

export function savePresetState(state: PresetState | null): void {
  updateVariablesWith(v => {
    if (state) v[NS] = state;
    else delete v[NS];
    return v;
  }, { type: 'chat' });
}
