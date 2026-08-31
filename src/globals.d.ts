// globals.d.ts — 主页面环境里的全局对象（SillyTavern 注入）
declare const toastr: any;
declare const SillyTavern: any;

// esbuild ?raw 导入（tables/standard.json）
declare module '*?raw' {
  const text: string;
  export default text;
}
