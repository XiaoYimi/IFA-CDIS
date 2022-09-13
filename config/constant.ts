/** Define App DataTypes */
declare type DomInject = 'body-first' | 'body-last';
declare type Algorithm = 'gzip' | 'brotliCompress' | 'deflate' | 'deflateRaw';

/** Define App Variables */
/** 项目基础配置 */
export const APP_BASE_CONFIG = {
  MINIFY: '',
  SOURCEMAP: true,
  DROP_CONSOLE: true,
  DROP_DEBUGGER: true,

  HOST: '0.0.0.0',
  PORT: 9999,
  CORS: true,
  HMR: { overlay: false },
  START_OPEN: false,
};

/** 项目打包配置 */
export const APP_BUILD_CONFIG = {
  OUTDIR: 'dist',
  TRAGET: 'es2015',
  MINIFY: 'esbuild',
  SOURCEMAP: false,
  CHUNKSIZEWARNINGLIMIT: 2000,
  COMPRESS_KEEP_INFINITY: true,
  COMPRESS_DROP_CONSOLE: true,
  COMPRESS_DROP_DEBUGGER: true,
};

/** 请求(API)配置 */
export const APP_HTTP_CONFIG = {
  PROXY: '/api',
  TARGET: 'http://localhost:9999',
  CHANGEORIGIN: true,
  REWRITE: (path: string) =>
    path.replace(new RegExp(`^${APP_HTTP_CONFIG.PROXY}`), ''),
};

/** 请求用例(Mock)配置 */
export const APP_MOCK_CONFIG = {
  PROXY: '/mock',
  TARGET: 'http://localhost:9999',
  CHANGEORIGIN: true,
  REWRITE: (path: string) =>
    path.replace(new RegExp(`^${APP_HTTP_CONFIG.PROXY}`), ''),
};

/** SVG 图标配置 */
export const APP_SVG_CONFIG = {
  DIR: 'src/icons',
  SYMBOLID: 'icon-[dir]-[name]',
  DOMID: '__svg__icons__dom__',
  INJECT: 'body-last' as DomInject,
};

/** 压缩配置 */
export const APP_COMPRESSION_CONFIG = {
  USE: true,
  EXT: '.gz',
  VERBOSE: true,
  DISABLED: false,
  THRESHOLD: 10240,
  ALGORITHM: 'gzip' as Algorithm,
};
