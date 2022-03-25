import Link from 'next/link';
import { title, logo } from 'config';
import { Social, Navbar, Search } from '@/components';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 h-14 border-b bg-blur">
      <div className="mx-auto flex h-full w-full max-w-8xl items-center justify-between px-4">
        <Link href="/">
          <a className="flex items-center hover:opacity-70">
            {logo && (
              <img
                src={logo}
                alt="logo"
                className="mr-2 w-8 rounded-full dark:brightness-90"
              />
            )}
            <div className="hidden font-medium md:block">{title}</div>
          </a>
        </Link>
        <Navbar />
        <div className="flex items-center space-x-0.5 lg:space-x-8">
          <Search />
          <Social className="hidden md:flex" />
        </div>
      </div>
    </header>
  );
};

export default Header;
