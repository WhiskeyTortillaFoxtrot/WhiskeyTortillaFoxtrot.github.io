import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thetonyweapon.github.io',
  base: '/wtfdev-site',
  integrations: [sitemap()],
});
