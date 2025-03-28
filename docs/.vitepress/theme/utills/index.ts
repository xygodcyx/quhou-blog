import type { Ref } from 'vue'

export function getSummary(
  input: { content: string; title: string },
  output: Ref<string>
): void {
  return
  const params = new URLSearchParams()
  params.set('content', input.content)
  params.set('key', 'WiLGSwUJ0b5')
  params.set('url', location.href)
  params.set('title', input.title)
  params.set('user_openid', '1787')
  const headers = new Headers()
  headers.set('Referer', location.origin)
  headers.set('Content-Type', 'application/json')
  fetch(`https://summary.tianli0.top`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      key: 'WiLGSwUJ0b5',
      content: input.content,
      url: location.href,
      title: input.title,
      user_openid: '1787'
    })
  })
    .then((res) => res.json())
    .then((data) => {
      output.value = data.summary
    })
    .catch((err) => {
      console.error(err)
      output.value = '获取摘要失败'
    })
}

export type TPDateInfo = {
  year: number
  month: number
  week: number
  day: number
  hour: number
  minute: number
  second: number
}

type TFormatterFn = (dateInfo: TPDateInfo) => string
type TFormatter = TFormatterFn | string
type TDate = string | Date

export function formatDate(
  date: TDate,
  formatter: string | TFormatter,
  isPad = true
) {
  function _formatDate(date: TDate) {
    if (typeof date == 'object') {
      return date
    }
    date = new Date(date)
    return date
  }
  function _formatNormalize(formatter): TFormatterFn {
    if (typeof formatter === 'function') {
      return formatter
    } else if (typeof formatter !== 'string') {
      throw new Error('formatter必须为函数或字符串')
    }

    return (dateInfo: TPDateInfo): string => {
      const { year, month, week, day, hour, minute, second } = dateInfo
      return formatter
        .replace(/yyyy/g, year.toString())
        .replace(/MM/g, month.toString())
        .replace(/ww/g, week.toString())
        .replace(/dd/g, day.toString())
        .replace(/hh/g, hour.toString())
        .replace(/mm/g, minute.toString())
        .replace(/ss/g, second.toString())
    }
  }
  function _pad(value: number | string, length) {
    if (typeof value === 'number') {
      value = value.toString()
    }
    return value.padStart(length, '0')
  }
  function _padAll<T>(obj: object, seq: number[]) {
    let i = 0
    for (const k in obj) {
      const value = obj[k]
      obj[k] = _pad(value, seq[i])
      i++
    }
    return obj as T
  }

  date = _formatDate(date)
  formatter = _formatNormalize(formatter)

  let dateInfo: TPDateInfo = {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    week: date.getDay(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
  if (isPad) {
    dateInfo = _padAll(dateInfo, [4, 2, 1, 2, 2, 2, 2])
  }

  return formatter(dateInfo)
}
