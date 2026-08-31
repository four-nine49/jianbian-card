// store/types.ts — 数据结构定义（zod）
//
// 所有运行时数据 / 设置 / 表模板 / 填表返回都用 zod 定义，校验 + 类型一体。
// zod 显式 import 由 esbuild 打进 bundle（不依赖主页面全局 z）。
import { z } from 'zod';

// ──────────────────────────────────────────────
// 1. 单表填表参数（单表粒度，可被面板逐表修改）
// ──────────────────────────────────────────────

export const UpdateConfig = z.object({
  enabled: z.boolean().default(true),            // 是否参与自动填表
  useGlobal: z.boolean().default(true),          // a 档（跟随全局）：true = 下列参数全部用全局默认
  contextRounds: z.number().int().default(3),    // 读取最近几轮对话（1 轮 = 用户发送 + AI 回复）
  group: z.string().default(''),                 // 填表分组：同组名的表合并为一次请求；空 = 默认组
  updateFrequency: z.number().int().default(3),  // 每 N 条 AI 回复触发一次这张表
  skipFloors: z.number().int().default(0),       // 跳过最近 N 楼（刚发的还没展开）
  sendLatestRows: z.number().int().default(-1),  // 只发最近 N 行（-1 = 全发）
  sendRowsTemplate: z.string().default(''),      // 自定义行渲染模板（含 {{row}}/{{cells}}/{{col_i}}）
  // 正文提取/排除：边界字符串匹配（同 ACU applyContextTagFilters）
  extractTags: z.string().default(''),           // 兼容简写："开始标签|结束标签" 多对用换行
  extractRules: z.array(z.object({ start: z.string(), end: z.string() })).default([]),
  excludeTags: z.string().default(''),
  excludeRules: z.array(z.object({ start: z.string(), end: z.string() })).default([]),
});
export type UpdateConfig = z.infer<typeof UpdateConfig>;

export const DEFAULT_UPDATE_CONFIG: UpdateConfig = UpdateConfig.parse({});

// ──────────────────────────────────────────────
// 2. 表源数据（给维护 AI 的说明书，可被面板修改）
// ──────────────────────────────────────────────

export const SheetSourceData = z.object({
  note: z.string().default(''),                  // 列定义 + 维护规则
  insertRule: z.string().default(''),            // 何时插入
  updateRule: z.string().default(''),
  deleteRule: z.string().default(''),
});
export type SheetSourceData = z.infer<typeof SheetSourceData>;

// ──────────────────────────────────────────────
// 3. 单张表运行时数据
// ──────────────────────────────────────────────

export const Sheet = z.object({
  uid: z.string(),                               // 表唯一标识
  name: z.string(),                              // 表名（给 AI 看）
  purpose: z.string().default(''),               // 作用注释（这张表是干嘛的，给人看）
  headers: z.array(z.string()),                  // 列名（不含 row_id 列；row_id = 行索引+1）
  rows: z.array(z.array(z.union([z.string(), z.null()]))), // 数据行
  sourceData: SheetSourceData,
  updateConfig: UpdateConfig,
});
export type Sheet = z.infer<typeof Sheet>;

// ──────────────────────────────────────────────
// 4. 整个聊天一份的表格存储
// ──────────────────────────────────────────────

export const TableStore = z.object({
  version: z.literal(1),
  sheets: z.record(z.string(), Sheet),           // key = `sheet_${uid}`
});
export type TableStore = z.infer<typeof TableStore>;

export function emptyStore(): TableStore {
  return { version: 1, sheets: {} };
}

// ──────────────────────────────────────────────
// 5. 表模板（无 rows，用于初始化；随脚本打包的 tables/*.json）
// ──────────────────────────────────────────────

export const TableDef = z.object({
  uid: z.string(),
  name: z.string(),
  purpose: z.string().default(''),               // 作用注释：这张表是干嘛的 / 什么时候需要
  scope: z.enum(['always', 'onSeed']).default('always'), // 结算时建表时机：always=开局必建；onSeed=有初始行才建
  headers: z.array(z.string()),
  sourceData: SheetSourceData,
  updateConfig: z.object({}).catchall(z.any()).default({}), // Partial<UpdateConfig>，导入时与默认合并
});
export type TableDef = z.infer<typeof TableDef>;

// ──────────────────────────────────────────────
// 6. 填表 API 配置（独立 API，与正文模型/温度解耦）
// ──────────────────────────────────────────────

export const FillApiConfig = z.object({
  mode: z.enum(['tavern', 'custom']).default('custom'), // tavern=跟随酒馆当前 API；custom=用下面的独立配置（默认，兼容老版本行为）
  stream: z.boolean().default(true),             // 填表请求走流式（走反代建议开：非流式请求更容易被识别）
  proxyPreset: z.string().default(''),           // 酒馆代理预设名（优先）
  apiUrl: z.string().default(''),                // 自定义 API 地址（proxyPreset 为空时用）
  apiKey: z.string().default(''),
  model: z.string().default(''),
  source: z.string().default('openai'),          // API 源
  temperature: z.number().default(0.6),          // 填表常需更高温度
  maxTokens: z.union([z.number(), z.literal('same_as_preset'), z.literal('unset')]).default(2048),
  topP: z.union([z.number(), z.literal('same_as_preset'), z.literal('unset')]).default('unset'),
});
export type FillApiConfig = z.infer<typeof FillApiConfig>;

// ──────────────────────────────────────────────
// 6b. 引导对话 API 配置（跟随酒馆当前，或自定义独立 API）
// ──────────────────────────────────────────────

export const DialogueApiConfig = FillApiConfig.extend({
  // 覆盖默认值：引导对话默认跟随酒馆（填表默认自定义）
  mode: z.enum(['tavern', 'custom']).default('tavern'),
});
export type DialogueApiConfig = z.infer<typeof DialogueApiConfig>;

// ──────────────────────────────────────────────
// 7. 全局默认（单表未设置时的兜底；可被面板修改）
// ──────────────────────────────────────────────

export const GlobalDefaults = z.object({
  contextRounds: z.number().int().default(3),    // 读取最近几轮对话（1 轮 = 用户发送 + AI 回复）
  updateFrequency: z.number().int().default(3),  // 每 3 条 AI 回复填一次（开局完即可直接玩）
  skipFloors: z.number().int().default(0),
  sendLatestRows: z.number().int().default(-1),  // a 档表格的"只发最近 N 行"兜底（-1 = 全发）
  extractTags: z.string().default('<content>|</content>'), // 默认只发 <content>…</content> 之间的正文
  excludeTags: z.string().default(''),
});
export type GlobalDefaults = z.infer<typeof GlobalDefaults>;

/**
 * 表参数的实际生效值：a 档（useGlobal=true）→ 全部取全局默认；自定义 → 用表自己的值。
 * 填表调度 / 提示词组装 / 渲染一律用这里的结果，不要直接读 sheet.updateConfig。
 */
export function effectiveUpdateConfig(sheet: Sheet, defaults: GlobalDefaults): UpdateConfig {
  const c = sheet.updateConfig;
  if (c.useGlobal) {
    return {
      ...c,
      contextRounds: defaults.contextRounds,
      updateFrequency: defaults.updateFrequency,
      skipFloors: defaults.skipFloors,
      sendLatestRows: defaults.sendLatestRows,
      extractTags: defaults.extractTags,
      extractRules: [], // a 档不使用表自己的结构化规则，统一跟随全局标签
      excludeTags: defaults.excludeTags,
      excludeRules: [],
    };
  }
  return c;
}

// ──────────────────────────────────────────────
// 8. 提示词模板（占位符，用户可自定义；面板可编辑）
//    一段 = 一个 message；占位符在 prompt-builder 里替换为实际内容。
// ──────────────────────────────────────────────

export const PromptSegment = z.object({
  role: z.enum(['system', 'user', 'assistant']),
  content: z.string(),                           // 含占位符，如 {{table_data}} {{messages}} ...
  enabled: z.boolean().default(true),            // 面板可临时关闭某段
  note: z.string().default(''),                  // 面板里给用户看的备注
});
export type PromptSegment = z.infer<typeof PromptSegment>;

// 可用占位符清单（面板可据此提示用户）
export const PROMPT_PLACEHOLDERS = [
  '{{instructions}}',          // 填表指令（含输出格式要求）
  '{{table_data}}',            // 本次目标表的渲染文本
  '{{messages}}',              // 正文（取层 + 标签过滤后）
  '{{worldbook}}',             // 世界书内容
  '{{char_description}}',      // 角色描述
  '{{persona_description}}',   // 用户设定
  '{{target_tables}}',         // 本次要更新的表名清单
  '{{floor_info}}',            // 当前层数/上次填表层数等元信息
] as const;

// 可用占位符清单 + 中文说明（提示词模板页展示）
export const PROMPT_PLACEHOLDER_DOCS: ReadonlyArray<{ name: string; desc: string }> = [
  { name: '{{instructions}}', desc: '填表指令正文（本页下方"填表指令"输入框的内容会替换到这里）' },
  { name: '{{target_tables}}', desc: '本次要更新的表名清单（自动生成，不用手填）' },
  { name: '{{table_data}}', desc: '表数据：列定义、维护规则、当前所有行（自动渲染）' },
  { name: '{{messages}}', desc: '最近对话正文（按表的"读取对话轮数"截取，已做标签过滤）' },
  { name: '{{floor_info}}', desc: '楼层元信息（AI 回复计数、分组、读取轮数等）' },
  { name: '{{worldbook}}', desc: '世界书内容（自动读取全局 + 角色卡 + 聊天绑定的世界书：蓝灯条目全发，绿灯条目按关键词匹配最近对话；在下方开启该段才会发送）' },
  { name: '{{char_description}}', desc: '角色卡描述（在下方段里开启才会发送，当前版本内容为空）' },
  { name: '{{persona_description}}', desc: '用户设定 / 个人描述（在下方段里开启才会发送，当前版本内容为空）' },
];

export const PromptTemplate = z.object({
  segments: z.array(PromptSegment),
  instructions: z.string().default(''),          // {{instructions}} 的内容（输出格式要求等，独立可编辑）
});
export type PromptTemplate = z.infer<typeof PromptTemplate>;

// ──────────────────────────────────────────────
// 9. 业务设置（存 extensionSettings，见 core/settings.ts）
// ──────────────────────────────────────────────

export const FrameworkSettings = z.object({
  fillApi: FillApiConfig,
  dialogueApi: DialogueApiConfig,                // 引导对话用（引导对话与填表相互独立）
  globalDefaults: GlobalDefaults,
  promptTemplate: PromptTemplate,
  autoFillEnabled: z.boolean().default(true),    // 自动填表总开关
  maxRetries: z.number().int().default(1),       // 填表失败重试次数
});
export type FrameworkSettings = z.infer<typeof FrameworkSettings>;

// ──────────────────────────────────────────────
// 10. 填表返回（strict JSON，json_schema 强制）
// ──────────────────────────────────────────────

export const FillOperation = z.object({
  type: z.enum(['insert', 'update', 'delete']),
  sheet: z.string(),                             // 表名或 uid
  rowId: z.number().int().optional(),            // update/delete 必填（1 基）；insert 可省（追加）
  cells: z.array(z.union([z.string(), z.null()])).optional(), // insert/update 必填
});
export type FillOperation = z.infer<typeof FillOperation>;

export const FillOpsResult = z.object({
  operations: z.array(FillOperation),
});
export type FillOpsResult = z.infer<typeof FillOpsResult>;

// 给 generateRaw 的 json_schema 用（纯 JSON Schema 对象，不含 zod 专属字段）
export const FILL_OPS_JSON_SCHEMA = {
  name: 'table_fill_ops',
  description: '表格维护操作列表',
  value: {
    type: 'object',
    properties: {
      operations: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: { type: 'string', enum: ['insert', 'update', 'delete'] },
            sheet: { type: 'string', description: '表名或 uid' },
            rowId: { type: 'integer', description: 'update/delete 必填，1 基行号；insert 可省' },
            cells: {
              type: 'array',
              items: { type: ['string', 'null'] },
              description: 'insert/update 的单元格值，按表头顺序',
            },
          },
          required: ['type', 'sheet'],
        },
      },
    },
    required: ['operations'],
  },
} as const;
