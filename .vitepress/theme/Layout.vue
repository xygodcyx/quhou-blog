<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="w100vw min-h-screen overflow-x-hidden bg-#f6d866/10">
    <TopNav />
    <div v-if="page.isNotFound">
      Custom 404 page!
    </div>
    <Home v-else-if="frontmatter.index" />
    <Archives v-else-if="frontmatter.archives" />
    <Content v-else />
  </div>
</template>


<script setup lang="ts">
import { Content, useData } from 'vitepress'
import Home from './Components/Home.vue';
import Archives from './Components/Archives.vue';
import TopNav from './Components/TopNav.vue';

const { frontmatter, page } = useData()
</script>


<style>
@font-face {
  font-family: 'ruimei';
  src: url('../../assets/ruimei.woff2') format('woff2');
}

html * {
  font-family: 'ruimei', sans-serif;
}
</style>
