import Link from 'next/link';
import * as React from 'react';

export const Header: React.VFC = () => {
  return (
    <>
      <header className="flex justify-between items-center py-10">
        <div>
          <div className="flex justify-between items-center">
            <div className="h-6 text-2xl font-semibold">
              <Link href={'/'}>creamstew.dev</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
