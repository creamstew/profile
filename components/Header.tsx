import { useBreakpointValue } from '@chakra-ui/media-query';
import { Center, HStack, Spacer, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

export const Header: React.VFC = () => {
  const pc = useBreakpointValue({ base: false, pc: true });

  return !pc ? (
    <Center
      bg={'white'}
      height={'64px'}
      borderBottom={'1px solid rgba(0,0,0,0.15)'}
      boxShadow={'0 0 1px rgb(0 0 0 / 8%)'}
      paddingRight={'7%'}
      paddingLeft={'7%'}
    >
      <Link href="/" passHref>
        <Text fontWeight={'bold'} cursor={'pointer'}>
          creamstew.dev
        </Text>
      </Link>
      <Spacer />
      <HStack spacing={4}>
        <Link href="/" passHref>
          <Text fontWeight={'bold'} cursor={'pointer'}>
            Profile
          </Text>
        </Link>
        <Text fontWeight={'bold'} cursor={'pointer'}>
          Blog
        </Text>
      </HStack>
    </Center>
  ) : (
    <Center
      bg={'white'}
      height={'64px'}
      borderBottom={'1px solid rgba(0,0,0,0.15)'}
      boxShadow={'0 0 1px rgb(0 0 0 / 8%)'}
      paddingRight={'20%'}
      paddingLeft={'20%'}
    >
      <Link href="/" passHref>
        <Text fontWeight={'bold'} cursor={'pointer'}>
          creamstew.dev
        </Text>
      </Link>
      <Spacer />
      <HStack spacing={6}>
        <Link href="/" passHref>
          <Text fontWeight={'bold'} cursor={'pointer'}>
            Profile
          </Text>
        </Link>
        <Text fontWeight={'bold'} cursor={'pointer'}>
          Blog
        </Text>
      </HStack>
    </Center>
  );
};
