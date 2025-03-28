// archive.data.ts
import { createContentLoader } from 'vitepress'

interface Post {
  url: string
  title: string
  date: string
  dateTime: number
}
export interface Archive {
  year: string
  posts: Post[]
}

declare const data: Archive[]
export { data }

export default createContentLoader('posts/*/*.md', {
  transform(rawData) {
    const yearMap = {}
    for (const post of rawData) {
      const year = new Date(post.frontmatter.date).getFullYear()
      if (!yearMap[year]) {
        yearMap[year] = []
      }
      yearMap[year].push(post)
    }

    // 按年份排序
    const years = Object.keys(yearMap).sort((a, b) => +b - +a)
    const result: Archive[] = []
    for (const year of years) {
      result.push({
        year,
        posts: yearMap[year]
          .sort(
            (a, b) =>
              new Date(b.frontmatter.date).getTime() -
              new Date(a.frontmatter.date).getTime()
          )
          .map((post) => {
            const date = new Date(post.frontmatter.date)
            return {
              url: post.url,
              title: post.frontmatter.title,
              date: date.getTime()
            }
          })
      })
    }
    return result
  }
})
