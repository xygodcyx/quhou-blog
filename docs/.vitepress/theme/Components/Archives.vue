<script setup>
import { data as articles } from '../data/archive.data'
</script>

<template>
  <div class="w-100vw flex-col items-center">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul class="list-none flex-col items-center w-full">
      <li v-for="article of articles"
        class="text-center mb-10 w-full">
        <h1 class="z--999 text-30 pos-relative opacity-10 ml md:ml--60">{{ article.year }}</h1>
        <ol class="flex-col items-center w-full ">
          <li v-for="post of article.posts"
            class="w-full flex justify-center">
            <a :href="post.url"
              class=" w-90% text-start text-xl flex justify-between items-center md:w-fit md:min-w-70% lg:min-w-40%">
              <span>{{ post.title }}</span>
              <span class="text-sm opacity-50">{{ post.date }}</span>
            </a>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
