import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    kind: z.enum(['log', 'essay', 'tutorial', 'fanwork']),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    fandom: z.string().optional(),
    contentNote: z.string().optional(),
  }),
});

const fiction = defineCollection({
  loader: glob({ base: './src/content/fiction', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    kind: z.enum(['original', 'fanwork']).optional(),
    fandom: z.string().optional(),
    contentNote: z.string().optional(),
    status: z.enum(['ongoing', 'completed', 'hiatus']).optional(),
    series: z.string().optional(),
    chapter: z.number().nonnegative().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    kind: z.enum(['game', 'site', 'tool', 'experiment']),
    status: z.enum(['active', 'complete', 'paused', 'archived']).default('active'),
    tags: z.array(z.string()).default([]),
    demoUrl: z.string().url().or(z.string().startsWith('/')),
    sourceUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles, fiction, projects };
