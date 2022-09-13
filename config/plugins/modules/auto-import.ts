import { Plugin } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

/**
 * @description create autoload plugin option of vite config
 * @param {}
 * @return {Plugin}
 */
export const LoadedPlugin_AutoImport = (): Plugin =>
  AutoImport({
    /** AutoImport Config */
    imports: ['vue', 'vue-router'],
    resolvers: [ElementPlusResolver()],

    /** Auto create datatype limit file. */
    dts: 'types/auto-import.d.ts',

    /** eslint ignore */
    eslintrc: {
      /** when set enabled value <true>, it will touch file <.eslintrc-auto-import.json> .
       *  Of course, you can specify the storage path <filepath> .
       *  Option filepath: default value is './.eslintrc-auto-import.json'.
       */
      enabled: false,
      filepath: '',
      globalsPropValue: true,
    },
  });
