<script setup>
import { computed, onMounted, ref } from 'vue';
import { data as posts } from '../data/posts.data'
import Article from './Article/Article.vue';

const hash = ref(window.location.hash.slice(1));
onMounted(() => {
  window.addEventListener('hashchange', () => {
    hash.value = window.location.hash.slice(1);
  });
});
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <!-- <h1 class="text-center mb-4">所有文章</h1> -->
    <ul class="list-none flex flex-col items-center w-full">
      <li v-for="post of posts"
        class="w-90% mb-2 md:w-50%">
        <Article :post="post" />
      </li>
    </ul>
    <!-- <ul class="fixed right-10% top-10% mb-4 md:mb-0">
      <li v-for="post of posts">
        <a :href="'#' + post.title"
          class="text-gray-500 hover:text-gray-900"
          :class="{ 'text-gray-900': hash === encodeURI(post.title) }">
          {{ post.title }}</a>
      </li>
    </ul> -->
  </div>
</template>
