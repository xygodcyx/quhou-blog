<!-- .vitepress/theme/Layout.vue -->
<template>
  <div class="w100vw min-h-screen overflow-x-hidden bg-#f6d866/10">
    <TopNav />
    <div v-if="page.isNotFound">
      Custom 404 page!
    </div>
    <Home v-else-if="frontmatter.index" />
    <Archives v-else-if="frontmatter.archives" />
    <Classify v-else-if="frontmatter.classifies" />
    <ArticleDetail v-else />
  </div>
</template>


<script setup lang="ts">
import { Content, useData } from 'vitepress'
import Home from './Components/Home.vue';
import Archives from './Components/Archives.vue';
import TopNav from './Components/TopNav.vue';
import ArticleDetail from './Components/Article/ArticleDetail.vue';
import Classify from './Components/Classify.vue';

const { frontmatter, page } = useData()
</script>


<style>
@import url(./style.css);
</style>
