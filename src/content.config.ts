import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const base = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	updated: z.coerce.date().optional(),
	tags: z.array(z.string()).default([]),
	draft: z.boolean().default(false),
});

const loader = (folder: string) =>
	glob({ base: `./src/content/${folder}`, pattern: '**/*.{md,mdx}' });

export const collections = {
	interviews: defineCollection({
		loader: loader('interviews'),
		schema: base.extend({
			company: z.string(),
			role: z.string().optional(),
			outcome: z.enum(['offer', 'rejected', 'withdrawn', 'pending']).optional(),
		}),
	}),
	sports: defineCollection({
		loader: loader('sports'),
		schema: base.extend({
			sport: z.string(),
			team: z.string().optional(),
		}),
	}),
	travel: defineCollection({
		loader: loader('travel'),
		schema: base.extend({
			location: z.string(),
			country: z.string().optional(),
		}),
	}),
	learnings: defineCollection({
		loader: loader('learnings'),
		schema: base.extend({
			topic: z.string().optional(),
		}),
	}),
};
