<script setup lang="ts">
import { TypeArticle } from '../../data/posts.data';
defineProps<{
  post: TypeArticle,
}>()


</script>

<template>
  <div class="w-full  p-4 mb-4">
    <a :href="post.url"
      class="w-full flex items-center justify-between">
      <h2 class="text-lg font-bold xl:text-2xl">{{ post.title }}</h2>
    </a>
    <p v-html="post.excerpt"
      class="indent-4"></p>
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
