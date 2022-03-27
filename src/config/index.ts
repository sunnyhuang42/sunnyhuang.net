import { DocSearchProps } from '@docsearch/react';
// @ts-ignore
import config from '../../config.yml';

type LinkItem = {
  text: string;
  link: string;
};

type NavItem = {
  text: string;
  link?: string;
  items?: LinkItem[];
};

export type Navbar = NavItem[];

export type SideItem = {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: SideItem[];
};

export type Sidebar = SideItem[];

export type Config = {
  title: string;
  keywords?: string[];
  description?: string;
  url: string;
  logo?: string;
  social: {
    github?: string;
  };
  algolia: DocSearchProps;
  license: {
    text: string;
    link: string;
  };
  copyright: string;
  highlights: string[];
  navbar: Navbar;
  sidebar: Sidebar;
};

const {
  title,
  keywords,
  description,
  url,
  logo,
  algolia,
  social,
  license,
  copyright,
  highlights,
  navbar,
  sidebar,
} = config as Config;

export {
  title,
  keywords,
  description,
  url,
  logo,
  algolia,
  social,
  license,
  copyright,
  highlights,
  navbar,
  sidebar,
};
