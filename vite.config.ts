import type { UserConfig, ConfigEnv } from 'vite';

/** Loaded App Modules */
import { Create_APP_PluginsOptions } from './config/plugins/index';
import { Create_APP_BuildOptions } from './config/build/index';
import { Create_APP_ResolveOptions } from './config/resolve/index';
import { Create_APP_ServerOptions } from './config/server/index';

/** Define App Modules */
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(`isBuild: ${isBuild}, env: ${mode}`);
  return {
    base: '/',
    resolve: Create_APP_ResolveOptions(),
    plugins: Create_APP_PluginsOptions(isBuild),
    build: Create_APP_BuildOptions(),
    server: Create_APP_ServerOptions(),
  };
};
