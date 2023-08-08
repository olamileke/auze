<script lang="ts">
export default {
  props: ['id', 'name', 'category', 'description', 'is_completed']
}
</script>

<template>
  <div class="w-full p-5 mb-5 bg-white flex items-start gap-3 shadow-md">
    <input type="checkbox" class="mt-[3px] accent-black" :checked="is_completed" />

    <div>
      <div class="flex items-center gap-4">
        <p class="text-sm mb-1">{{ name }}</p>

        <span
          class="relative -top-[2px] rounded text-[10px] p-1 bg-[#E0E1DD] text-black font-semibold uppercase"
          >{{ category }}</span
        >
      </div>
      <p class="text-sm mb-2">{{ description }}</p>
      <p class="text-xs cursor-pointer underline decoration-double">Edit</p>
    </div>
  </div>
</template>