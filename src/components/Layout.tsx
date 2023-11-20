import { Header } from './Header';

import type { FC, ReactNode } from 'react';

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="px-4 sm:px-6 xl:px-0 mx-auto max-w-3xl xl:max-w-5xl">
        <div className="flex flex-col justify-between">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
};
