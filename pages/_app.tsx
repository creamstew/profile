import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';
import { theme } from '../lib/theme';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
