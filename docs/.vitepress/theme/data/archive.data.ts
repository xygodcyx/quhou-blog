// archive.data.ts
import { createContentLoader } from 'vitepress'

interface TypeArchiveData {
  url: string
  title: string
  date: string
  dateTime: number
}
export interface TypeArchive {
  year: string
  posts: TypeArchiveData[]
}

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
    const result: TypeArchive[] = []
    for (const year of years) {
      result.push({
        year,
        posts: yearMap[year].sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()).map(post => {
          const date = new Date(post.frontmatter.date)
          const dateText = `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
          return {
            url: post.url,
            title: post.frontmatter.title,
            date: dateText,
            dateTime: date.getTime(),
          }
        })
      })
    }
    return result
  }
})
