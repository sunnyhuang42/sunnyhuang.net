import { Fragment, FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { navbar } from 'config';
import { ArrowDown, ArrowRightUp } from '@/components/icon';
import { isUrl } from '@/utils';

const NavLink: FC<LinkProps> = ({ href, children }) => (
  <Link href={href || ''}>
    {isUrl(href) ? (
      <a target="_blank" rel="noreferrer">
        {children}
        <ArrowRightUp className="inline-block ml-1 text-secondary" />
      </a>
    ) : (
      children
    )}
  </Link>
);

const Navbar = () => (
  <nav className="flex-1 md:pl-12 overflow-x-scroll">
    <ul className="flex space-x-3 px-2 lg:space-x-6 text-sm font-medium">
      {navbar.map((i) => (
        <Fragment key={i.text}>
          {i.items ? (
            <li className="group relative">
              <span className="whitespace-nowrap cursor-pointer">
                {i.text}
                <ArrowDown className="inline-block ml-1" />
              </span>
              <div className="fixed z-50 left-20 md:left-auto w-max hidden group-hover:block">
                <ul className="flex flex-col space-y-3 px-4 py-3 rounded-md shadow-lg bg-primary border">
                  {i.items.map((ii) => (
                    <li key={ii.text} className="font-normal hover:text-accent">
                      <NavLink href={ii.link}>{ii.text}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li className="whitespace-nowrap hover:text-accent">
              <NavLink href={i.link}>{i.text}</NavLink>
            </li>
          )}
        </Fragment>
      ))}
    </ul>
  </nav>
);

export default Navbar;
