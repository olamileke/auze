<script lang="ts">
import Button from '../common/Button.vue'
import FormElement from './FormElement.vue'

export default {
  props: ['title', 'controls', 'formKey'],
  emits: ['handleSubmit'],
  data() {
    return {
      form: this.controls.reduce((o, control) => ({ ...o, [control.label.toLowerCase()]: '' }), {})
    }
  },
  methods: {
    onSubmit() {
      this.$emit('handleSubmit', this.form)
    }
  },
  components: {
    Button,
    FormElement
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <p class="mb-3 font-semibold">{{ title }}</p>
    <FormElement
      v-for="(control, index) in controls"
      :key="index"
      v-bind="control"
      v-model="form[control.label.toLowerCase()]"
    />
    <Button class="w-full mt-2" type="submit">
      {{ form[formKey] ? `Add ${form[formKey]}` : 'Add Task' }}
    </Button>
  </form>
</template>