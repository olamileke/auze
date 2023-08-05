<script lang="ts">
export default {
  props: ['isOpen']
}
</script>

<template>
  <div
    class="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    :class="[isOpen ? 'z-10 opacity-100' : '-z-[999] opacity-0']"
  >
    <slot></slot>
  </div>
</template>