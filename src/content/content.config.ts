import { defineCollection, z } from 'astro:content'

const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).optional(),
        categories: z.array(z.string()).optional(),
        draft: z.boolean().optional().default(false),
        lastModified: z.string().optional(),
    })
})

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        stack: z.array(z.string()).optional(),
        open: z.boolean().optional().default(true),
        github: z.string().optional(),
        site: z.string().optional(),
        order: z.number().optional().default(99),
    })
})

export const collections = { posts, projects }
