<script setup>
import { data as articles } from '../data/archive.data'
</script>

<template>
  <div class="w-100vw flex flex-col items-center min-h-100vh mb-10">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul
      class="list-none flex flex-col items-center gap-10 w-full md:w-80% lg:w-70% xl:w-60%"
    >
      <li
        v-for="article of articles"
        class="text-center w-full flex flex-col items-center relative h-fit"
      >
        <h1 class="text-20 opacity-70 text-start w-full pl-3rem">{{ article.year }}</h1>
        <ol class="flex flex-col items-start w-full gap-2">
          <li v-for="post of article.posts" class="w-full flex justify-center">
            <a
              :href="post.url"
              class="w-90% text-start text-3xl flex justify-between items-start hover:text-gray-500"
            >
              <span class="flex-1 mr-4">{{ post.title }}</span>
              <span class="text-md opacity-50 w-fit"
                >{{ new Date(post.dateTime).getMonth() + 1 }}月{{
                  new Date(post.dateTime).getDate()
                }}日</span
              >
            </a>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
