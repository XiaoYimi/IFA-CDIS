import type { ServerOptions } from 'vite';

/** Loaded App Variables */
import { APP_BASE_CONFIG } from '../constant';

/** Loaded App Modules */
import { Create_APP_ServerProxyList } from './modules/proxy';

/**
 * @description create server option of vite config
 * @param {}
 * @return {ServerOptions}
 */
export const Create_APP_ServerOptions = (): ServerOptions => ({
  hmr: APP_BASE_CONFIG.HMR,
  host: APP_BASE_CONFIG.HOST,
  port: APP_BASE_CONFIG.PORT,
  cors: APP_BASE_CONFIG.CORS,
  open: APP_BASE_CONFIG.START_OPEN,
  proxy: Create_APP_ServerProxyList(),
});
