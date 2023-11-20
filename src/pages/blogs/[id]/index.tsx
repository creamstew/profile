import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { toStringId } from '../../../utils/toStringId';
import { createOgImage } from '../../../lib/createOgImage';
import { client } from '../../../lib/microCmsClient';
import { BlogResponse } from '../../../types/blog';
type StaticProps = {
  blog: BlogResponse;
};
type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blog } = props;
  const router = useRouter();

  const { ogImageUrl } = createOgImage(
    blog.image.url,
    blog.title,
    blog.author.find((author) => author),
  );

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const baseUrl = 'https://creamstew.vercel.app';

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta property="og:site_name" content="creamstew.dev" />
        <meta property="og:title" content={`${blog.title} - creamstew.dev`} />
        <meta property="og:description" content="Tech Blog by creamstew" />
        <meta property="og:url" content={`${baseUrl}/blogs/${blog.id}`} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <article>
        <div>
          <header>
            <div className="pb-10 space-y-1 text-center border-b border-gray-200 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time>{blog.publishedAt.substring(0, blog.publishedAt.indexOf('T'))}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-9 sm:leading-10 text-gray-900 dark:text-gray-100">
                  {blog.title}
                </h1>
              </div>
            </div>
          </header>
        </div>
      </article>
      <div
        className="pb-8 divide-y xl:divide-y-0 divide-gray-200 dark:divide-gray-700"
        style={{ gridTemplateRows: 'auto 1fr' }}
      >
        <div className="xl:col-span-3 xl:row-span-2 xl:pb-0 divide-y divide-gray-200 dark:divide-gray-700">
          {blog.body && (
            <article
              className="pt-10 pb-8 max-w-none prose"
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          )}
        </div>
      </div>
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
  if (!params?.id) {
    throw new Error('Error: ID not found');
  }

  const id = toStringId(params.id);
  try {
    const blog = await client.get<BlogResponse>({
      endpoint: 'blogs',
      contentId: id,
      queries: {
        fields: 'id,title,body,image,author,publishedAt',
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
