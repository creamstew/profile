import { Box, Center, Stack, Text, useMediaQuery } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import * as React from 'react';

export const BlogNavBar: React.VFC = () => {
  const router = useRouter();
  const mobile = useMediaQuery('(max-width: 640px');

  return mobile ? (
    <Center width={'100%'}>
      <Text
        align={'center'}
        width={'30%'}
        fontSize={'lg'}
        cursor={'pointer'}
        _hover={{
          bg: 'gray.100',
        }}
        backgroundColor={router.pathname === '/' ? 'gray.100' : 'white'}
      >
        Blog
      </Text>
      <Text
        align={'center'}
        width={'30%'}
        fontSize={'lg'}
        cursor={'pointer'}
        _hover={{
          bg: 'gray.100',
        }}
      >
        Zenn
      </Text>
      <Text
        align={'center'}
        width={'30%'}
        fontSize={'lg'}
        cursor={'pointer'}
        _hover={{
          bg: 'gray.100',
        }}
      >
        Qiita
      </Text>
    </Center>
  ) : (
    <Box width={'10%'} padding={'10px'}>
      <Stack>
        <Text
          padding={'5px'}
          fontSize={'lg'}
          cursor={'pointer'}
          _hover={{
            bg: 'gray.100',
          }}
          backgroundColor={router.pathname === '/' ? 'gray.100' : 'white'}
        >
          Blog
        </Text>
        <Text
          padding={'5px'}
          fontSize={'lg'}
          cursor={'pointer'}
          _hover={{
            bg: 'gray.100',
          }}
        >
          Zenn
        </Text>
        <Text
          padding={'5px'}
          fontSize={'lg'}
          cursor={'pointer'}
          _hover={{
            bg: 'gray.100',
          }}
        >
          Qiita
        </Text>
      </Stack>
    </Box>
  );
};