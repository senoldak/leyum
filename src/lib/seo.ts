// Arama motorları için ortak yapılandırılmış veri (schema.org JSON-LD) yardımcıları.
import { SITE, type Locale, getCategory } from './site';
import { postUrl, categoryUrl, type PostEntry } from './posts';

export const SITE_URL = 'https://leyum.com';
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export function siteGraph(locale: Locale) {
  const loc = SITE.locales[locale];
  return [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: SITE.name,
      url: `${SITE_URL}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon-512.png`,
        width: 512,
        height: 512,
      },
      publishingPrinciples: `${SITE_URL}/${locale}/redaksjon/`,
      inLanguage: ['nb', 'tr'],
    },
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: SITE.name,
      url: `${SITE_URL}/`,
      description: loc.description,
      inLanguage: ['nb', 'tr'],
      publisher: { '@id': ORG_ID },
    },
  ];
}

export function breadcrumbs(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function articleGraph(post: PostEntry, locale: Locale) {
  const loc = SITE.locales[locale];
  const pageUrl = `${SITE_URL}${postUrl(post, locale)}`;
  const cat = getCategory(post.data.category);
  const imageUrl = post.data.cover
    ? new URL(post.data.cover, SITE_URL).href
    : `${SITE_URL}/og-default.png`;

  return [
    {
      '@type': 'Article',
      '@id': `${pageUrl}#article`,
      headline: post.data.title,
      description: post.data.description,
      image: [imageUrl],
      datePublished: post.data.date.toISOString(),
      dateModified: post.data.date.toISOString(),
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      url: pageUrl,
      ...(cat ? { articleSection: cat.title[locale] } : {}),
      inLanguage: loc.code === 'no' ? 'nb' : 'tr',
      isAccessibleForFree: true,
      isPartOf: { '@id': WEBSITE_ID },
    },
    breadcrumbs([
      { name: SITE.name, url: `${SITE_URL}/${locale}/` },
      ...(cat ? [{ name: cat.title[locale], url: `${SITE_URL}${categoryUrl(cat.slug, locale)}` }] : []),
      { name: post.data.title, url: pageUrl },
    ]),
  ];
}

export function collectionGraph(slug: string, locale: Locale, posts: PostEntry[]) {
  const cat = getCategory(slug);
  const catName = cat ? cat.title[locale] : slug;
  const pageUrl = `${SITE_URL}${categoryUrl(slug, locale)}`;

  return [
    {
      '@type': 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: catName,
      description: cat?.desc[locale] ?? '',
      inLanguage: locale === 'no' ? 'nb' : 'tr',
      isPartOf: { '@id': WEBSITE_ID },
      publisher: { '@id': ORG_ID },
      ...(posts.length > 0
        ? {
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: posts.slice(0, 20).map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_URL}${postUrl(p, locale)}`,
              })),
            },
          }
        : {}),
    },
    breadcrumbs([
      { name: SITE.name, url: `${SITE_URL}/${locale}/` },
      { name: catName, url: pageUrl },
    ]),
  ];
}
