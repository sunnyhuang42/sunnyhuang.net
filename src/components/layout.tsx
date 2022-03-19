import { FC } from 'react';
import cls from 'clsx';
import { useBoolean } from '@/hooks';
import { MenuContext } from '@/context/menu';
import { MenuProvider } from '@/context/page';
import Header from './header';
import Footer from './footer';
import Aside from './aside';

const Layout: FC = ({ children }) => {
  const [visible, actions] = useBoolean();
  return (
    <MenuContext.Provider value={[visible, actions]}>
      <MenuProvider>
        <Header />
        <div
          className={cls(
            'flex mx-auto max-w-8xl',
            visible && 'max-h-screen overflow-hidden',
          )}
        >
          <Aside />
          <main className="flex-1 pt-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">{children}</div>
          </main>
        </div>
        <Footer />
      </MenuProvider>
    </MenuContext.Provider>
  );
};

export default Layout;
