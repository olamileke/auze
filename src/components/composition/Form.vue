<script setup lang="ts">
import { inject, reactive } from 'vue'
import Button from '../common/Button.vue'
import FormElement from './FormElement.vue'
import { TControl, TTask } from '../../types'

const props = defineProps<{ title: string; controls: TControl[]; formKey: string }>()
const emit = defineEmits(['handleSubmit'])
const tasks: { value: TTask[] } = inject('tasks')
const { activeTaskId }: { activeTaskId: { value: number | null } } = inject('activeTaskId')

const initialForm = props.controls.reduce(
  (o, control) => ({
    ...o,
    [control.label.toLowerCase()]: !activeTaskId.value
      ? ''
      : tasks.value.find((task) => task.id === activeTaskId.value)[control.label.toLowerCase()]
  }),
  {}
)
const form = reactive(initialForm)

const onSubmit = () => {
  emit('handleSubmit', form)
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
      {{
        `${activeTaskId ? 'Update ' : 'Add '} ${form[formKey].length > 0 ? form[formKey] : 'Task'}`
      }}
    </Button>
  </form>
</template>