<script lang="ts">
export default {
  props: ['type', 'modelValue'],
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
  }
}
</script>

<template>
  <input v-model="value" v-if="type === 'text'" />
  <select v-model="value" v-if="type === 'select'">
    <option v-for="(option, index) in $attrs?.options ?? []" :key="index" :value="option">
      {{ option }}
    </option>
  </select>
  <textarea v-model="value" v-if="type === 'textarea'" />
  <div v-else />
</template>