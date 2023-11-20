import Document, { Head, Html, Main, NextScript } from 'next/document';

import type { ReactElement } from 'react';

class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
