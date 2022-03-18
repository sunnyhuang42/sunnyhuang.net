import { Base } from './types';

export const base: Base = {
  title: '黄姗',
  description: '记录分享令人「健康蓬勃 温暖从容」的工具方法',
  url: 'https://sunnyhuang.net',
  logo: 'https://ishanshan.zoomquiet.top/share/ishanshan1409-2.png?imageView2/2/w/400',
  algolia: {
    appId: 'KNPXZI5B0M',
    apiKey: '5fc87cef58bb80203d2207578309fab6',
    indexName: 'tailwindcss',
  },
  socialLinks: [
    { icon: 'github', link: 'https://github.com/ishanshan' },
    { icon: 'rss', link: '/feed' },
  ],
  highlights: [
    '/cmty/tips_MBOKRframe',
    '/selfedu/TipsWeekly',
    '/selfedu/HbOutputWorkFlowy',
    '/wr/HbOutputbyCards',
    '/selfedu/RevFacialGrowth',
  ],
  license: {
    text: 'CC BY-NC 4.0 协议',
    link: 'https://creativecommons.org/licenses/by-nc/4.0/deed.zh',
  },
  copyright: `Copyright © 2015-${new Date().getFullYear()} 黄姗`,
};
