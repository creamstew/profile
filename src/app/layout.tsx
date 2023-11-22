import './globals.css';

import { Layout } from '@/components/Layout';
import type { Metadata } from 'next';
import { Fira_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const firaMono = Fira_Mono({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const siteName = 'creamstew.dev';
const description = 'Tech Blog by creamstew';

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: {
      default: siteName,
      template: `%s - ${siteName}`,
    },
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ja" className={firaMono.className}>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
