import { ContentsQuery } from '../../../types/api';
import { BlogResponse } from '../../../types/blog';

export type Methods = {
  get: {
    query?: ContentsQuery;
    resBody: BlogResponse;
  };
};
