import Link from 'next/link';
import { title, logo } from 'config';
import { Menu, Close } from './icon';
import NavBar from './navbar';
import Search from './search';
import Actions from './actions';
import { useBoolean } from '@/hooks';

const Header = () => {
  const [visible, actions] = useBoolean();
  return (
    <header className="sticky top-0 z-50 h-12 lg:h-14 border-b bg-blur">
      <div className="flex items-center justify-between max-w-6xl h-full mx-auto px-3 lg:px-0">
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
          <Actions className="hidden md:flex" />
          <Search />
          <div
            className="p-2 rounded-full lg:hover:bg-secondary block lg:hidden"
            onClick={() => actions.toggle()}
          >
            {visible ? <Close /> : <Menu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
