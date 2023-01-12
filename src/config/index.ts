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
  license: {
    text: string;
    link: string;
  };
  copyright: string;
  highlights: string[];
  ad: {
    postBottom?: string;
  };
  sponsor: {
    text: string;
    tips: string;
    img: string;
  };
  editLink: {
    repo: string;
    text: string;
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
  social,
  license,
  copyright,
  highlights,
  ad,
  sponsor,
  editLink,
  navbar,
  sidebar,
} = config as Config;

export const isClient = typeof window !== 'undefined';

const { flatSidebar, openKeyMap } = getFlatSidebar(sidebar);

export const postPrevNextMap = getPrevNextMap(flatSidebar);

export {
  title,
  keywords,
  description,
  url,
  logo,
  social,
  license,
  copyright,
  highlights,
  ad,
  sponsor,
  editLink,
  navbar,
  sidebar,
  openKeyMap,
};
