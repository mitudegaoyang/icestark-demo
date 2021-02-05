import * as React from 'react';
import { runApp, IAppConfig } from 'ice';
import { ConfigProvider } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

localStorage.baseUrl || localStorage.setItem("baseUrl", process.env.NODE_ENV === "development" ? "" : "/icestark-demo")
const baseUrl = localStorage.baseUrl

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => (
      <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>
    ),
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      /**
       * 官方微应用注册生命周期已变更为 UMD 导出，配置时请开启 umd：
       * {
       *  path: '/seller',
       *  title: '标题',
       *  umd: true,
       *  url: ['./js/index.js', './css/index.css']
       * }
       * 如果不希望以 umd 导出，请修改微应用 build.json 配置，移除 { "umd": true } 配置即可
       * {
       *  "plugins": ["build-plugin-icestark", { "umd": true }]
       * }
       */
      const apps = [{
        path: baseUrl + '/seller',
        title: '商家平台',
        sandbox: true,
        umd: true,
        // React app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-seller-react-16
        url: [
          // '//ice.alicdn.com/icestark/child-seller-react/index.js',
          // '//ice.alicdn.com/icestark/child-seller-react/index.css',
          // '//localhost:3334/js/index.js',
          // '//localhost:3334/css/index.css',
          // '//www.gaotianyang.top/icestark-seller/js/index.js',
          // '//www.gaotianyang.top/icestark-seller/css/index.css',
          '//www.gaotianyang.top/icestark-demo/subapp/icestark-child-icejs/js/index.js',
          '//www.gaotianyang.top/icestark-demo/subapp/icestark-child-icejs/css/index.css',
        ],
      }, {
        path: baseUrl + '/waiter',
        title: '小二平台',
        sandbox: true,
        // url: [
        //   // Vue app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-waiter-vue-2
        //   // '//ice.alicdn.com/icestark/child-waiter-vue/app.js',
        //   // '//ice.alicdn.com/icestark/child-waiter-vue/app.css',
        //   '//localhost:3001/static/js/bundle.js',
        // ]
        // entry: '//localhost:3000/',
        // entry: '//www.gaotianyang.top/icestark-waiter/build/index.html',
        entry: '//www.gaotianyang.top/icestark-demo/subapp/icestark-child-react/index.html',
      }, {
        path: baseUrl + '/angular',
        title: 'Angular',
        sandbox: true,
        // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular-9
        entry: '//ice.alicdn.com/icestark/child-common-angular/index.html',
      }];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
};

runApp(appConfig);
