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
      <section class="excerpt w-full">
        <p class="text-sm font-italic indent-4">AI摘要：</p>
        <p class="indent-4 font-italic">{{ aiExcerpt || frontmatter.excerpt || "暂无摘要" }}</p>
      </section>
      <hr class="w-full my-2">
      <Content class="w-full indent-4 text-xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import { getSummary } from "../../utills"
const content = ref<HTMLElement>()
const { frontmatter, page, description, site } = useData()
// compouse
const aiExcerpt = ref('')
onMounted(function () {
  const articleContent = content.value?.innerText.replace(/\s+/g, '')
  if (!articleContent) return
  getSummary({ content: articleContent, title: frontmatter.value.title }, aiExcerpt)
})

</script>


<style scoped></style>
