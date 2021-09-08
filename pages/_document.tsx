import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap" rel="stylesheet" />
          <meta key="robots" name="robots" content="noindex,nofollow" />
          <meta key="googlebot" name="googlebot" content="noindex,nofollow" />
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
