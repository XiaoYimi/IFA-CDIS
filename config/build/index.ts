import type { BuildOptions } from 'vite';

/** Loaded App Variables */
import { APP_BUILD_CONFIG } from '../constant';

/** Loaded App Modules */
import { Create_APP_RollupOptions } from './modules/rollup';
// import { Create_APP_TerserOptions } from './modules/terser';

/**
 * @description create build option of vite config
 * @param {boolean} isBuild
 * @return {BuildOptions}
 */
export const Create_APP_BuildOptions = (
  isBuild: boolean = false
): BuildOptions => {
  const options: BuildOptions = {
    target: APP_BUILD_CONFIG.TRAGET,
    sourcemap: APP_BUILD_CONFIG.SOURCEMAP,
    rollupOptions: Create_APP_RollupOptions(),
    chunkSizeWarningLimit: APP_BUILD_CONFIG.CHUNKSIZEWARNINGLIMIT,

    /**
     * when minify value is 'tarser', it will export error '[vite:terser] terser not found.
     * Since Vite v3, terser has become an optional dependency. You need to install it.
     * terserOptions: (),
     * minify: APP_BUILD_CONFIG.MINIFY,
     */
    // minify: 'terser',
    // terserOptions: Create_APP_TerserOptions(),
  };
  return options;
};
