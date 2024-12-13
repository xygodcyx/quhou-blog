<script setup>
import { data as classiies } from '../data/classify.data'
console.log(classiies)
</script>

<template>
  <div class="w-100vw flex flex-col items-center justify-center">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul class="gap-6 grid grid-cols-1 sm:grid-cols-3 md:gap-0 w-90%">
      <li v-for="classify of classiies"
        class="text-center lg:w-full">
        <h1 class="text-4xl text-start font-bold">
          {{ classify.tag.name }}({{ classify.tag.count }})
        </h1>
        <ul class="flex flex-col gap-2">
          <li v-for="post of classify.posts">
            <a :href="post.url"
              class="text-overflow-ellipsis text-start w-full sm:w-90%  text-6 block  hover:text-blueGray ">{{
                post.title }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
