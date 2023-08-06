<script lang="ts">
import Button from '../common/Button.vue'
import FormElement from './FormElement.vue'

export default {
  props: ['title', 'controls'],
  emits: ['handleSubmit'],
  components: {
    Button,
    FormElement
  }
}
</script>

<template>
  <form>
    <p class="mb-3 underline decoration-double">{{ title }}</p>
    <FormElement v-for="(control, index) in controls" :key="index" v-bind="control" />
    <Button class="w-full mt-2"> Add Task </Button>
  </form>
</template>