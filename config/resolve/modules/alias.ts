import type { AliasOptions } from 'vite';
import { resolve } from 'path';

/**
 * @description get folder path
 * @param {string} addr
 * @return {string}
 */
const GetFolderPath = (addr: string) => resolve(process.cwd(), addr);

/**
 * @description create resolve.alias option of vite config
 * @param {}
 * @return {AliasOptions}
 */
export const Create_APP_AliasOptions = (): AliasOptions => ({
  /** When you set this options, please redirect to tsconfig.json set option <compilerOptions.paths>. */
  '@': GetFolderPath('src'),
  '#': GetFolderPath('types'),
  views: GetFolderPath('src/views'),
  router: GetFolderPath('src/router'),
  store: GetFolderPath('src/store'),
});
