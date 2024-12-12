// posts.data.ts
import { createContentLoader } from 'vitepress'

export interface TypeArticle {
  url: string
  title: string
  date: string
  dateTime: number
  author: string
  tags: string[]
  excerpt: string
}

export default createContentLoader('posts/*/*.md', {
  excerpt: true,
  render: false,
  includeSrc: true,
  transform(rawData) {
    // 根据需要对原始数据进行 map、sort 或 filter
    // 最终的结果是将发送给客户端的内容
    return rawData.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date) > 0 ? -1 : 1
    }).map(item => {
      const date = new Date(item.frontmatter.date)
      const dateText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
      console.log(item.excerpt)
      return {
        url: item.url,
        title: item.frontmatter.title,
        author: item.frontmatter.author,
        date: dateText,
        dateTime: date.getTime(),
        tags: item.frontmatter.tags,
        excerpt: item.excerpt,
      }
    })
  }
})
