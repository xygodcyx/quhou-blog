<template>
  <div>
    <nav class="w-full h10 p2 flex items-center">
      <a href="/">
        QuHou's Blog
      </a>
      <div class="flex-auto" />
      <div class="menu flex items-center gap-2">
        <LinkText href="/">首页</LinkText>
        <LinkText href="/archives">归档</LinkText>
      </div>
      <div class="mr-4" />
      <div class="icons-text gap-1 w-fit flex">
        <TextIcon target="_blank"
          title="屈侯访翠思乡"
          href="https://space.bilibili.com/1308065752">B站</TextIcon>
        <TextIcon target="_blank"
          title="xygodcyx"
          href="https://github.com/xygodcyx">Github</TextIcon>
          <TextIcon target="_blank"
          title="force76246"
          href="https://x.com/force76246">X</TextIcon>
      </div>
      <div class="icons flex gap-1 items-center"
        v-if="false">
        <a target="_blank"
          title="Bilibili"
          href="https://space.bilibili.com/1308065752">
          <div class="i-tabler:brand-bilibili"></div>
        </a>
        <a target="_blank"
          title="Github"
          href="https://github.com/xygodcyx/">
          <div class="i-tabler:brand-github"></div>
        </a>
        <a target="_blank"
          title="YouTube"
          href="https://www.youtube.com/channel/UCFvMt-qiO3YGKAkbhB25vxg">
          <div class="i-tabler:brand-youtube"></div>
        </a>
        <a target="_blank"
          title="X"
          href="https://x.com/force76246">
          <div class="i-tabler:brand-x"></div>
        </a>
        <a target="_blank"
          title="RSS"
          href="javascript:void(0)">
          <div class="i-tabler:rss"></div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vitepress';

const router = useRouter();
</script>

<style lang="scss" scoped></style>
