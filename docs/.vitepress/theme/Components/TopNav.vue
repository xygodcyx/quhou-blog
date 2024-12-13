<template>
  <nav class="w-full h10 p2 flex items-center">
    <a href="/"
      class="logo text-xl font-bold overflow-hidden xl:text-xl">
      屈侯
    </a>
    <div class="flex-auto" />
    <div class="menu flex items-center gap-2">
      <LinkText href="/">首页</LinkText>
      <LinkText href="/classifies">分类</LinkText>
      <LinkText href="/archives">归档</LinkText>
    </div>
    <div class="mr-4" />
    <div class="icons-text gap-1 w-fit hidden sm:flex"
      v-if="false">
      <TextIcon target="_blank"
        title="屈侯访翠思乡"
        href="https://space.bilibili.com/1308065752">Bilibili</TextIcon>
      <TextIcon target="_blank"
        title="xygodcyx"
        href="https://github.com/xygodcyx">Github</TextIcon>
      <TextIcon target="_blank"
        title="force76246"
        href="https://x.com/force76246">X</TextIcon>
    </div>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped></style>
