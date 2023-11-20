import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_dlvvmz } from './blogs';
import type { Methods as Methods_chhvph } from './blogs/_id@string';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/blogs';
  const GET = 'GET';

  return {
    blogs: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          get: (option?: { query?: Methods_chhvph['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_chhvph['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { query?: Methods_chhvph['get']['query'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods_chhvph['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get' | undefined; query: Methods_chhvph['get']['query'] } | undefined) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
        };
      },
      get: (option?: { query?: Methods_dlvvmz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_dlvvmz['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods_dlvvmz['get']['query'] | undefined, config?: T | undefined } | undefined) =>
        fetch<Methods_dlvvmz['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get' | undefined; query: Methods_dlvvmz['get']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
