<script setup lang="ts">
import { TypeArticle } from '../../data/posts.data';
defineProps<{
  post: TypeArticle,
}>()


</script>

<template>
  <div class="w-full p-2 mb-2">
    <a :href="post.url"
      class="w-full flex items-center justify-between">
      <h1 :id="post.title"
        class="text-lg font-bold md:text-2xl">{{ post.title }}</h1>
    </a>
    <p class="">{{ post.excerpt.slice(0, 200) + '...' }}</p>
    <div>
      <p class="w-full flex justify-end items-center gap-0">
        <span class="w-fit
        color-gray-500/60 b-current
        b-1 b-dotted "
          v-for="tag of post.tags">
          {{ tag }}
        </span>
      </p>
    </div>
  </div>
</template>
