import type {
  CoresBaseAxios,
  CoresAxiosInstance,
  CoresAxiosRequestConfig,
  CoresAxiosResult,
  CoresAxiosMethod,
  CoresAxiosError,
} from '#/custom/axios';
import Axios from 'axios';
import { coresWebStorage } from '../function/modules/storage.common';
import { ElMessage } from 'element-plus';

export class CoresAxios implements CoresBaseAxios {
  baseURL: string;
  timeout: number;
  instance: CoresAxiosInstance;
  constructor() {
    /** Axios Initial Config */
    this.baseURL = import.meta.env.VITE_API_TARGET;
    this.timeout = import.meta.env.VITE_API_TIMEOUT;

    /** Create Axios Instance */
    this.instance = Axios.create({
      baseURL: this.baseURL,
      timeout: this.timeout,
    });
  }

  /** Axios Base Config */
  getConfig() {
    const config: CoresAxiosRequestConfig = {
      baseURL: this.baseURL,
      timeout: this.timeout,
      headers: {},
    };
    return config;
  }

  /** Axios Interceptor Config */
  interceptors() {
    /** Use Request Interceptor */
    this.instance.interceptors.request.use(
      config => {
        /** Axios Sort User Request Config And Data */
        config = Object.assign(this.getConfig(), config);

        /** Axios Add User Token */
        const token = coresWebStorage.getValue(
          import.meta.env.VITE_API_TOKENNAME
        );
        token && (config.headers!['Authorization'] = token);

        return config;
      },
      error => {
        console.log('req err');
        return Promise.reject(error);
      }
    );

    /** Use Response Interceptor */
    this.instance.interceptors.response.use(
      response => {
        const { status, data } = response;

        /** server develop confit */
        const { code, msg, result } = data;

        if (status === 200) {
          return Promise.resolve({
            code,
            msg,
            result,
            type: 'success',
          } as CoresAxiosResult);
        }
      },
      (error: CoresAxiosError) => {
        console.log('res err', error);
        const { code, response, message } = error;

        /** According Error Status Output Message */
        let msg = `${code}; ${message}`;
        switch (response?.status) {
          case 301:
            msg = '请求资源永久移动！';
            break;
          case 302:
            msg = '请求资源临时移动！';
            break;
          case 305:
            msg = '请使用代理方式获取请求资源';
            break;
          case 400:
            msg = '客户端异常，请稍后尝试！';
            break;
          case 401:
            msg = '请出示用户身份凭证！';
            break;
          case 403:
            msg = '服务限制，请稍后尝试！';
            break;
          case 404:
            msg = '未找到相关匹配请求资源！';
            break;
          case 407:
            msg = '请求代理要求出示用户身份凭证！';
            break;
          case 413:
            msg = '请求实体过大，已退出服务！';
            break;
          case 500:
            msg = '服务器异常，请联系管理员处理！';
            break;
          case 502:
            msg = '服务器异发现无效请求，已退出服务！';
            break;
          case 503:
            msg = '服务器异请求过载｜正在进行维护中，请稍后尝试！';
            break;
          case 504:
            msg = '服务器未能获取远程服务，已退出服务！！';
            break;
          default:
            msg = '客户端请求失败！';
            break;
        }

        ElMessage.error({
          message: msg,
          duration: parseInt(import.meta.env.VITE_API_ERROR_DURATION) ?? 5000,
        });

        return Promise.reject({
          msg,
          /** Code Error Status Default 404  */
          code: response?.status ?? 404,
          result: response?.data ?? '未找到请求资源',
          type: 'error',
        } as CoresAxiosResult);
      }
    );
  }

  /** Axios Initiate Request */
  request(options: CoresAxiosRequestConfig) {
    options = Object.assign(this.getConfig(), options);
    this.interceptors();
    this.instance(options);
  }
}

/** Export Axios Instance */
export const http = new CoresAxios();
