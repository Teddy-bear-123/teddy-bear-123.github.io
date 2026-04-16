import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const posts = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional().default([]),
        categories: z.array(z.string()).optional().default([]),
        draft: z.boolean().optional().default(false),
        lastModified: z.string().optional(),
    })
})

const projects = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
    schema: z.object({
        name: z.string(),
        tags: z.array(z.string()).optional().default([]),
        features: z.array(z.string()).optional().default([]),
        languages: z.array(z.string()).optional().default([]),
        github: z.string().optional(),
        order: z.number().optional().default(99),
        thumbnail: z.string().optional(), // TODO 2 — implement later
        // Research fields
        venue: z.string().optional(),
        authors: z.string().optional(),
        link: z.string().optional(),
    })
})

const about = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/about" }),
    schema: z.object({
        title: z.string().optional(),
    })
})

export const collections = { posts, projects, about }
