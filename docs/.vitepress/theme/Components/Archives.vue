<script setup>
import { data as articles } from '../data/archive.data'
</script>

<template>
  <div class="w-100vw flex flex-col items-center">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul class="list-none flex-col items-center w-full md:w-80% lg:w-70% xl:w-60% ">
      <li v-for="article of articles"
        class="text-center mb-10 w-full flex flex-col items-center">
        <h1 class="z--999 text-30 pos-relative opacity-10 ml-0 mt-0">{{ article.year }}</h1>
        <ol class="flex-col items-start w-full">
          <li v-for="post of article.posts"
            class="w-full flex justify-center">
            <a :href="post.url"
              class="w-90% text-start text-xl flex justify-between items-center ">
              <span class="text-overflow-ellipsis w-70% md:w-80%">{{ post.title }}</span>
              <span class="text-sm opacity-50 w-fit">{{ post.date }}</span>
            </a>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
