import { Header } from '../components/Header';

export const Layout: React.VFC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <>
      <div className="px-4 sm:px-6 xl:px-0 mx-auto max-w-3xl xl:max-w-5xl">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};
