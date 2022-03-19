import type { Navbar } from './types';

export const navbar: Navbar = [
  {
    text: '进阶服务',
    items: [
      {
        text: '人生·敏捷迭代营',
        link: '/flourish/f_grow',
      },
      {
        text: '以终为始·工作坊',
        link: '/flourish/f_grow?id=workshop',
      },
    ],
  },
  {
    text: '主题实践手记',
    items: [
      {
        text: '蓬勃人生',
        link: '/cmty',
      },
      {
        text: '写作',
        link: '/wr',
      },
      {
        text: '面部健康生长',
        link: '/selfedu/RevFacialGrowth',
      },
      {
        text: '产品策划开发',
        link: '/devpdt',
      },
      {
        text: '摇摆舞（Swing）',
        link: '/swing',
      },
      {
        text: '协作共创/组织发展',
        link: 'https://github.com/ishanshan/CollaborationGuide4Shaper',
      },
    ],
  },
  {
    text: '关于',
    items: [
      {
        text: '个人简介',
        link: '/about',
      },
      {
        text: '发展规划',
        link: '/about/plan_lifedev',
      },
      {
        text: '个人小传',
        link: '/about/lifestory2203',
      },
      {
        text: '约我时间',
        link: '/about/booking',
      },
      {
        text: '关爱家人行动清单',
        link: '/family/TipsCare4Parents',
      },
    ],
  },
];
