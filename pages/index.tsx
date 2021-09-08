import { Box, Text, UnorderedList, VStack } from '@chakra-ui/react';
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
      <UnorderedList listStyleType={'none'}>
        <VStack>
          {blogs.contents.map((blog) => (
            <li key={blog.id} list-style-type={'none'}>
              <Box padding={'12px'}>
                <Link href={`/blogs/${blog.id}`} passHref>
                  <Text fontSize={'lg'} cursor={'pointer'}>
                    {blog.title}
                  </Text>
                </Link>
                <Text fontSize={'sm'} color={'gray'}>
                  {blog.publishedAt.substring(0, blog.publishedAt.indexOf('T'))}
                </Text>
              </Box>
            </li>
          ))}
        </VStack>
      </UnorderedList>
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
