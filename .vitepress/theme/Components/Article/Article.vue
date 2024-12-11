<script setup lang="ts">
import { TypeArticle } from '../../posts.data';
defineProps<{
  post: TypeArticle,
}>()

</script>

<template>
  <li class="text-center mb-4 w-full">
    <a :href="post.url">
      <span class="text-xl text-blue font-bold">{{ post.title }}</span>
      <span class="text-sm text-gray-500">by {{ post.author }}</span>
      <span>-{{ new Date(post.date).toLocaleDateString() }}</span>
      <span class="color-red font-bold ml-1 w-fit h2 b-1 b-solid b-gray line-height-2"
        v-for="tag of post.tags">
        {{ tag }}
      </span>
    </a>
  </li>
</template>
