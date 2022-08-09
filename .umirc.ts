import { defineConfig } from 'dumi';

export default defineConfig({
  title: '🎨 react-color-lite',
  base: '/react-color-lite',
  // favicon: '',
  // logo: ' ',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/color/' : '/',
  mode: 'site',
  // more config: https://d.umijs.org/config
  navs: [
    null,
    {
      title: '更新日志',
      path: 'https://github.com/haijee/color/releases/',
    },
    {
      title: 'Github',
      path: 'https://github.com/haijee/color/',
    },
  ],
});
