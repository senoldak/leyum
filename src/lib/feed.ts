import rss from '@astrojs/rss';
import { SITE, type Locale, getCategory } from './site';
import { getPosts, postUrl } from './posts';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

export async function feed(locale: Locale, selfPath: string) {
  const posts = await getPosts(locale);
  const loc = SITE.locales[locale];
  const siteUrl = SITE.domain;

  return rss({
    title: `${SITE.name} (${locale.toUpperCase()}) — ${loc.tagline}`,
    description: loc.description,
    site: siteUrl,
    xmlns: {
      atom: 'http://www.w3.org/2005/Atom',
      media: 'http://search.yahoo.com/mrss/',
    },
    items: posts.slice(0, 50).map((post) => {
      const cat = getCategory(post.data.category);
      const url = new URL(postUrl(post, locale), siteUrl).href;
      const imageUrl = new URL(post.data.cover || '/og-default.png', siteUrl).href;
      return {
        title: post.data.title,
        pubDate: post.data.date,
        description: post.data.description,
        link: url,
        categories: cat ? [cat.title[locale]] : [],
        customData: `<media:content url="${esc(imageUrl)}" medium="image" type="image/png" width="1200" height="630"/>`,
      };
    }),
    customData: `<language>${loc.localeTag}</language><atom:link href="${new URL(selfPath, siteUrl).href}" rel="self" type="application/rss+xml"/>`,
  });
}
