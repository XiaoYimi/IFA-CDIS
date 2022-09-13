import { App } from 'vue';
import 'normalize.css';
import '@/cores/style/application/index.css';
/**
 * @description App load module
 * @param {App} app
 * @return {App}
 * @tip Must define LoadModule function
 */
export const loadModule = (app: App): App => app;
