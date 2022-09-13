import { App } from 'vue';
import { IModule, IModuleFunc } from '#/custom/module';

/** Log App Module ClassList  */
const moduleClassList: Map<string, string[]> = new Map();
const registerModuleClassList = (ext: string, name: string): void => {
  !moduleClassList.has(ext) && moduleClassList.set(ext, []);
  const data = moduleClassList.get(ext);
  data!.push(name.replace(new RegExp(`\.${ext}`), ''));
  moduleClassList.set(ext, data as string[]);
};

/** Loads app module */
const baseModuleMap = new Set();
const componentModuleMap = new Set();
const styleModuleMap = new Set();

const files = import.meta.glob('./modules/*.ts');
for (const path in files) {
  const md = (await files[path]()) as IModule;
  const name = path.replace(/(.*\/.*\/)(.*)(\.ts$)/gi, '$2');
  const [...args] = name.split('.');
  const ext = args[args.length - 1];

  /** split module class base on ext */
  switch (ext) {
    case 'base':
      baseModuleMap.add(md.loadModule);
      break;
    case 'style':
      styleModuleMap.add(md.loadModule);
      break;
    case 'component':
      componentModuleMap.add(md.loadModule);
      break;
    default:
      break;
  }

  /** output app modules in console */
  registerModuleClassList(ext, name);
}

/**
 * @description Install App All Modules
 * @param {App} app
 * @return {App}
 */
export const installModules = (app: App): App => {
  /** Register App Styles Modules */
  Array.from(styleModuleMap).forEach(md => (md as IModuleFunc)(app));

  /** Register App Base Modules */
  Array.from(baseModuleMap).forEach(md => (md as IModuleFunc)(app));

  /** Register App Components Modules */
  Array.from(componentModuleMap).forEach(md => (md as IModuleFunc)(app));

  console.info('Loads App ModuleClassList.');
  console.info(moduleClassList);
  return app;
};
