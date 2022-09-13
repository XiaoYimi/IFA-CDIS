import type { Plugin } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * @description create components plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_Components = (): Plugin =>
  Components({
    resolvers: [ElementPlusResolver()],
  });
