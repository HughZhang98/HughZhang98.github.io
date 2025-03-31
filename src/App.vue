<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Hugh Zhang - 个人网站',
  meta: [
    { name: 'description', content: '张昊的个人网站 - 前端工程师' },
    { name: 'theme-color', content: '#4e54c8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>
