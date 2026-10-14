import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { CATEGORIES } from './lib/site';

const slugs = CATEGORIES.map((c) => c.slug) as [string, ...string[]];

const postSchema = ({ image }: { image: any }) =>
  z.object({
    lang: z.enum(['no', 'tr']),
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.enum(slugs),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    ageRange: z.string().default('6-10'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    why_matters: z.string().optional(),
    key_points: z.array(z.string()).optional(),
  });

const yazilar_no = defineCollection({
  loader: glob({ base: './src/content/yazilar/no', pattern: '**/*.md' }),
  schema: postSchema,
});

const yazilar_tr = defineCollection({
  loader: glob({ base: './src/content/yazilar/tr', pattern: '**/*.md' }),
  schema: postSchema,
});

export const collections = {
  yazilar_no,
  yazilar_tr,
};
