import { App } from 'vue';
import router from '@/router/index';

/**
 * @description App load module
 * @param {App} app
 * @return {App}
 * @tip Must define LoadModule function
 */
export const loadModule = (app: App): App => {
  app.use(router);
  return app;
};
