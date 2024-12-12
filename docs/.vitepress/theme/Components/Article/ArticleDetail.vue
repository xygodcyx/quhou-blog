<template>
  <div class="w-100vw flex flex-col items-center ">
    <div class="w-80% flex flex-col items-center xl:w-50%"
      ref="content">
      <h1 class="text-center mb-4">{{ frontmatter.title }}</h1>
      <div class="w-90% flex items-center gap-0.1 xl:w-90%">
        <div class="flex-auto" />
        <span>由</span>
        <span class="">{{ frontmatter.author }}</span>
        <span>作于</span>
        <span class="ml-1">{{ new Date(frontmatter.date).getFullYear() + '年' + (new Date(frontmatter.date).getMonth() +
          1) + '月' + new Date(frontmatter.date).getDate() + '日' }}</span>
      </div>
      <section class="excerpt w-full indent-4">
        {{ excerpt }}
      </section>
      <hr>
      <Content class="w-full indent-4" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { ref, onMounted } from 'vue'
const content = ref<HTMLElement>()
const { frontmatter, page, description, site } = useData()
const excerpt = ref('暂未有摘要')
onMounted(function () {
  const articleContent = content.value?.innerText.replace(/\s+/g, '')
  console.log(location)
  if (!articleContent) return
  const params = new URLSearchParams()
  params.set('content', articleContent)
  params.set('key', 'WiLGSwUJ0b5')
  params.set('url', location.href)
  const headers = new Headers()
  headers.set('Referer', location.origin)
  headers.set('EO-Debug-Headers', 'all')
  fetch(`https://summary.tianli0.top?${params.toString()}`, {
    method: "GET",
    headers
  }).then(res => res.json()).then(data => {
    excerpt.value = data.summary
  }).catch(err => {
    console.error(err)
  })

})

</script>


<style scoped></style>
