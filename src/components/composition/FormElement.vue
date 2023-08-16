<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string; type: string; modelValue: string }>()
const emit = defineEmits(['update:modelValue'])
defineOptions({ inheritAttrs: false })

const elementClasses =
  'w-full border border-[rgba(0,0,0,0.1)] py-[10px] px-3 rounded m-[2px] text-sm focus:m-0 focus:border-[3px] focus:border-[#D2D7E5] outline-none bg-brand-100/[.05]'

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
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
    <select
      v-model="value"
      v-if="type === 'select'"
      v-bind="$attrs?.properties ?? {}"
      class="select-none"
      :class="elementClasses"
    >
      <option value="" selected disabled>Please select one</option>
      <option v-for="(option, index) in $attrs?.options ?? []" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
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