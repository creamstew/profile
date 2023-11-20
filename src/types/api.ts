export type ContentsResponse<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type ContentResponse<T> = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
} & T;

export type ContentsQuery = {
  draftKey?: string;
  offset?: number;
  limit?: number;
  orders?: string;
  q?: string;
  fields?: string;
  ids?: string;
  filters?: string;
  depth?: number;
};

export type ContentQuery = {
  draftKey?: string;
  fields?: string;
  depth?: number;
};
