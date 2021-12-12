import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { client } from '../lib/microCmsClient';
import { BlogsResponse } from '../types/blog';

type StaticProps = {
  blogs: BlogsResponse;
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blogs } = props;

  return (
    <>
      <h2>aaa</h2>
      <ul>
        {blogs.contents.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`} passHref>
              <a>
                {blog.title}
                {blog.publishedAt.substring(0, blog.publishedAt.indexOf('T'))}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blogsPromise = client.get<BlogsResponse>({
    endpoint: 'blogs',
    queries: { fields: 'id,title,publishedAt' },
  });

  const [blogs] = await Promise.all([blogsPromise]);

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  };
};

export default Page;
