import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { client } from '../../../lib/microCmsClient';
import { BlogResponse } from '../../../types/blog';
import { toStringId } from '../../../utils/toStringId';
type StaticProps = {
  blog: BlogResponse;
};
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blog } = props;
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main>
        <header>
          <h1>{blog.title}</h1>
          <ul>
            <li>publishedAt: {blog.publishedAt}</li>
          </ul>
        </header>
        {blog.body && <article dangerouslySetInnerHTML={{ __html: blog.body }} />}
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: 'blocking',
    paths: [],
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context) => {
  const { params } = context;
  if (!params?.slug) {
    throw new Error('Error: ID not found');
  }

  const id = toStringId(params.slug);
  try {
    const blog = await client.get<BlogResponse>({
      endpoint: 'blogs',
      contentId: id,
      queries: {
        fields: 'id,title,body,publishedAt,tags',
      },
    });

    return {
      props: { blog },
      revalidate: 60,
    };
  } catch (e) {
    return { notFound: true };
  }
};

export default Page;
