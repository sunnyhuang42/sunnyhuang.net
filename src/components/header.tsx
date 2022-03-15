import Link from 'next/link';
import { title, logo } from 'config';
import { useMenu } from '@/context/menu';
import { Menu, Close } from './icon';
import NavBar from './navbar';
import Search from './search';
import Actions from './actions';

const Header = () => {
  const [visible, { toggle }] = useMenu();
  return (
    <header className="sticky top-0 z-50 h-12 lg:h-14 border-b bg-blur">
      <div className="flex items-center justify-between max-w-8xl h-full mx-auto px-2 lg:px-0">
        <Link href="/">
          <a className="flex items-center hover:opacity-70">
            {logo && (
              <img
                src={logo}
                alt="logo"
                className="w-8 mr-2 rounded-full dark:brightness-90"
              />
            )}
            <div className="font-medium hidden md:block">{title}</div>
          </a>
        </Link>
        <NavBar />
        <div className="flex items-center space-x-0.5 lg:space-x-2">
          <Search />
          <Actions className="hidden md:flex" />
          <div
            className="p-2 rounded-full lg:hover:bg-secondary block xl:hidden"
            onClick={() => toggle()}
          >
            {visible ? <Close /> : <Menu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
