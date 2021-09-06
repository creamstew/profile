import { ContentResponse, ContentsResponse } from './api';

export type BlogsResponse = ContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title?: string;
  body?: string;
}>;
