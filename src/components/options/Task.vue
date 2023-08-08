<script lang="ts">
export default {
  props: ['id', 'name', 'category', 'description', 'is_completed']
}
</script>

<template>
  <div class="w-full p-5 mb-5 bg-white flex items-start gap-3 shadow-md">
    <input type="checkbox" class="mt-[3px]" />

    <div>
      <p class="text-sm mb-1">{{ name }}</p>
      <p class="text-sm">{{ description }}</p>
    </div>
  </div>
</template>