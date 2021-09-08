import { Center, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

export const Header: React.VFC = () => {
  return (
    <Center borderBottom={'1px solid rgba(0,0,0,0.15)'} boxShadow={'0 0 1px rgb(0 0 0 / 8%)'}>
      <Flex bg={'white'} height={'64px'} align={'center'}>
        <Link href="/" passHref>
          <Text>creamstew.dev</Text>
        </Link>
      </Flex>
    </Center>
  );
};
