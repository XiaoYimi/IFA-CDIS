import { build, Plugin } from 'vite';

/** define datatype limit */
declare type IPlugins = (Plugin | Plugin[])[];
declare interface CreateAPPPluginsOptionsFunc {
  (isBuild: boolean): IPlugins;
}

/** loads config of plugin options */
import { LoadedPlugin_Vue } from './modules/vue';
import { LoadedPlugin_VueJsx } from './modules/vue-jsx';
import { LoadedPlugin_SvgIcon } from './modules/svg-icon';
import { LoadedPlugin_Components } from './modules/components';
import { LoadedPlugin_AutoImport } from './modules/auto-import';
import { LoadedPlugin_Compression } from './modules/compression';

/*
 * @description: build app plugins config in vite
 * @param: {boolean} isBuild
 * @return: {(Plugin | Plugin[])[]}
 */
export const Create_APP_PluginsOptions: CreateAPPPluginsOptionsFunc = (
  isBuild: boolean = false
) => {
  /** define app base plugin in vite */
  const base_plugins: IPlugins = [
    LoadedPlugin_Vue(),
    LoadedPlugin_VueJsx(),
    LoadedPlugin_SvgIcon(),
    LoadedPlugin_Components(),
    LoadedPlugin_AutoImport(),
  ];

  /** define app build plugin in vite */
  const build_plugins: IPlugins = [LoadedPlugin_Compression()];

  /** concat all plugins base on isBuild value */
  isBuild &&
    build_plugins.length &&
    build_plugins.forEach(plugin => {
      base_plugins.push(plugin);
    });

  /** return app all plugins */
  return base_plugins;
};
