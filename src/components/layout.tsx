import { FC } from 'react';
import Header from './header';
import Footer from './footer';

const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full max-w-prose mx-auto px-4 py-8 md:px-0">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
