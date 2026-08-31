// store/prompt-defaults.ts — 默认填表提示词模板（独立无依赖，core/settings 与 store/settings 共用）
//
// 段顺序即发送顺序；enabled=false 的段不发送；占位符在 fill/prompt-builder 里替换。
import type { PromptSegment, PromptTemplate } from './types';

export const DEFAULT_PROMPT_SEGMENTS: PromptSegment[] = [
  {
    role: 'system',
    enabled: true,
    note: '填表指令与输出格式',
    content:
`你是表格维护 AI。根据下方【表数据】与【最近对话】更新指定表。
{{instructions}}

输出要求：只输出一个 JSON 对象，不要输出任何其他文字、不要代码块围栏。
JSON 必须符合此结构：
{ "operations": [ { "type": "insert"|"update"|"delete", "sheet": "表名", "rowId": 数字(1基,update/delete必填), "cells": [按表头顺序的值] } ] }
- insert 追加到表末尾，rowId 可省。
- update/delete 必须给 rowId。
- 没有需要更新的表时，输出 { "operations": [] }。
- cells 值用字符串或 null；不要省略列。`,
  },
  {
    role: 'system',
    enabled: true,
    note: '本次目标表',
    content: '【本次需要更新的表】\n{{target_tables}}',
  },
  {
    role: 'system',
    enabled: true,
    note: '表数据（含列定义/维护规则/当前行）',
    content: '【表数据】\n{{table_data}}',
  },
  {
    role: 'system',
    enabled: true,
    note: '最近对话正文',
    content: '【最近对话】\n{{messages}}',
  },
  {
    role: 'system',
    enabled: true,
    note: '世界书内容（默认开：全局+角色卡+聊天绑定的世界书，蓝灯全发/绿灯按关键词）',
    content: '【世界书】\n{{worldbook}}',
  },
  {
    role: 'system',
    enabled: false,
    note: '角色描述（默认关）',
    content: '【角色】\n{{char_description}}',
  },
  {
    role: 'system',
    enabled: false,
    note: '用户设定（默认关）',
    content: '【用户设定】\n{{persona_description}}',
  },
  {
    role: 'user',
    enabled: true,
    note: '元信息 + 触发请求',
    content: '当前层数：{{floor_info}}\n请按上述表数据与对话，输出本次需要执行的操作 JSON。',
  },
];

export const DEFAULT_INSTRUCTIONS =
`更新原则：
1. 只在确实发生变化时才产生操作；无变化返回空 operations。
2. 严格遵循每张表 Note / Insert触发 / Update触发 / Delete触发 中的规则与约束。
3. 不要凭空创造规则里没有的字段或取值；不确定时宁可不改。
4. 数值类字段（如信任度、属性）单次变化幅度遵循表内约束，不越界。`;

export const DEFAULT_PROMPT_TEMPLATE: PromptTemplate = {
  segments: DEFAULT_PROMPT_SEGMENTS,
  instructions: DEFAULT_INSTRUCTIONS,
};
