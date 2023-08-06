<script lang="ts">
export default {
  props: ['label', 'type', 'modelValue'],
  emits: ['update:modelValue'],
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
      >{{ label }} <span class="relative top-1 text-lg text-[#FF0000]">*</span>
    </label>
    <input
      v-model="value"
      v-if="type === 'text'"
      type="text"
      class="w-full border border-[rgba(0,0,0,0.16)] py-2 px-3 rounded focus:border-[rgba(0,0,0,0.7)] outline-none"
      placeholder="Task 1..."
    />
    <select
      v-model="value"
      v-if="type === 'select'"
      class="w-full border border-[rgba(0,0,0,0.16)] py-2 px-3 rounded focus:border-[rgba(0,0,0,0.7)] outline-none"
      placeholder="sslsk"
    >
      <option disabled value="">Please select one</option>
      <option v-for="(option, index) in $attrs?.options ?? []" :key="index" :value="option">
        {{ option }}
      </option>
    </select>
    <textarea
      v-model="value"
      v-if="type === 'textarea'"
      class="w-full border border-[rgba(0,0,0,0.16)] py-2 px-3 rounded focus:border-[rgba(0,0,0,0.7)] outline-none"
      rows="4"
      placeholder="Here is my task description..."
    />
    <div v-else />
  </div>
</template>