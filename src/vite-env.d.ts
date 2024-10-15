/// <reference types="vite/client" />
/* 配置@别名路径识别后，会导致路径报红，于是加上该配置 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}