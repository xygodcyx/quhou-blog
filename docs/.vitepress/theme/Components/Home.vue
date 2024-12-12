<script setup>
import { data as posts } from '../posts.data'
import Article from './Article/Article.vue';
console.log(posts)
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <h1 class="text-center mb-4">所有文章</h1>
    <ul class="list-none flex-col items-center w-full">
      <Article v-for="post of posts"
        :post="post" />
    </ul>
  </div>
</template>
