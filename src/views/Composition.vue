<script setup lang="ts">
import { ref, computed, provide } from 'vue'
import { TTask } from '../types'
import Button from '../components/common/Button.vue'
import AddTask from '../components/composition/AddTask.vue'
import TaskDialog from '../components/composition/TaskDialog.vue'

const tasks = ref<TTask[]>([])
const activeTaskId = ref<number | null>(null)
const tabs = ['All', 'Completed', 'Incomplete']
const activeTab = ref('all')
const showTaskDialog = ref(false)

const toggleTaskDialog = () => {
  if (showTaskDialog.value) activeTaskId.value = null
  showTaskDialog.value = !showTaskDialog.value
}

const setActiveTaskId = (newActiveTaskId: number) => {
  activeTaskId.value = newActiveTaskId
}

const editTask = (task: TTask, id: number | null = null) => {
  if (activeTaskId || id) {
    const index = tasks.value.findIndex((task) => task.id === (activeTaskId ?? id))
    tasks.value[index] = { ...tasks.value[index], ...task }
  } else {
    tasks.value = [{ ...task, id: Math.random() * 1000000, is_completed: false }, ...tasks.value]
  }
  showTaskDialog.value = false
  activeTaskId.value = null
}

const getTabCount = (tab: string) => {
  if (tab.toLowerCase() === 'completed') return tasks.value.filter((task) => task?.is_completed)

  if (tab.toLowerCase() === 'incomplete') return tasks.value.filter((task) => !task?.is_completed)

  return tasks.value
}

const isTasks = computed(() => tasks.value.length > 0)

provide('tasks', tasks)
provide('activeTaskId', { activeTaskId, setActiveTaskId })
provide('editTask', editTask)
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
        class="w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] mb-5 sm:mb-7"
        src="https://res.cloudinary.com/olamileke/image/upload/v1691949838/auze/bonbon-line-project-management-with-many-hands_qxmnre.png"
      />
      <p class="leading-relaxed sm:leading-normal mb-5 lg:mb-6">
        There are no tasks to display. Click the button below to create one.
      </p>
      <Button @click="showTaskDialog = true">Create Task</Button>
    </div>

    <AddTask @click="showTaskDialog = true" />
    <TaskDialog :isVisible="showTaskDialog" @click.self="toggleTaskDialog" />
  </section>
</template>