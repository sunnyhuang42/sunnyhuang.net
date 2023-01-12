import Link from 'next/link';
import cn from 'clsx';
import { title, logo } from '@/config';
import { useModal } from '@/hooks';
import { Search, Close } from '@/icons';
import { Social, Navbar } from '@/components';
import { Flexsearch } from '@/components/flexsearch';

const Header = () => {
  const { visible, toggle, close, open } = useModal();
  const Icon = visible ? Close : Search;
  return (
    <>
      <header className="sticky top-0 z-30 h-14 border-b bg-blur">
        <div className="mx-auto flex h-full w-full max-w-10xl items-center justify-between px-4">
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
            <div
              className={cn(
                'fixed left-0 w-full pl-3 pr-10 transition-transform md:relative md:p-0',
                visible ? '' : '-translate-x-full md:translate-x-0',
              )}
            >
              <Flexsearch onFinish={close} />
            </div>
            <Icon className="z-10 block md:hidden" onClick={() => toggle()} />
            <Social className="hidden md:flex" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
