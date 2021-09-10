import { useBreakpointValue } from '@chakra-ui/media-query';
import { Box, Center, Stack, Text, UnorderedList } from '@chakra-ui/react';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

import { BlogNavBar } from '../components/BlogNavBar';
import { client } from '../lib/microCmsClient';
import { BlogsResponse } from '../types/blog';

type StaticProps = {
  blogs: BlogsResponse;
};

type PageProps = InferGetStaticPropsType<typeof getStaticProps>;

const Page: NextPage<PageProps> = (props) => {
  const { blogs } = props;
  const pc = useBreakpointValue({ base: false, pc: true });

  return !pc ? (
    <Stack marginTop={'8px'}>
      <BlogNavBar />
      <Box>
        <UnorderedList styleType={'none'}>
          <Stack>
            {blogs.contents.map((blog) => (
              <li key={blog.id}>
                <Box padding={'5px'}>
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
          </Stack>
        </UnorderedList>
      </Box>
    </Stack>
  ) : (
    <Center marginTop={'8px'}>
      <BlogNavBar />
      <Box width={'50%'} padding={'10px'}>
        <UnorderedList styleType={'none'}>
          <Stack>
            {blogs.contents.map((blog) => (
              <li key={blog.id}>
                <Box padding={'5px'}>
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
          </Stack>
        </UnorderedList>
      </Box>
    </Center>
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
