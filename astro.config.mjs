// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://leyum.com',
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: 'no',
    locales: ['no', 'tr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const p = new URL(page).pathname;
        return !p.startsWith('/admin') && !p.startsWith('/404');
      },
    }),
  ],
  // CSP (public/_headers) satır içi stile izin vermez; tüm CSS ayrı dosya olarak yüklenir.
  build: { inlineStylesheets: 'never' },
});
