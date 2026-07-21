import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import linkValidator from 'astro-link-validator';

export default defineConfig({
  site: 'https://whiskeytortillafoxtrot.github.io',
  base: '/',
  integrations: [sitemap(), linkValidator()],
});
