import type { Ref } from "vue"

export function getSummary(input: { content: string, title: string }, output: Ref<string>): void {
  return
  const params = new URLSearchParams()
  params.set('content', input.content)
  params.set('key', "WiLGSwUJ0b5")
  params.set('url', location.href)
  params.set('title', input.title)
  params.set('user_openid', "1787")
  const headers = new Headers()
  headers.set('Referer', location.origin)
  headers.set('Content-Type', 'application/json')
  fetch(`https://summary.tianli0.top`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      "key": "WiLGSwUJ0b5",
      "content": input.content,
      "url": location.href,
      "title": input.title,
      "user_openid": "1787"
    })
  }).then(res => res.json()).then(data => {
    output.value = data.summary
  }).catch(err => {
    console.error(err)
    output.value = '获取摘要失败'
  })

}
