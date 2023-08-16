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
      tasks: [],
      activeTaskId: null,
      showTaskDialog: false,
      tabs: ['All', 'Completed', 'Incomplete'],
      activeTab: 'all'
    }
  },
  methods: {
    toggleTaskDialog() {
      if (this.showTaskDialog) this.activeTaskId = null
      this.showTaskDialog = !this.showTaskDialog
    },
    editTask(task, id = null) {
      if (this.activeTaskId || id) {
        const index = this.tasks.findIndex((task) => task.id === (this.activeTaskId ?? id))
        this.tasks[index] = { ...this.tasks[index], ...task }
      } else {
        this.tasks = [{ ...task, id: Math.random() * 1000000, is_completed: false }, ...this.tasks]
      }
      this.showTaskDialog = false
      this.activeTaskId = null
    },
    setActiveTaskId(id) {
      this.activeTaskId = id
      this.showTaskDialog = true
    },
    getTabCount(tab) {
      if (tab === 'completed') return this.tasks.filter((task) => task?.is_completed).length

      if (tab === 'incomplete') return this.tasks.filter((task) => !task?.is_completed).length

      return this.tasks.length
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
      activeTaskId: computed(() => this.activeTaskId),
      editTask: this.editTask,
      setActiveTaskId: this.setActiveTaskId
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
      class="relative -top-[5vh] flex flex-col items-center w-[90%] sm:w-[80%] lg:w-[35%] text-center"
    >
      <img
        class="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-3"
        src="https://res.cloudinary.com/olamileke/image/upload/v1692215736/auze/reflecting_bnmr96.png"
      />
      <p class="leading-relaxed sm:leading-normal mb-5 lg:mb-6">
        There are no tasks to display. Click the button below to create one.
      </p>
      <Button @click="showTaskDialog = true">Create Task</Button>
    </div>

    <div v-else class="mt-[10vh] sm:mt-[4.4vh] lg:mt-[7vh] px-5 sm:px-0 sm:max-w-[640px] w-full">
      <div class="flex gap-3 justify-center mb-8 sm:mb-10 lg:mb-8">
        <p
          v-for="(tab, index) in tabs"
          :key="index"
          class="cursor-pointer"
          :class="[
            activeTab === tab.toLowerCase() ? 'underline decoration-double underline-offset-2' : ''
          ]"
          @click="activeTab = tab.toLowerCase()"
        >
          {{ tab }} ({{ getTabCount(tab.toLowerCase()) }})
        </p>
      </div>
      <Tasks :type="activeTab" />
    </div>

    <AddTask @click="showTaskDialog = true" />
    <TaskDialog :isVisible="showTaskDialog" @click.self="toggleTaskDialog" />
  </section>
</template>