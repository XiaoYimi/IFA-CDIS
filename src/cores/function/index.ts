/**
 * How to use function module?
 * Way 1:
 * Import fucntion path, such as :
 * import { hasFunctionModule, getFunctionModule } from '@/cores/function/index';
 * Please define key base on filename in <cores/function/modules>.
 *
 * Way 2:
 * Import fucntion module path, such as :
 * import { getEnvEncode } from '@/cores/function/modules/utils.common';
 */

import { Base64 } from 'js-base64';
import { getEnvEncodeStatus } from '@/cores/function/modules/utils.common';

/** Define App Modules: module list */
const functionList = new Map();

/** Loadeds module function, and register to functionList */
const files = import.meta.glob('./modules/*.ts');
for (const path in files) {
  const md = await files[path]();
  let name = path.replace(/(.*\/.*\/)(.*)(\.ts$)/gi, '$2');
  getEnvEncodeStatus() && (name = Base64.encode(name));
  functionList.set(name, md);
}

/**
 * @description loock for function module exist
 * @param {string} key
 * @return {boolean}
 * @demo const exisiModule= hasFunctionModule('storage.common')
 */
export const hasFunctionModule = (key: string): boolean => {
  getEnvEncodeStatus() && (key = Base64.encode(key));
  return functionList.has(key);
};

/**
 * @description return fucntion module
 * @param {string} key
 * @return {object}
 * @demo const { CoresWebStorage } = getFunctionModule('storage.common')
 */
export const getFunctionModule = (key: string) => {
  getEnvEncodeStatus() && (key = Base64.encode(key));
  return functionList.get(key);
};
