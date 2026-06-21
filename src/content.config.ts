import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog posts — Markdown migrated from the WordPress site. File name = URL slug
// (preserved 1:1 for SEO; posts render at the site root, e.g. /<slug>/).
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    excerpt: z.string(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    category: z.string().default('Marketing'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
