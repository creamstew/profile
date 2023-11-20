import './globals.css';

import { Layout } from '@/components/Layout';

import type { ReactNode } from 'react';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja">
    <head>
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&display=swap"
        rel="stylesheet"
      />
    </head>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
