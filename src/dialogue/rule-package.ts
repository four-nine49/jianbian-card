// dialogue/rule-package.ts — 规则包定义（框架不写死任何规则/表格/结算契约）
//
// 一个规则包 = 一张角色卡的开局方案：
//   rulesText        给 AI 的规则全文（引导对话的 system 注入）
//   tables           结算落地用哪些表（TableDef[]，applySettlement 时整包导入）
//   requiredKeys     结算块必须包含的键
//   seedRows         静态初始行：sheetUid -> rows（随包声明，导入即生效）
//   seedDynamic      （仅内置包）动态种子函数：从结算块字段算出初始行
// 内置包在 builtin-packages.ts；用户导入的包存 extensionSettings，schema 在这里。
import { z } from 'zod';

import { TableDef } from '../store/types';
import type { ParsedSettlement } from './settlement-parser';

export const RulePackageSchema = z.object({
  id: z.string().min(1, '缺少 id'),
  name: z.string().min(1, '缺少 name'),
  description: z.string().default(''),
  rulesText: z.string().default(''),
  tables: z.array(TableDef).default([]),
  settlementStartMark: z.string().default('【自定义开局结算开始】'),
  settlementEndMark: z.string().default('【自定义开局结算结束】'),
  requiredKeys: z.array(z.string()).default([]),
  seedRows: z.record(z.string(), z.array(z.array(z.union([z.string(), z.null()])))).default({}),
  builtin: z.boolean().default(false),
});
export type RulePackage = z.infer<typeof RulePackageSchema>;

/** 动态种子：从结算块解析结果算出 { sheetUid: rows }（内置包用；导入包用静态 seedRows） */
export type SettlementSeedFn = (parsed: ParsedSettlement) => Record<string, (string | null)[][]>;

/** 运行时解析完成的包（内置包可带动态种子） */
export interface ResolvedPackage extends RulePackage {
  seedDynamic?: SettlementSeedFn;
}

export const DEFAULT_ACTIVE_PACKAGE_ID = 'custom-opening';
