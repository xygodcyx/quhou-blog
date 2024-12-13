<template>
  <div class="w-100vw flex justify-center items-start ">
    <div class="w-100vw flex justify-center items-start position-relative">

      <div class="w-80% flex flex-col items-center xl:w-70%"
        ref="content">
        <h1 class="text-center mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{{ frontmatter.title }}</h1>
        <div class="w-90% flex items-center gap-0.1 lg:w-90%">
          <div class="flex-auto" />
          <span>由</span>
          <span class="">{{ frontmatter.author }}</span>
          <span>作于</span>
          <span class="ml-1">{{ new Date(frontmatter.date).getFullYear() + '年' + (new
            Date(frontmatter.date).getMonth() +
            1) + '月' + new Date(frontmatter.date).getDate() + '日' }}</span>
        </div>
        <section class="excerpt w-full">
          <p class="text-sm indent-4">AI摘要：</p>
          <q class="indent-4">{{ aiExcerpt || frontmatter.excerpt || "暂无摘要" }}</q>
        </section>
        <hr class="w-full my-2">
        <Content class="w-full indent-4 text-xl" />
      </div>
      <button @click="back"
        class="mt-4 underline text-xl underline-blueGray underline-offset-4 underline-from-font">
        <= </button>
          <GoTop />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
import { ref, onMounted } from 'vue'
import { getSummary } from "../../utills"
import GoTop from "../GoTop.vue"
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
  getSummary({ content: articleContent, title: frontmatter.value.title }, aiExcerpt)
})

</script>


<style scoped></style>
