<script lang="ts">
import Button from '../common/Button.vue'
import FormElement from './FormElement.vue'

export default {
  props: ['title', 'controls', 'formKey'],
  emits: ['handleSubmit'],
  inject: ['tasks', 'activeTaskId'],
  data() {
    return {
      form: this.controls.reduce(
        (o, control) => ({
          ...o,
          [control.label.toLowerCase()]: !this.activeTaskId
            ? ''
            : this.tasks.find((task) => task.id === this.activeTaskId)[control.label.toLowerCase()]
        }),
        {}
      )
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
    <p class="mb-3 font-semibold text-sm">{{ title }}</p>
    <FormElement
      v-for="(control, index) in controls"
      :key="index"
      v-bind="control"
      v-model="form[control.label.toLowerCase()]"
    />
    <Button class="w-full mt-2 text-sm" type="submit">
      {{
        `${activeTaskId ? 'Update ' : 'Add '} ${form[formKey].length > 0 ? form[formKey] : 'Task'}`
      }}
    </Button>
  </form>
</template>