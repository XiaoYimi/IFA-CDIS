import type { Plugin } from 'vite';
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

/** Define App Variables */
import { APP_SVG_CONFIG } from '../../constant';

/**
 * @description create svgicon plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_SvgIcon = (): Plugin =>
  createSvgIconsPlugin({
    iconDirs: [resolve(process.cwd()), APP_SVG_CONFIG.DIR],
    symbolId: APP_SVG_CONFIG.SYMBOLID,
    inject: APP_SVG_CONFIG.INJECT,
    customDomId: APP_SVG_CONFIG.DOMID,
  });
