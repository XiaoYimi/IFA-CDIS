import type { Plugin } from 'vite';
import Compression from 'vite-plugin-compression';

/** loads vite define constant */
import { APP_COMPRESSION_CONFIG } from '../../constant';

/** Define App DataTypes */
declare interface LoadedPluginCompressionFunc {
  (): Plugin | Plugin[];
}

/**
 * @description create compression plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_Compression: LoadedPluginCompressionFunc = () =>
  APP_COMPRESSION_CONFIG.USE
    ? Compression({
        ext: APP_COMPRESSION_CONFIG.EXT,
        verbose: APP_COMPRESSION_CONFIG.VERBOSE,
        disable: APP_COMPRESSION_CONFIG.DISABLED,
        threshold: APP_COMPRESSION_CONFIG.THRESHOLD,
        algorithm: APP_COMPRESSION_CONFIG.ALGORITHM,
      })
    : [];
