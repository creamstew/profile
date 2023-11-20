import { BlogResponse, BlogsResponse } from "@/types/blog";
import { createClient } from "microcms-js-sdk";

// Initialize Client SDK.
const client = createClient({
  serviceDomain: "creamstew", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: process.env.MICRO_CMS_API_KEY || "",
});

export const getBlogs = async () => {
  const res = await client.getList<BlogsResponse>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "blogs",
    queries: { fields: "id,title,publishedAt" },
  });

  return res.contents;
};

export const getBlogDetail = async (slug: string) => {
  const res = await client.get<BlogResponse>({
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    endpoint: "blogs",
    contentId: slug,
    queries: {
      fields: "id,title,body,image,author,publishedAt",
    },
  });

  return res;
};
