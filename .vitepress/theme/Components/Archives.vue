<script setup>
import { data as posts } from '../posts.data.js'

</script>

<template>
  <h1>归档</h1>
  <ul>
    <li v-for="post of posts"
      class="flex w40% flex-justify-start">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <span>by {{ post.frontmatter.author }}</span>
      <div class="flex justify-between items-center gap-2 w2">
        <span class="color-red font-bold "
          v-for="tag of post.frontmatter.tags">
          {{ tag }}
        </span>
      </div>
    </li>
  </ul>
</template>
