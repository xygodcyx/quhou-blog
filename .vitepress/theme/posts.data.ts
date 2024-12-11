// posts.data.js
import { createContentLoader } from 'vitepress'

export interface TypeArticle {
  url: string
  title: string
  date: string
  author: string
  tags: string[]
  excerpt: string
}

export default createContentLoader('posts/*/*.md', {
  transform(rawData) {
    // 根据需要对原始数据进行 map、sort 或 filter
    // 最终的结果是将发送给客户端的内容
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date) > 0 ? -1 : 1
    }).map(item => {
      return {
        url: item.url,
        title: item.frontmatter.title,
        author: item.frontmatter.author,
        date: item.frontmatter.date,
        tags: item.frontmatter.tags,
        excerpt: item.excerpt,
      }
    })
  }
})
