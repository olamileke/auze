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
    <p>{{ title }}</p>
    <Button>
      <slot name="buttonText"></slot>
    </Button>
  </form>
</template>