import Link from 'next/link';

import { getBlogs } from '@/lib/microCmsClient';

const TopPage = async () => {
  const blogs = await getBlogs();

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {blogs.map((blog) => (
        <li key={blog.id} className="py-8">
          <article>
            <div className="xl:grid xl:grid-cols-4 xl:items-baseline space-y-2 xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time>
                    {blog?.publishedAt
                      ? blog.publishedAt.substring(0, blog.publishedAt.indexOf('T'))
                      : 'Date not available'}
                  </time>
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
  );
};

export default TopPage;
