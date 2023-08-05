<script setup lang="ts">
import { RouterLink } from 'vue-router'

const apis = ['Options', 'Composition']
</script>

<template>
  <section class="w-screen min-h-screen flex justify-center items-center">
    <div class="flex gap-4 relative -top-[8vh]">
      <RouterLink v-for="(api, index) in apis" :key="index" :to="'/' + api.toLowerCase()">
        <div class="p-5 flex border-2 border-black hover:border-2 rounded-sm cursor-pointer">
          <div
            class="w-16 h-16 bg-black text-white text-xl mr-3 flex justify-center items-center text-lg"
          >
            {{ api.charAt(0) }}
          </div>
          <p class="underline decoration-double">{{ api }} API Example</p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>