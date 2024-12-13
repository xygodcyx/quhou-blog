<script setup>
import { data as classiies } from '../data/classify.data'
console.log(classiies)
</script>

<template>
  <div class="w-100vw flex flex-col items-center">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul class="w-90% gap-3 grid grid-cols-2 content-start sm:text-center sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-0">
      <li v-for="classify of classiies"
        class="text-center lg:w-full">
        <h1 class="text-xl text-start">
          {{ classify.tag.name }}({{ classify.tag.count }})
        </h1>
        <ul>
          <li v-for="post of classify.posts"
            class="flex flex-col gap-1">
            <a :href="post.url"
              class="text-overflow-ellipsis text-start w-80%  block  hover:text-blueGray ">{{
                post.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
