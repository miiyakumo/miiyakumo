import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://miiyakumo.github.io',
  base: process.env.SITE_BASE_PATH || '/',
  trailingSlash: 'always',
});
