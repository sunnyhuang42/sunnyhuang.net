type Algolia = {
  appId: string;
  apiKey: string;
  indexName: string;
};

type Item = {
  text: string;
  link?: string;
  collapsed?: boolean;
  items?: Item[];
};

type NavbarItem = {
  text: string;
  link: string;
  collapsed?: boolean;
  toSidebar?: boolean;
  items?: Omit<NavbarItem, 'items'>[];
};

type Footer = {
  license: {
    text: string;
    link: string;
  };
  copyright: string;
};

export type Config = {
  title?: string;
  description?: string;
  logo?: string;
  algolia: Algolia;
  navbar: NavbarItem[];
  sidebar: (string | Item)[];
  footer: Footer;
};
