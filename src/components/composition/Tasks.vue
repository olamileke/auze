<script setup lang="ts">
import { inject, computed } from 'vue'
import { TTask } from '../../types'
import Task from './Task.vue'

const props = defineProps<{ type: string }>()

const tasks: { value: TTask[] } = inject('tasks')

const displayedTasks = computed(() => {
  if (props.type === 'completed') return tasks.value.filter((task) => task?.is_completed)

  if (props.type === 'incomplete') return tasks.value.filter((task) => !task?.is_completed)

  return tasks.value
})
</script>


<template>
  <Task v-for="task in displayedTasks" :key="task.id" v-bind="task" />
</template>