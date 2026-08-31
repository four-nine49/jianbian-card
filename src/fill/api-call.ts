// fill/api-call.ts — 调 generateRaw + custom_api（B 方案：独立 API）+ json_schema 强制结构化输出
//
// 依赖（ambient）：generateRaw、iframe_events（流式事件，本场景非流式用不到）
//   custom_api 字段见 @types/function/generate.d.ts：proxy_preset / apiurl / key / model / source / 生成参数
import { generateRaw, stopGenerationById } from '../bridge/tavern';

import { FrameworkSettings, FillApiConfig, FILL_OPS_JSON_SCHEMA } from '../store/types';

export interface ApiCallInput {
  orderedPrompts: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  settings: FrameworkSettings;
  /** 唯一标识，便于停止/区分多请求 */
  generationId?: string;
}

export interface ApiCallOutput {
  ok: boolean;
  text?: string;        // AI 返回的 JSON 字符串
  error?: string;
}

/** 把 API 配置转成 generateRaw 的 custom_api 载荷（填表 / 引导对话共用） */
export function buildCustomApi(api: FillApiConfig): Record<string, any> {
  const customApi: Record<string, any> = {};
  if (api.proxyPreset) customApi.proxy_preset = api.proxyPreset;
  else {
    if (api.apiUrl) customApi.apiurl = api.apiUrl;
    if (api.apiKey) customApi.key = api.apiKey;
  }
  if (api.model) customApi.model = api.model;
  if (api.source) customApi.source = api.source;
  customApi.temperature = api.temperature;
  customApi.max_tokens = api.maxTokens;
  if (api.topP !== 'unset') customApi.top_p = api.topP;
  return customApi;
}

/** 发起一次填表生成请求（静默、非流式、强制 JSON） */
export async function callFillApi(input: ApiCallInput): Promise<ApiCallOutput> {
  const { settings, orderedPrompts, generationId } = input;
  // tavern 模式：不发 custom_api，完全用酒馆当前连接；custom 模式：发独立配置
  const customApi = settings.fillApi.mode === 'custom' ? buildCustomApi(settings.fillApi) : undefined;
  return callGenerate({
    orderedPrompts,
    jsonSchema: FILL_OPS_JSON_SCHEMA,
    customApi,
    stream: settings.fillApi.stream !== false,
    generationId,
  });
}

/** 通用生成调用：可指定任意 json_schema / custom_api / stream（开局框架填表与渐变带三AI共用） */
export async function callGenerate(input: {
  orderedPrompts: Array<{ role: string; content: string }>;
  jsonSchema?: { name: string; value: any };
  customApi?: Record<string, any> | undefined;
  stream?: boolean;
  generationId?: string;
}): Promise<ApiCallOutput> {
  const { orderedPrompts, jsonSchema, customApi, stream, generationId } = input;
  try {
    const result = await generateRaw({
      ordered_prompts: orderedPrompts,
      // 流式开关（走反代建议开：非流式请求更容易被识别）；结果仍是完整 JSON
      should_stream: stream !== false,
      should_silence: true,            // 不打扰酒馆停止按钮
      ...(generationId ? { generation_id: generationId } : {}),
      ...(customApi ? { custom_api: customApi } : {}),
      ...(jsonSchema ? { json_schema: jsonSchema } : {}),
    });

    // json_schema 模式返回的是 JSON 字符串
    if (typeof result === 'string') return { ok: true, text: result };
    // 极少数 provider 返回对象（tool call 等）
    if (result && typeof result === 'object') {
      const r = result as any;
      if (typeof r.content === 'string' && r.content) return { ok: true, text: r.content };
      if (Array.isArray(r.tool_calls) && r.tool_calls.length > 0) {
        const arg = r.tool_calls[0]?.function?.arguments;
        if (typeof arg === 'string') return { ok: true, text: arg };
      }
      return { ok: false, error: '返回为非文本对象，无法解析' };
    }
    return { ok: false, error: '返回为空' };
  } catch (e) {
    return { ok: false, error: `generateRaw 异常：${(e as Error).message}` };
  }
}

/** 停止指定生成（面板"停止"按钮用） */
export function stopFill(generationId: string): boolean {
  try {
    return stopGenerationById(generationId);
  } catch {
    return false;
  }
}
