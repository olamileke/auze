<script>
import { computed } from 'vue'
import AddTask from '../components/options/AddTask.vue'
import Button from '../components/common/Button.vue'
import TaskDialog from '../components/options/TaskDialog.vue'
import Tasks from '../components/options/Tasks.vue'

export default {
  components: {
    Button,
    AddTask,
    TaskDialog,
    Tasks
  },
  data() {
    return {
      tasks: [
        {
          name: 'Build Medusa Backend',
          category: 'Advertising',
          description:
            'A backend needs to be built for Medusa. It should be written in Node and should be strong, robust and fast',
          is_completed: false
        },
        {
          name: 'Write Tests for Nicodemus',
          category: 'Marketing',
          description: 'We need tests written for Nicodemus, the test coverage should reach 90%',
          is_completed: true
        }
      ],
      showTaskDialog: false,
      tabs: ['All', 'Completed', 'Incomplete'],
      activeTab: 'all'
    }
  },
  methods: {
    toggleTaskDialog() {
      this.showTaskDialog = !this.showTaskDialog
    },
    addTask(task) {
      this.tasks = [...this.tasks, { ...task, id: Math.random() * 1000000, is_completed: false }]
      this.showTaskDialog = false
    }
  },
  computed: {
    isTasks() {
      return this.tasks.length > 0
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
  <section
    class="w-screen min-h-screen flex justify-center"
    :class="[!isTasks ? 'items-center' : '']"
  >
    <div
      v-if="!isTasks"
      class="relative -top-[5vh] flex flex-col items-center gap-5 w-[35%] text-center"
    >
      <img
        class="w-[230px] h-[230px]"
        src="https://res.cloudinary.com/olamileke/image/upload/v1691254278/auze/absurd.design_-_Chapter_1_-_33_vc6qn4.png"
      />
      <p class="text-lg">There are no tasks to display. Click the button below to create one.</p>
      <Button @click="showTaskDialog = true">Create Task</Button>
    </div>

    <div v-else class="mt-[8vh] max-w-[640px] w-full">
      <div class="flex gap-3 justify-center mb-5">
        <p
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer"
          :class="[
            activeTab === tab.toLowerCase() ? 'underline decoration-double underline-offset-2' : ''
          ]"
          @click="activeTab = tab.toLowerCase()"
        >
          {{ tab }}
        </p>
      </div>
      <Tasks :type="activeTab" />
    </div>

    <AddTask @click="showTaskDialog = true" />
    <TaskDialog :isVisible="showTaskDialog" @click.self="toggleTaskDialog" />
  </section>
</template>