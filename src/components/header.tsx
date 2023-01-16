import { MutableRefObject } from 'react';
import Link from 'next/link';
import { title, logo } from '@/config';
import { useModal } from '@/hooks';
import { Search } from '@/icons';
import { Social, Navbar, Drawer } from '@/components';
import { Flexsearch } from '@/components/flexsearch';

let input: MutableRefObject<HTMLInputElement | null>;
const Header = () => {
  const { visible, close, open } = useModal();
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
            <Flexsearch className="hidden md:block" />
            <Search
              className="z-10 block md:hidden"
              onClick={() => {
                // TODO: focus input
                // input?.current?.focus();
                open();
              }}
            />
            <Social className="hidden md:flex" />
          </div>
        </div>
      </header>
      <Drawer
        className="visible h-full rounded-tl-none rounded-tr-none md:invisible"
        visible={visible}
      >
        <div className="flex p-2">
          <Flexsearch
            className="flex-1"
            onFinish={close}
            onMounted={(ref) => {
              input = ref;
            }}
          />
          <button className="ml-2 text-sm text-accent" onClick={close}>
            取消
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
