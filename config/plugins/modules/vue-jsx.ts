import type { Plugin } from 'vite';
import VueJsx from '@vitejs/plugin-vue-jsx';

/**
 * @description create vue-jsx plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_VueJsx = (): Plugin => VueJsx();
