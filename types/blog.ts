import { ContentResponse, ContentsResponse } from './api';
import { AuthorResponse } from './author';
import { ImageResponse } from './image';

export type BlogsResponse = ContentsResponse<BlogResponse>;

export type BlogResponse = ContentResponse<{
  title: string;
  body: string;
  image: ImageResponse;
  author: Array<AuthorResponse>;
}>;
