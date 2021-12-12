import { Header } from '../components/Header';

export const Layout: React.VFC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
