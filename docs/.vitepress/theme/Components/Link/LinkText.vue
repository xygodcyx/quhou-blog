<template>
  <a class="text-6 text-gray-500 hover:text-gray-600"
    :class="{ active: router.route.path.split('.')[0] === (href) }">
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';
import { useAttrs } from 'vue';
const router = useRouter();
const href: string = useAttrs().href as string;

</script>

<style lang="scss">
.active {
  color: #42b983;

  &:hover {
    color: #42b983;
  }
}
</style>
