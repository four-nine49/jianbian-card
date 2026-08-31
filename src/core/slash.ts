// core/slash.ts — Slash 命令注册（指南 6.3 的扩展环境实现）
//
// ST 扩展由 import(dist/index.js) 加载，import.meta.url 指向 dist/。
// 酒馆核心模块在其上四级：public/scripts/extensions/third-party/<name>/dist → public/scripts/
// 用动态 import + try/catch：注册失败只告警，不影响扩展其他功能。
import { toggleWindowVisibility } from '../window/window';

const SCRIPTS_BASE = new URL('../../../../', import.meta.url);

let registered = false;
let parserRef: any = null;

export async function registerSlashCommands(): Promise<void> {
  if (registered) return;
  try {
    const parserMod: any = await import(new URL('slash-commands.js', SCRIPTS_BASE).href);
    const cmdMod: any = await import(new URL('slash-commands/SlashCommand.js', SCRIPTS_BASE).href);
    const SlashCommandParser = parserMod?.SlashCommandParser;
    const SlashCommand = cmdMod?.SlashCommand;
    if (!SlashCommandParser?.addCommandObject || !SlashCommand?.fromProps) {
      throw new Error('酒馆核心 SlashCommand 模块不可用');
    }

    SlashCommandParser.addCommandObject(SlashCommand.fromProps({
      name: 'opening',
      aliases: ['开局'],
      callback: () => {
        const shown = toggleWindowVisibility();
        return shown ? '已打开开局框架窗口' : '已关闭开局框架窗口';
      },
      helpString: '开关开局框架窗口（可拖拽、可缩放）',
    }));

    parserRef = SlashCommandParser;
    registered = true;
    console.info('[开局框架] Slash 命令已注册：/opening（别名 /开局）');
  } catch (e) {
    console.warn('[开局框架] Slash 命令注册失败（不影响其他功能）：', e);
  }
}

export function unregisterSlashCommands(): void {
  if (!registered || !parserRef) return;
  try { parserRef.removeCommand?.('opening'); } catch (e) {
    console.warn('[开局框架] Slash 命令注销失败：', e);
  }
  registered = false;
  parserRef = null;
}
