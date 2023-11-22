import './globals.css';

import { Layout } from '@/components/Layout';
import { Fira_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const firaMono = Fira_Mono({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja" className={firaMono.className}>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
