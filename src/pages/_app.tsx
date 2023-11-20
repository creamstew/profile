import '../styles/globals.css';

import type { AppProps } from 'next/app';

import { Layout } from '../components/Layout';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
