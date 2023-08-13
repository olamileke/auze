<script setup lang="ts">
import { inject } from 'vue'
import Form from './Form.vue'
import Modal from './Modal.vue'

defineProps<{ isVisible: boolean }>()

const controls = [
  {
    label: 'Name',
    type: 'text',
    properties: { placeholder: 'Random task name...', required: true }
  },
  {
    label: 'Category',
    type: 'select',
    options: ['Advertising', 'Marketing', 'Sales'],
    properties: { required: true }
  },
  {
    label: 'Description',
    type: 'textarea',
    properties: { placeholder: 'Random task description', required: true }
  }
]

const { activeTaskId }: { activeTaskId: number | null } = inject('activeTaskId')
const editTask = inject('editTask')
</script>

<template>
  <Modal :isOpen="isVisible">
    <div
      class="w-[95vw] sm:w-[75vw] lg:w-[35vw] sm:max-w-[650px] bg-white p-6 rounded-[3px] bg-brand-100/20"
    >
      <Form
        :controls="controls"
        :title="activeTaskId ? 'Update Task' : 'Add New Task'"
        @handleSubmit="editTask"
        formKey="name"
      />
    </div>
  </Modal>
</template>