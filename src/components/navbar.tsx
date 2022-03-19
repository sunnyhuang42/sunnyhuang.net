import { useState, useEffect, useCallback, Fragment } from 'react';
import cls from 'clsx';
import Link from 'next/link';
import { navbar } from 'config';
import { ArrowRightUp } from '@/components/icon';
import { isUrl } from '@/utils';

const Item = ({ text = '', link = '' }) => {
  const isExternal = isUrl(link);
  return (
    <Link href={link}>
      <a {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}>
        <span dangerouslySetInnerHTML={{ __html: text }} />
        {isExternal && (
          <ArrowRightUp className="inline-block ml-1 text-secondary" />
        )}
      </a>
    </Link>
  );
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
      <ul className="flex space-x-3 px-2 lg:space-x-6 text-sm font-medium">
        {navbar.map((i) => (
          <Fragment key={i.text}>
            {i.items ? (
              <li
                className="relative"
                onClick={() => setKey(i.text)}
                onMouseEnter={() => setKey(i.text)}
                onMouseLeave={hide}
              >
                <span className="whitespace-nowrap cursor-pointer">
                  {i.text}
                </span>
                <div
                  className={cls(
                    'absolute z-50 md:left-auto w-max',
                    key === i.text ? 'block' : 'hidden',
                  )}
                >
                  <ul className="flex flex-col space-y-3 px-4 py-3 rounded-md shadow-lg bg-primary border">
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
