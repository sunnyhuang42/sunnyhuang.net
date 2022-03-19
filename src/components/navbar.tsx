import { useState, useEffect, Fragment, FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cls from 'clsx';
import { navbar } from 'config';
// import { ArrowDown, ArrowRightUp } from '@/components/icon';
import { isUrl } from '@/utils';

const NavLink: FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a {...(isUrl(href) ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}
      {/*<ArrowRightUp className="inline-block ml-1 text-secondary" />*/}
    </a>
  </Link>
);

//  overflow-x-scroll  hidden group-hover:block

const Navbar = () => {
  const [key, setKey] = useState('');

  const { asPath } = useRouter();

  useEffect(() => {
    setKey('');
  }, [asPath]);

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
                onMouseLeave={() => setKey('')}
              >
                <span className="whitespace-nowrap cursor-pointer">
                  {i.text}
                  {/*<ArrowDown className="inline-block ml-1" />*/}
                </span>
                <div
                  className={cls(
                    'absolute z-50 md:left-auto w-max',
                    key === i.text ? 'block' : 'hidden',
                  )}
                  onClick={() => setKey('')}
                >
                  <ul className="flex flex-col space-y-3 px-4 py-3 rounded-md shadow-lg bg-primary border">
                    {i.items.map((ii) => (
                      <li
                        key={ii.text}
                        className="font-normal hover:text-accent"
                      >
                        <NavLink href={ii.link}>{ii.text}</NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li className="whitespace-nowrap hover:text-accent">
                <NavLink href={i.link || ''}>{i.text}</NavLink>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
