<template>
  <button @click="top"
    class="gotop position-fixed bottom-0 right-0 z-50"
    :class="{ 'show': gotopShow }">
    <svg xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6 rotate-180 text-gray-500 p-1 fixed bottom-4 right-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor">
      <path stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
const gotopShow = ref(false)

onMounted(() => {
  if (computeScrollPercent().scrollTop === 0) {
    gotopShow.value = false
  }
  window.addEventListener('scroll', function () {
    const data = computeScrollPercent()
    const scrollPercent = data.percent
    const scrollTop = data.scrollTop
    if (scrollPercent > 40 && scrollTop !== 0) {
      gotopShow.value = true
    } else {
      gotopShow.value = false
    }
  })

})

function computeScrollPercent() {
  const scrollTop = document.documentElement.scrollTop
  const clientHeight = document.documentElement.clientHeight
  const scrollHeight = document.documentElement.scrollHeight
  const percent = (scrollTop / (scrollHeight - clientHeight)) * 100
  const interpolation = scrollHeight - clientHeight
  return { scrollTop, percent, interpolation }
}


function top() {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>


<style lang="scss" scoped>
.gotop {
  opacity: 0;
  scale: 0;
  transition: scale 0.3s ease-in-out, opacity 0.3s ease-in-out;
}

.show {
  opacity: 1;
  scale: 1;
}
</style>
