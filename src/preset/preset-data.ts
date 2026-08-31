// preset/preset-data.ts — 「原预设开局」数据（由 scripts/gen-preset-data.mjs 从 star.txt 生成）
//
// 四条线（爱丽丝/沧月汐/似久/墨白）各自的：
//   - 表格模板（本扩展 TableDef 形态：已去 row_id 列，规则文本按 note/insert/update/delete 拆分）
//   - 初始数据（按角色×性别；行数组与模板表头对齐）
//   - 预设开场白（角色×性别，含 {{user}} 宏，注入时由酒馆宏替换）
// 全部随 bundle 打包，存取走本扩展表格存储，不依赖外部数据库脚本。
import presetDataJson from './preset-data.json?raw';

export interface PresetTableDef {
  uid: string;
  name: string;
  purpose: string;
  scope: string;
  headers: string[];
  sourceData: { note: string; insertRule: string; updateRule: string; deleteRule: string };
  updateConfig: Record<string, any>;
}

export interface PresetLine {
  title: string;
  subtitle: string;
  maleDesc: string;
  femaleDesc: string;
  openings: { 男: string; 女: string };
  tables: PresetTableDef[];
  seeds: { 男: Record<string, string[][]>; 女: Record<string, string[][]> };
}

const parsed = JSON.parse(presetDataJson) as { version: number; lines: Record<string, PresetLine> };

export const PRESET_LINES: Record<string, PresetLine> = parsed.lines;
export const PRESET_LINE_NAMES: string[] = Object.keys(PRESET_LINES);

export function getPresetLine(name: string): PresetLine | null {
  return PRESET_LINES[name] ?? null;
}
