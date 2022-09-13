import type {
  CoresAxiosInstance,
  CoresAxiosOptions,
  CoresAxiosRequestConfig,
  CoresAxiosResponse,
} from '#/custom/axios';
import Axios from 'axios';
import { Base64 } from 'js-base64';

/** Define App Modules: App Axios */
export class CoresAxios {
  private instance: CoresAxiosInstance;
  private readonly options: CoresAxiosOptions;

  constructor(options: CoresAxiosOptions) {
    this.options = options;
    this.instance = Axios.create(options);
    this.setupInterceptor();
  }

  private createInstance(options: CoresAxiosOptions) {
    this.instance = Axios.create(options);
  }

  setupInterceptor() {
    /** Axios Request Interceptor */
    this.instance.interceptors.request.use(
      (config: CoresAxiosRequestConfig) => {
        return config;
      },
      error => {}
    );

    /** Axios Response Interceptor */
    this.instance.interceptors.response.use(
      response => {},
      error => {}
    );
  }

  public getInstance() {
    return this.instance;
  }
}

export const coresAxios = new CoresAxios({
  baseURL: import.meta.env.VITE_API_TARGET,
  timeout: import.meta.env.VITE_API_TIMEOUT,
});
