import { FC } from 'react';
import { Affix, Header, Footer, Sidebar } from '@/components';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="mx-auto flex w-full max-w-8xl flex-1 px-4">
        <Sidebar />
        <main className="w-full flex-1 flex-shrink-0">{children}</main>
      </div>
      <Footer />
      <Affix />
    </div>
  );
};

export default Layout;
