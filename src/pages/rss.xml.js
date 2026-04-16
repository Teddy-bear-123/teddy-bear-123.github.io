import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import { PandaConfig } from '../config.js'
const { site, description, title } = PandaConfig

export const prerender = true

const parser = new MarkdownIt()

export async function GET() {
    const posts = await getCollection('posts', ({ data }) => !data.draft && !!data.title)
    const items = posts
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
        .map((post) => ({
            ...post.data,
            pubDate: post.data.pubDate,
            link: `/posts/${post.slug}/`,
            content: parser.render(post.body),
        }))

    return new Response(
        (await rss({ site, title, description, items })).body,
        { headers: { 'content-type': 'application/xml' } }
    )
}
