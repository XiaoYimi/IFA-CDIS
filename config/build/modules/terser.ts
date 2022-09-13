import type { Terser } from 'vite';

/** Loaded App Variables */
import { APP_BUILD_CONFIG } from '../../constant';

/**
 * @description create rollupManualChunks options of vite config
 * @param {}
 * @return {Terser.CompressOptions}
 */
export const Create_APP_TerserOptions = (): Terser.MinifyOptions => ({
  compress: {
    keep_infinity: APP_BUILD_CONFIG.COMPRESS_KEEP_INFINITY,
    drop_debugger: APP_BUILD_CONFIG.COMPRESS_DROP_DEBUGGER,
    drop_console: APP_BUILD_CONFIG.COMPRESS_DROP_CONSOLE,
  },
});
