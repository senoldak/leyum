import { getCollection, type CollectionEntry } from 'astro:content';
import { CATEGORIES, type Locale, type CategorySlug } from './site';

export type PostEntry = CollectionEntry<'yazilar_no'> | CollectionEntry<'yazilar_tr'>;

export async function getPosts(locale: Locale): Promise<PostEntry[]> {
  const collectionName = locale === 'no' ? 'yazilar_no' : 'yazilar_tr';
  const all = await getCollection(collectionName, ({ data }) => import.meta.env.DEV || !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getActiveCategories(locale: Locale) {
  const posts = await getPosts(locale);
  const used = new Set(posts.map((p) => p.data.category));
  return CATEGORIES.filter((c) => used.has(c.slug));
}

export function postUrl(post: PostEntry, locale: Locale) {
  return `/${locale}/icerik/${post.id}/`;
}

export function categoryUrl(categorySlug: string, locale: Locale) {
  return `/${locale}/kategori/${categorySlug}/`;
}
