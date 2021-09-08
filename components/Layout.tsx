import { Box } from '@chakra-ui/react';
import * as React from 'react';

import { Header } from '../components/Header';

export const Layout: React.VFC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <Box position={'fixed'} width={'100vw'} top={0} bottom={0}>
      <Header />
      <Box flex={1} minHeight={'100vh'} overflow={'scroll'}>
        <main>{children}</main>
      </Box>
    </Box>
  );
};
