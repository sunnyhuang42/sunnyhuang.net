import { DocSearchProps } from '@docsearch/react';

type SocialLink = {
  icon: 'rss' | 'github';
  link: string;
};

export type Base = {
  title?: string;
  description?: string;
  logo?: string;
  algolia: DocSearchProps;
  socialLinks: SocialLink[];
  license: {
    text: string;
    link: string;
  };
  copyright: string;
};

type LinkItem = {
  text: string;
  link: string;
};

type NavItem =
  | LinkItem
  | {
      text: string;
      items: LinkItem[];
    };

export type Navbar = NavItem[];

type SideItem =
  {
    text: string;
    link?: string;
    collapsed?: boolean;
    items?: LinkItem[];
  };

export type Sidebar = SideItem[];
