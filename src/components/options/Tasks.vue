<script lang="ts">
import Task from './Task.vue'

export default {
  props: ['type'],
  inject: ['tasks'],
  components: {
    Task
  },
  computed: {
    displayedTasks() {
      if (this.type === 'completed') return this.tasks.filter((task) => task?.is_completed)

      if (this.type === 'incomplete') return this.tasks.filter((task) => !task?.is_completed)

      return this.tasks
    }
  }
}
</script>


<template>
  <div>
    <Task v-for="task in displayedTasks" :key="task.id" v-bind="task" />
  </div>
</template>