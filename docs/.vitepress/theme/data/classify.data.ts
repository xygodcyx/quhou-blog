// archive.data.ts
import { createContentLoader } from 'vitepress'

interface Tag {
  name: string
  count: number
}
interface Post {
  url: string
  title: string
  tags: string[]
  date: string
}

interface Classify {
  tag: Tag
  posts: Post[]
}


export default createContentLoader('posts/*/*.md', {
  transform(rawData) {
    const allTags: Tag[] = []
    const allPosts: Post[] = []
    for (const post of rawData) {
      const { tags } = post.frontmatter
      for (const tag of tags) {
        const existTag = allTags.find((t) => t.name === tag)
        if (existTag) {
          existTag.count++
        } else {
          allTags.push({ name: tag, count: 1 })
        }
      }
    }
    for (const post of rawData) {
      const { title, date, tags } = post.frontmatter
      const url = post.url
      allPosts.push({ title, date, tags, url })
    }
    const classify: Classify[] = []
    for (const tag of allTags) {
      const posts = allPosts.filter((post) =>
        post.tags.includes(tag.name)
      )
      classify.push({ tag, posts })
    }
    return classify
  }
})
