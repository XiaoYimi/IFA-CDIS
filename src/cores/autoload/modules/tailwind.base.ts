import { App } from 'vue';
import '@/cores/style/tailwind/index.css';

/**
 * @description App load module
 * @param {App} app
 * @return {App}
 * @tip Must define LoadModule function
 */
export const loadModule = (app: App): App => app;
