<template>
  <div class="w-100vw flex justify-center items-start mb-20">
    <div class="w-90% flex flex-col items-center xl:w-70%" ref="content">
      <h1 class="text-center text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
        {{ frontmatter.title }}
      </h1>
      <div class="w-90% flex items-center gap-0.1 lg:w-90%">
        <div class="flex-auto" />
        <span>由</span>
        <span class="text-1.5rem">{{ frontmatter.author }}</span>
        <span>作于</span>
        <p class="ml-1">
          <span class="text-1.2rem">{{
            new Date(frontmatter.date).getFullYear()
          }}</span>
          <span>年</span>
          <span class="text-1.2rem">{{
            new Date(frontmatter.date).getMonth() + 1
          }}</span>
          <span>月</span>
          <span class="text-1.2rem">
            {{ new Date(frontmatter.date).getDate() }}
          </span>
          <span>日</span>
          <button @click="back" class="text-6 border-1 border-dotted p-1">
            返
          </button>
        </p>

        <GoTop />
      </div>
      <section class="excerpt w-full">
        <p class="text-xl indent-4">AI摘要：</p>
        <q class="indent-2 text-xl">{{
          aiExcerpt || frontmatter.excerpt || '暂无摘要'
        }}</q>
      </section>
      <hr class="w-full my-2" />
      <Content class="w-full indent-6 text-2xl" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import { getSummary } from '../../utills'
import GoTop from '../GoTop.vue'
const content = ref<HTMLElement>()
const { frontmatter } = useData()
// compouse
const aiExcerpt = ref('')
function back() {
  if (typeof window !== 'undefined') {
    window.history.back()
  }
}

onMounted(function () {
  const articleContent = content.value?.innerText.replace(/\s+/g, '')
  if (!articleContent) return
  getSummary(
    { content: articleContent, title: frontmatter.value.title },
    aiExcerpt
  )
})
</script>

<style scoped></style>
