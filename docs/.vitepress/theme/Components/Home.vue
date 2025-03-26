<script setup>
import { data as posts } from '../data/posts.data'
import Article from './Article/Article.vue'
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <ul class="list-none flex flex-col items-center w-full">
      <li v-for="post of posts" class="w-80vw mb-2">
        <Article :post="post" />
      </li>
    </ul>
  </div>
</template>
