import type {
  Axios,
  AxiosInstance,
  /** Request */
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosRequestTransformer,
  /** Response */
  AxiosResponse,
  AxiosResponseHeaders,
  AxiosResponseTransformer,
  /** Interceptor */
  AxiosInterceptorManager,
  AxiosInterceptorOptions,
  /** usually */
  AxiosStatic,
  AxiosAdapter,
  AxiosPromise,
  AxiosDefaults,
  AxiosError,
  AxiosProxyConfig,
  AxiosBasicCredentials,
} from 'axios';

export declare interface CoresAxios extends Axios {}
export declare interface CoresAxiosInstance extends AxiosInstance {}
export declare interface CoresAxiosOptions extends AxiosRequestConfig {}
export declare interface CoresAxiosRequestConfig extends AxiosRequestConfig {}
export declare interface CoresAxiosRequestHeaders extends AxiosRequestHeaders {}
export declare interface CoresAxiosRequestTransformer
  extends AxiosRequestTransformer {}
export declare interface CoresAxiosResponse extends AxiosResponse {}
export declare interface CoresAxiosResponseHeaders
  extends AxiosResponseHeaders {}
export declare interface CoresAxiosResponseTransformer
  extends AxiosResponseTransformer {}
export declare interface CoresAxiosStatic extends AxiosStatic {}
export declare interface CoresAxiosAdapter extends AxiosAdapter {}
export declare interface CoresAxiosPromise extends AxiosPromise {}
export declare interface CoresAxiosDefaults extends AxiosDefaults {}
export declare interface CoresAxiosError extends AxiosError {}
export declare interface CoresAxiosProxyConfig extends AxiosProxyConfig {}
export declare interface CoresAxiosBasicCredentials
  extends AxiosBasicCredentials {}

export declare interface CoresAxiosResult<T = any> {
  code: number;
  type: 'success' | 'warning' | 'error';
  message: string;
  result: T;
}
