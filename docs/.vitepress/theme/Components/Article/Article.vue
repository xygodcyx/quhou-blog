<script setup lang="ts">
import { Post } from '../../data/posts.data';
defineProps<{
  post: Post,
}>()

</script>

<template>
  <div class="w-full mb-2">

    <h1 :id="post.title"
      class="w-full text-2xl font-bold md:text-3xl mb-1 flex items-end gap-2">
      <p class="flex items-center ml--4 flex-row-reverse">
        <a :href="post.url"
          class="title w-full flex items-center justify-between hover:underline underline-gray-500/70 underline-dotted underline-offset-6 underline-1">{{
            post.title }}
        </a>
        <a :href="'#' + post.title"
          class="title-anchor hover:underline underline-gray-500/70 underline-dotted underline-offset-6 underline-1">#</a>
      </p>
      <p>
        <time class="color-gray-500 text-lg hidden sm:block">{{ post.date }}</time>
      </p>
    </h1>
    <p class="w-full flex justify-start items-center gap-1">
      <span class="w-fit
        color-gray-800 b-current
        b-1 b-dotted "
        v-for="tag of post.tags">
        {{ tag }}
      </span>
    </p>
    <p class="cursor-text">{{ post.excerpt ? post.excerpt : '暂无摘要' }}</p>
  </div>
</template>


<style lang="scss" scoped>
.title-anchor:hover {
  opacity: 1;
}

.title:hover+.title-anchor {
  opacity: 1;
}

.title-anchor {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
