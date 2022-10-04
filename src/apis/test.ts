import { http } from '@/cores/plugins/cores-axios';

export const TestHttp = () =>
  http.request({
    method: 'get',
    url: '/',
    params: { a: 1, b: 2 },
  });
