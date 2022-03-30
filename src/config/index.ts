import { DocSearchProps } from '@docsearch/react';
// @ts-ignore
import config from '../../config.yml';
import { getFlatSidebar, getPrevNextMap } from '@/utils';

export type LinkItem = {
  id: string;
  text: string;
  link: string;
};

type NavItem = {
  text: string;
  link?: string;
  items?: LinkItem[];
};

export type PrevNextItem = {
  id: string;
  prev?: Omit<LinkItem, 'id'>;
  next?: Omit<LinkItem, 'id'>;
};

export type PostPrevNextMap = Record<string, PrevNextItem[]>;

export type Navbar = NavItem[];

export type SideItem = {
  id: string;
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
  ad: {
    postBottom?: string;
  };
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
  ad,
  navbar,
  sidebar,
} = config as Config;

export const isClient = typeof window !== 'undefined';

export const postPrevNextMap = getPrevNextMap(getFlatSidebar(sidebar));

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
  ad,
  navbar,
  sidebar,
};
