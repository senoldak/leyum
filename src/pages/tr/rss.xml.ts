import type { APIContext } from 'astro';
import { feed } from '../../lib/feed';

export async function GET(context: APIContext) {
  return feed('tr', '/tr/rss.xml');
}
