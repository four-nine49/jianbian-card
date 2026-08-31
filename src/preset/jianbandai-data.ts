// preset/jianbandai-data.ts — 「渐变带角色卡专用」数据（由 scripts/gen-jianbandai-data.mjs 生成）
//
// 学院线（陆安）：表格模板（陆安追踪表；纪要表按需求排除）+ 初始数值 + 预设开场白（男/女）。
// 全部随 bundle 打包，存取走本扩展表格存储，不依赖外部数据库脚本。
import jianbandaiJson from './jianbandai-data.json?raw';

export interface JbTableDef {
  uid: string;
  name: string;
  purpose: string;
  scope: string;
  headers: string[];
  sourceData: { note: string; insertRule: string; updateRule: string; deleteRule: string };
  updateConfig: Record<string, any>;
}

export interface JbLine {
  name: string;
  subtitle: string;
  maleDesc: string;
  femaleDesc: string;
  openings: { 男: string; 女: string };
  tables: JbTableDef[];
  seeds: { 男: Record<string, string[][]>; 女: Record<string, string[][]> };
}

const parsed = JSON.parse(jianbandaiJson) as { version: number; line: JbLine };

export const JIANBANDAI: JbLine = parsed.line;
