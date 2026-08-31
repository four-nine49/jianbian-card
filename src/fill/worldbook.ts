// fill/worldbook.ts — 读取世界书内容进填表上下文（{{worldbook}} 占位符的数据源）
//
// 范围：全局开启的世界书 + 当前角色卡绑定的世界书（primary + additional）+ 当前聊天绑定的世界书。
// 激活规则（尽力模拟酒馆）：
//   - 蓝灯（strategy.type === 'constant'）：启用即发
//   - 绿灯（'selective'）：主要关键字 keys 在最近对话文本里命中任意一个才发
//   - 'vectorized' 或禁用条目：不发
// 条目内容渲染（重要：getWorldbook 读到的是存储原文，酒馆的编译发生在注入管线里）：
//   - EJS（<% %>）：安装了「提示词模板语法插件」时用其 EjsTemplate 按酒馆同款环境编译后发送；
//     插件未装则 EJS 原样发送
//   - {{user}} 等 ST 宏：用酒馆 substituteParams 替换后发送
//   - 渲染失败保留原文；不做长度截断（全量发送）
// 任何一步失败都返回已拿到的内容/空串并告警，不阻断填表。
import { tavernHelperCall } from '../bridge/tavern';
import { substituteMacros } from '../utils/macros';

export interface WorldbookFetchOptions {
  /** 绿灯关键词的扫描文本（通常是最近几轮对话原文）；不传则只发蓝灯条目 */
  matchText?: string;
}

interface WorldbookEntryLike {
  name?: string;
  enabled?: boolean;
  strategy?: { type?: string; keys?: (string | RegExp)[] };
  content?: string;
  probability?: number;
}

/** EJS 宿主（「提示词模板语法插件」ST-Prompt-Template；未安装则为 undefined） */
function getEjsHost(): any {
  return (window as any).EjsTemplate ?? (window as any).TavernHelper?.EjsTemplate;
}

/** 单条内容渲染：EJS 编译（插件可用时）→ ST 宏替换；失败保留原文 */
async function renderEntryContent(
  content: string,
  entryName: string,
  ejs: any,
  ejsContext: Record<string, any> | null,
): Promise<string> {
  let text = content;
  if (text.includes('<%') && ejs && ejsContext) {
    try {
      text = await ejs.evaltemplate(text, ejsContext);
    } catch (e) {
      console.warn(`[开局框架] 世界书条目「${entryName}」EJS 渲染失败（原样发送）：`, e);
    }
  }
  if (text.includes('{{')) text = substituteMacros(text);
  return text;
}

/** 收集应当读取的世界书名字（全局 + 角色卡 + 聊天绑定，去重） */
async function collectWorldbookNames(): Promise<string[]> {
  const names: string[] = [];
  const push = (v: unknown) => {
    if (typeof v === 'string' && v && !names.includes(v)) names.push(v);
  };

  const globals = await tavernHelperCall<string[]>('getGlobalWorldbookNames');
  if (Array.isArray(globals)) globals.forEach(push);

  const chars = await tavernHelperCall<{ primary?: string | null; additional?: string[] }>('getCharWorldbookNames', 'current');
  if (chars) {
    push(chars.primary);
    if (Array.isArray(chars.additional)) chars.additional.forEach(push);
  }

  const chatName = await tavernHelperCall<string | null>('getChatWorldbookName', 'current');
  push(chatName);

  return names;
}

/** 关键字是否命中文本（字符串关键字大小写不敏感；RegExp 关键字原样使用） */
function keyMatches(key: string | RegExp, text: string): boolean {
  try {
    if (key instanceof RegExp) return key.test(text);
    if (typeof key === 'string' && key.length > 0) {
      return text.toLowerCase().includes(key.toLowerCase());
    }
  } catch { /* 忽略坏正则 */ }
  return false;
}

/** 读取世界书并拼成文本（全量、渲染后发送）；拿不到时返回空串（不抛错，不阻断填表） */
export async function fetchWorldbookText(opts: WorldbookFetchOptions = {}): Promise<string> {
  const matchText = opts.matchText ?? '';
  try {
    const names = await collectWorldbookNames();
    if (names.length === 0) {
      console.info('[开局框架] 没有可读取的世界书（全局/角色卡/聊天都未绑定）');
      return '';
    }

    // EJS 环境：装了提示词模板插件才准备（prepareContext 与酒馆注入同款，含变量合并）
    const ejs = getEjsHost();
    const hasEjs = typeof ejs?.evaltemplate === 'function' && typeof ejs?.prepareContext === 'function';
    let ejsContext: Record<string, any> | null = null;
    if (hasEjs) {
      try { ejsContext = await ejs.prepareContext(); } catch (e) {
        console.warn('[开局框架] EjsTemplate.prepareContext 失败，EJS 条目将原样发送：', e);
      }
    }

    const parts: string[] = [];
    for (const name of names) {
      const entries = await tavernHelperCall<WorldbookEntryLike[]>('getWorldbook', name);
      if (!Array.isArray(entries)) continue;
      for (const entry of entries) {
        if (!entry || entry.enabled === false) continue;
        if (!entry.content) continue;
        const type = entry.strategy?.type;
        if (type === 'vectorized') continue;
        if (type === 'selective') {
          const keys = entry.strategy?.keys ?? [];
          // 绿灯：有关键字且命中最近对话才发；没写关键字的不发（和酒馆行为一致：永不激活）
          if (keys.length === 0 || !matchText || !keys.some(k => keyMatches(k, matchText))) continue;
        }
        // probability < 100 的条目按概率随机略过（模拟酒馆的激活概率%）
        if (typeof entry.probability === 'number' && entry.probability < 100) {
          if (Math.random() * 100 >= entry.probability) continue;
        }
        const title = entry.name || '未命名条目';
        const content = await renderEntryContent(entry.content, title, hasEjs ? ejs : null, ejsContext);
        parts.push(`【${title}】\n${content}`);
      }
    }
    console.info(`[开局框架] 世界书读取：${names.length} 本，采纳 ${parts.length} 条（蓝灯全发/绿灯按关键词；EJS ${hasEjs ? '已编译' : '未安装插件→原样发送'}；宏已替换；不截断）`);
    return parts.join('\n\n');
  } catch (e) {
    console.warn('[开局框架] 读取世界书失败（本次填表不带世界书）：', e);
    return '';
  }
}
