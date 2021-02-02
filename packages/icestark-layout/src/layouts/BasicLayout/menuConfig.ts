const headerMenuConfig = [];
const baseUrl = (process.env.NODE_ENV === "development" ? "" : "/icestark-demo")
const asideMenuConfig = [
  {
    name: 'Home',
    path: baseUrl + '/',
    icon: 'chart-pie',
  },
  {
    name: 'About',
    path: baseUrl + '/about',
    icon: 'chart-pie',
  },
  {
    name: 'Login',
    path: baseUrl + '/login',
    icon: 'account',
  },
  {
    name: 'Angular',
    icon: 'set',
    children: [
      {
        path: baseUrl + '/angular',
        name: 'router contact',
      },
      {
        path: baseUrl + '/angular/detail',
        name: 'router detail',
      },
    ],
  },
  {
    name: '商家平台',
    icon: 'atm',
    children: [
      {
        path: baseUrl + '/seller',
        name: '商家首页',
      },
      {
        path: baseUrl + '/seller/list',
        name: '商家列表',
      },
      {
        path: baseUrl + '/seller/detail',
        name: '商家详情',
      },
      {
        path: baseUrl + '/seller/404',
        name: '商家 404',
      },
    ],
  },
  {
    name: '小二平台',
    icon: 'account',
    children: [
      {
        path: baseUrl + '/waiter',
        name: '小二首页',
      },
      {
        path: baseUrl + '/waiter/list',
        name: '小二列表',
      },
      {
        path: baseUrl + '/waiter/detail',
        name: '小二详情',
      },
      {
        path: baseUrl + '/waiter/404',
        name: '小二 404',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
