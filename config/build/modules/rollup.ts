import type { RollupOptions, OutputOptions, ManualChunksOption } from 'rollup';

/** Define App DataTypes */
type VendorLibs = {
  match: string[];
  output: string;
};
type CreateRollupManualChunksFunc = ManualChunksOption | string | null | void;

/** Define App Modules: plugin list */
const optimizerLibs: VendorLibs[] = [
  { match: ['element-plus'], output: 'element-plus' },
  { match: ['echarts'], output: 'echarts' },
  /** other config */
];

/**
 * @description create rollupManualChunks options of vite config
 * @param {string} id
 * @return {CreateRollupManualChunksFunc}
 */
const Create_APP_RollupManualChunks = (
  id: string
): CreateRollupManualChunksFunc => {
  const node_modules_flag = '[\\/]node_modules[\\/]';
  const node_modules_patt = new RegExp(`${node_modules_flag}`);
  if (node_modules_patt) {
    const matchItem = optimizerLibs.find(item => {
      /** create matching patten base on <plugin> */
      const item_patt = new RegExp(
        `[${node_modules_flag}_?(${item.match.join('*')})(.*)`,
        'ig'
      );
      return item_patt.test(id);
    });
    return matchItem ? matchItem.output : null;
  }
};

/**
 * @description create rollup option of vite config
 * @param {boolean} isBuild
 * @return {RollupOptions}
 */
export const Create_APP_RollupOptions = (
  isBuild: boolean = false
): RollupOptions => {
  const options: RollupOptions = {
    output: {
      manualChunks: Create_APP_RollupManualChunks,
    } as OutputOptions,
  };
  return options;
};
