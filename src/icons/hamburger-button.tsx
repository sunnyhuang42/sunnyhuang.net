import { FC } from 'react';
import cn from 'clsx';

const line = `h-0.5 w-5 my-0.5 rounded-full bg-black transition ease transform duration-300`;

const HamburgerButton: FC<{ open?: boolean }> = ({ open }) => {
  return (
    <button className="group flex h-10 flex-col items-center justify-center">
      <div
        className={cn(
          line,
          open
            ? 'translate-y-1.5 rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100',
        )}
      />
      <div
        className={cn(
          line,
          open ? 'opacity-0' : 'opacity-50 group-hover:opacity-100',
        )}
      />
      <div
        className={cn(
          line,
          open
            ? '-translate-y-1.5 -rotate-45 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100',
        )}
      />
    </button>
  );
};

export default HamburgerButton;
