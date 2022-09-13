import type { Plugin } from 'vite';
import Vue from '@vitejs/plugin-vue';

/**
 * @description create vue plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_Vue = (): Plugin => Vue();
