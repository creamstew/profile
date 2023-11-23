import './globals.css';

import { Layout } from '@/components/Layout';
import type { Metadata } from 'next';
import { Murecho, Roboto_Mono } from 'next/font/google';
import type { ReactNode } from 'react';

const murecho = Murecho({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-murecho',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

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
  <html lang="ja" className={`${murecho.variable} ${roboto_mono.variable}`}>
    <body>
      <Layout>{children}</Layout>
    </body>
  </html>
);

export default RootLayout;
