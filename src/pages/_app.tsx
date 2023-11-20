import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

import { Layout } from '@/components/Layout';

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
