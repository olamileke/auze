<script>
import { PlusIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    PlusIcon
  }
}
</script>


<template>
  <div
    class="fixed rounded bottom-[3vh] right-[3vh] lg:bottom-[7vh] lg:right-[7vh] p-3 bg-black cursor-pointer"
  >
    <PlusIcon class="w-5 h-5 text-white" />
  </div>
</template>