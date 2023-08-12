<script lang="ts">
import Form from './Form.vue'
import Modal from './Modal.vue'

export default {
  components: {
    Form,
    Modal
  },
  props: ['isVisible'],
  data() {
    return {
      controls: [
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
    }
  },
  inject: ['editTask', 'activeTaskId']
}
</script>


<template>
  <Modal :isOpen="isVisible">
    <div class="w-[35vw] max-w-[650px] bg-white p-6 rounded-[3px] bg-brand-100/20">
      <Form
        :controls="controls"
        :title="activeTaskId ? 'Update Task' : 'Add New Task'"
        @handleSubmit="editTask"
        formKey="name"
      />
    </div>
  </Modal>
</template>