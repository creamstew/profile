import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { createOgImage } from '@/lib/createOgImage';
import { getBlogDetail, getBlogs } from '@/lib/microCmsClient';

export const generateStaticParams = async () => {
  const blogs = await getBlogs();

  const paths = blogs.map((blog) => {
    return {
      slug: blog.id,
    };
  });

  return [...paths];
};

export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata> {
  const blog = await getBlogDetail(params.slug);

  if (!blog) {
    return {};
  }

  const { ogImageUrl } = createOgImage(
    blog.image.url,
    blog.title,
    blog.author.find((author) => author),
  );

  const baseUrl = 'https://creamstew.vercel.app';

  return {
    title: blog.title,
    openGraph: {
      title: blog.title,
      description: 'Tech Blog by creamstew',
      url: `${baseUrl}/blogs/${blog.id}`,
      siteName: 'creamstew.dev',
      images: [
        {
          url: ogImageUrl,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: 'Tech Blog by creamstew',
      images: [
        {
          url: ogImageUrl,
        },
      ],
    },
  };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogDetail(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
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
              // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
              dangerouslySetInnerHTML={{ __html: blog.body }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
