import * as React from 'react';

export const Header: React.VFC = () => {
  return (
    <>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex justify-between items-center py-10">
          <div>
            <div className="flex justify-between items-center">
              <div className="sm:block h-6 text-2xl font-semibold">creamstew.dev</div>
            </div>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block"></div>
          </div>
        </header>
      </div>
    </>
  );
};
