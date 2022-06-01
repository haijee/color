import { defineConfig } from 'dumi';

export default defineConfig({
  title: '🎨 react-color-lite',
  base: '/color',
  // favicon: '',
  // logo: ' ',
  outputPath: 'docs-dist',
  publicPath: process.env.NODE_ENV === 'production' ? '/color/' : '/',
  mode: 'site',
  // more config: https://d.umijs.org/config
});
