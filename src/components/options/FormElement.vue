<script lang="ts">
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    ChevronDownIcon
  },
  props: ['label', 'type', 'modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      elementClasses:
        'w-full border border-[rgba(0,0,0,0.1)] py-[10px] px-3 rounded m-[2px] text-sm focus:m-0 focus:border-[3px] focus:border-[#D2D7E5] outline-none bg-brand-100/[.05]'
    }
  },
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  inheritAttrs: false
}
</script>

<template>
  <div class="flex flex-col mb-3">
    <label class="text-sm mb-[6px]"
      >{{ label }} <span class="relative top-2 text-lg text-[#FF0000]">*</span>
    </label>
    <input
      v-model="value"
      v-if="type === 'text'"
      type="text"
      :class="elementClasses"
      v-bind="$attrs?.properties ?? {}"
    />
    <div v-if="type === 'select'" class="relative">
      <select
        v-model="value"
        v-bind="$attrs?.properties ?? {}"
        class="select-none"
        :class="elementClasses"
      >
        <option value="" selected disabled>Please select one</option>
        <option v-for="(option, index) in $attrs?.options ?? []" :key="index" :value="option">
          {{ option }}
        </option>
      </select>
      <ChevronDownIcon class="w-[16px] h-[16px] absolute top-[16px] right-3" />
    </div>
    <textarea
      v-model="value"
      v-if="type === 'textarea'"
      class="resize-none"
      :class="elementClasses"
      v-bind="$attrs?.properties ?? {}"
      rows="4"
    />
    <div v-else />
  </div>
</template>