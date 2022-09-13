import { App } from 'vue';
export declare interface IModule {
  loadModule: Function;
}

export declare interface IModuleFunc {
  (app: App): App;
}
