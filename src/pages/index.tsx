import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';

import { client } from '@/lib/microCmsClient';
import { BlogsResponse } from '@/types/blog';

type StaticProps = {
  blogs: BlogsResponse;
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blogs } = props;

  return (
    <>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {blogs.contents.map((blog) => (
          <li key={blog.id} className="py-8">
            <article>
              <div className="xl:grid xl:grid-cols-4 xl:items-baseline space-y-2 xl:space-y-0">
                <dl>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time>{blog.publishedAt.substring(0, blog.publishedAt.indexOf('T'))}</time>
                  </dd>
                </dl>
                <div className="xl:col-span-3 space-y-5">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold tracking-tight leading-8">
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </article>
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
