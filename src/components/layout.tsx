import { FC } from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Sidebar />
        <main className="flex-1 pt-12">
          <div className="max-w-2xl mx-auto">{children}</div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
