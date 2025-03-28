<script setup lang="ts">
import { data as classiies } from '../data/classify.data'
import { formatDate, TPDateInfo } from '../utills'
function formatter(dateInfo: TPDateInfo) {
  const { month, day } = dateInfo
  const nowDate = new Date()
  const nowDay = nowDate.getDate()
  if (day === nowDay) {
    return '今天'
  }
  return `${month}.${day}`
}
</script>

<template>
  <div class="w-100vw flex flex-col items-center justify-center">
    <!-- <h1 class="text-center mb-4">归档</h1> -->
    <ul class="gap-6 grid grid-cols-1 sm:grid-cols-3 md:gap-12 w-90%">
      <li v-for="classify of classiies" class="text-center lg:w-full">
        <h1 class="text-2xl text-start">
          {{ classify.tag.name }}({{ classify.tag.count }})
        </h1>
        <ul class="flex flex-col gap-3">
          <li v-for="post of classify.posts">
            <a
              :href="post.url"
              class="text-start w-full sm:w-90% hover:text-blueGray flex justify-between"
            >
              <span text="1.5rem">{{ post.title }}</span>
              <span text="1.2rem">{{
                formatDate(post.date, formatter, true)
              }}</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
