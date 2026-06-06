<script setup>
import { computed, defineAsyncComponent } from 'vue'

const HomePage = defineAsyncComponent(() => import('./components/HomePage.vue'))
const WorldCup = defineAsyncComponent(() => import('./components/WorldCup.vue'))

const routeName = computed(() => {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '')

  return normalizedPath.toLowerCase() === '/worldcup' ? 'worldCup' : 'home'
})
</script>

<template>
  <WorldCup v-if="routeName === 'worldCup'" />
  <HomePage v-else />
</template>
