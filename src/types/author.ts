import { ContentResponse, ContentsResponse } from './api';
import { ImageResponse } from './image';

export type AuthorsResponse = ContentsResponse<AuthorResponse>;

export type AuthorResponse = ContentResponse<{
  name: string;
  image: ImageResponse;
}>;
