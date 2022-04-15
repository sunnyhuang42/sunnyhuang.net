import { useState, useEffect, useCallback, Fragment } from 'react';
import cls from 'clsx';
import Link from 'next/link';
import { navbar } from '@/config';
import { ArrowUpRight } from '@/icons';
import { isUrl } from '@/utils';

const Item = ({ text = '', link = '' }) => {
  const isExternal = isUrl(link);
  return link ? (
    <Link href={link}>
      <a {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
        {isExternal && (
          <ArrowUpRight className="ml-1 inline-block w-4 text-secondary" />
        )}
      </a>
    </Link>
  ) : <span dangerouslySetInnerHTML={{ __html: text }} />;
};

const Navbar = () => {
  const [key, setKey] = useState('');
  const hide = useCallback(() => setKey(''), []);

  useEffect(() => {
    document.addEventListener('click', hide);
    return () => document.removeEventListener('click', hide);
  }, []);

  return (
    <nav className="flex-1 md:pl-12">
      <ul className="flex items-center space-x-3 px-2 text-sm font-medium lg:space-x-6">
        {navbar.map((i) => (
          <Fragment key={i.text}>
            {i.items ? (
              <li
                className="relative flex h-12 items-center"
                onTouchStart={() => setKey(i.text)}
                onMouseEnter={() => setKey(i.text)}
                onMouseLeave={hide}
              >
                <span className="cursor-pointer whitespace-nowrap" dangerouslySetInnerHTML={{ __html: i.text }} />
                <div
                  className={cls(
                    'absolute top-10 z-50 w-max md:left-auto',
                    key === i.text ? 'block' : 'hidden',
                  )}
                >
                  <ul className="flex flex-col space-y-3 rounded-md border px-4 py-3 shadow-lg bg-primary">
                    {i.items.map((ii) => (
                      <li
                        key={ii.text}
                        className="font-normal hover:text-accent"
                      >
                        <Item {...ii} />
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li className="whitespace-nowrap hover:text-accent">
                <Item {...i} />
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
