<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="fixed top-[6.5vh] left-[8vh]">
    <RouterLink to="/">
      <p class="text-lg underline decoration-double">Taskr</p>
    </RouterLink>
  </div>
  <RouterView />
</template>

