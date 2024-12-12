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
    <ul class="list-none flex flex-col items-center w-full">
      <li v-for="post of posts"
        class="w-90% mb-2 md:w-50%">
        <Article :post="post" />
      </li>
    </ul>
  </div>
</template>
