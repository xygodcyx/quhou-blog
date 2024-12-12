<script setup>
import { data as posts } from '../data/posts.data'
import Article from './Article/Article.vue';
console.log(posts)
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <!-- <h1 class="text-center mb-4">所有文章</h1> -->
    <ul class="list-none w-full flex flex-col items-center">
      <li v-for="post of posts" class="w-90% mb-4 xl:w-50%">
        <Article :post="post" />
      </li>
    </ul>
  </div>
</template>
