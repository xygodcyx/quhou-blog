<script setup lang="ts">
import { Post } from '../../data/posts.data';
defineProps<{
  post: Post,
}>()


</script>

<template>
  <div class="w-full p-2 mb-2">
    <a :href="post.url"
      class="w-full flex items-center justify-between">
      <h1 :id="post.title"
        class="text-2xl font-bold md:text-4xl">{{ post.title }}</h1>
    </a>
    <p class="">{{ post.excerpt ? post.excerpt.slice(0, 200) + '...' : '暂无摘要' }}</p>
    <div>
      <p class="w-full flex justify-end items-center gap-1">
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
