import type { ProxyOptions } from 'vite';

/** Loaded App Variables */
import { APP_HTTP_CONFIG, APP_MOCK_CONFIG } from '../../constant';

/** Define App DataTypes */
declare type ProxyTargetList = Record<string, ProxyOptions>;
declare interface CreateAPPServerProxyFunc {
  (): ProxyTargetList;
}

/**
 * @description create build option of vite config
 * @param {}
 * @return {ProxyTargetList}
 */
export const Create_APP_ServerProxyList: CreateAPPServerProxyFunc = () => ({
  /** Http Proxy */
  [APP_HTTP_CONFIG.PROXY]: {
    target: APP_HTTP_CONFIG.TARGET,
    changeOrigin: APP_HTTP_CONFIG.CHANGEORIGIN,
    rewrite: APP_HTTP_CONFIG.REWRITE,
  },

  /** Mock Proxy */
  [APP_MOCK_CONFIG.PROXY]: {
    target: APP_MOCK_CONFIG.TARGET,
    changeOrigin: APP_MOCK_CONFIG.CHANGEORIGIN,
    rewrite: APP_MOCK_CONFIG.REWRITE,
  },
});
