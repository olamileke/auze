<script>
import { computed } from 'vue'
import AddTask from '../components/options/AddTask.vue'
import Button from '../components/common/Button.vue'
import TaskDialog from '../components/options/TaskDialog.vue'

export default {
  components: {
    Button,
    AddTask,
    TaskDialog
  },
  data() {
    return {
      tasks: [],
      showTaskDialog: false
    }
  },
  methods: {
    toggleTaskDialog() {
      this.showTaskDialog = !this.showTaskDialog
    },
    addTask(task) {
      this.tasks = [...this.tasks, { ...task, id: Math.random() * 1000000 }]
    }
  },
  provide() {
    return {
      tasks: computed(() => this.tasks),
      addTask: this.addTask
    }
  }
}
</script>

<template>
  <section class="w-screen min-h-screen flex items-center justify-center">
    <div
      v-if="tasks.length === 0"
      class="relative -top-[5vh] flex flex-col items-center gap-5 w-[35%] text-center"
    >
      <img
        class="w-[230px] h-[230px]"
        src="https://res.cloudinary.com/olamileke/image/upload/v1691254278/auze/absurd.design_-_Chapter_1_-_33_vc6qn4.png"
      />
      <p class="text-lg">There are no tasks to display. Click the button below to create one.</p>
      <Button @click="showTaskDialog = true">Create Task</Button>
    </div>
    <div v-else>olamileke</div>

    <AddTask @click="showTaskDialog = true" />
    <TaskDialog :isVisible="showTaskDialog" @click.self="toggleTaskDialog" />
  </section>
</template>