<template>
  <div class="w-100vw flex flex-col items-center ">
    <div class="w-80% flex flex-col items-center">
      <h1 class="text-center mb-4">{{ frontmatter.title }}</h1>
      <div class="w-70% flex items-center gap-0.1 w-90%">
        <div class="flex-auto"/>
        <span>由</span>
        <span class="">{{ frontmatter.author }}</span>
        <span>作于</span>
        <span class="ml-1">{{ new Date(frontmatter.date).getFullYear() + '年' + (new Date(frontmatter.date).getMonth() + 1) + '月' + new Date(frontmatter.date).getDate() + '日' }}</span>
      </div>
      <Content class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content, useData } from 'vitepress'
const { frontmatter } = useData()
console.log(Content)
</script>
