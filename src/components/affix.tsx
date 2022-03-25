import cn from 'clsx';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useModal } from '@/hooks';
import { useDrawer, usePage } from '@/context';
import { Menu, Grid, ArrowUpCircle } from '@/icons';

const scrollToTop = () => {
  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch (e) {
    window.scrollTo(0, 0);
  }
};

let scrollY = 0;

const Affix = () => {
  const [isOver, setOver] = useState(false);
  const { visible, open, close } = useModal(true);
  const { pathname } = useRouter();
  const { headings } = usePage();
  const { menu, toc } = useDrawer();
  const isPost = useMemo(() => pathname === '/[...slug]', [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const over = scrollY > 200;
      if (window.scrollY - scrollY > 0 && over) {
        close();
      } else {
        open();
      }

      ({ scrollY } = window);
      setOver(over);
    };
    document.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed right-3 bottom-10 z-30 flex flex-col space-y-4 transition-transform duration-200 text-secondary lg:right-10',
        visible ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
      )}
    >
      <div
        className="rounded-full p-2 bg-secondary lg:hidden"
        onClick={menu.open}
      >
        <Grid />
      </div>
      {isPost && (
        <div
          className={cn(
            'rounded-full p-2 bg-secondary xl:hidden',
            !headings.length && 'hidden',
          )}
          onClick={toc.open}
        >
          <Menu />
        </div>
      )}
      <div
        className={cn(
          'rounded-full p-2 bg-secondary',
          isOver ? 'visible' : 'invisible',
        )}
      >
        <ArrowUpCircle onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Affix;
