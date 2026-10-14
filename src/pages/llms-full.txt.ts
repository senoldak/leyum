import type { APIRoute } from 'astro';
import { getPosts, postUrl } from '../lib/posts';
import { SITE, type Locale } from '../lib/site';

export const prerender = true;

export const GET: APIRoute = async () => {
  const [noPosts, trPosts] = await Promise.all([
    getPosts('no'),
    getPosts('tr'),
  ]);

  const allPosts = [...noPosts, ...trPosts].sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const top40 = allPosts.slice(0, 40);

  let output = `# Leyum - Full Content Feed (llms-full.txt)\n\n`;
  output += `> Et nysgjerrig magasin for vitebegjærlige barn og unge.\n`;
  output += `> Meraklı çocuklar ve gençler için bilim ve keşif mecmuası.\n\n`;
  output += `Last updated / Son güncelleme: ${new Date().toISOString()}\n\n`;

  for (const post of top40) {
    const locale = post.data.lang as Locale;
    const url = `${SITE.domain}${postUrl(post, locale)}`;
    output += `## ${post.data.title}\n`;
    output += `- Language / Dil: ${locale.toUpperCase()}\n`;
    output += `- URL: ${url}\n`;
    output += `- Date / Dato / Tarih: ${post.data.date.toISOString().split('T')[0]}\n`;
    output += `- Category / Kategori: ${post.data.category}\n`;
    output += `- Age Range / Målgruppe / Yaş Grubu: ${post.data.ageRange}\n`;
    if (post.data.description) {
      output += `- Description / Açıklama: ${post.data.description}\n`;
    }
    if (post.data.why_matters) {
      output += `- Why It Matters / Hvorfor det er spennende / Neden Büyüleyici: ${post.data.why_matters}\n`;
    }
    if (post.data.key_points && post.data.key_points.length > 0) {
      output += `- Key Points / Viktige fakta / Önemli Noktalar: ${post.data.key_points.join('; ')}\n`;
    }
    output += `\n`;
  }

  return new Response(output, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
