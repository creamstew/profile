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
    <main>
      <section>
        <h2>ブログ一覧</h2>
        <ul>
          {blogs.contents.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blogs/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const blogsPromise = client.get<BlogsResponse>({
    endpoint: 'blogs',
    queries: { fields: 'id,title' },
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
