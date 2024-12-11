<script setup>
import { data as posts } from '../posts.data.js'
console.log(posts)
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <h1 class="text-center mb-4">所有文章</h1>
    <ul class="list-none flex-col items-center w-full">
      <li v-for="post of posts"
        class="text-center mb-4 w-full">
        <a :href="post.url">
          <span class="text-xl text-blue font-bold">{{ post.frontmatter.title }}</span>
          <span class="text-sm text-gray-500">by {{ post.frontmatter.author }}</span>
        </a>
        <span>-{{ new Date(post.frontmatter.date).toLocaleDateString() }}</span>
        <span class="color-red font-bold ml-1 w-fit h2 b-1 b-solid b-gray line-height-2"
          v-for="tag of post.frontmatter.tags">
          {{ tag }}
        </span>
      </li>
    </ul>
  </div>
</template>
