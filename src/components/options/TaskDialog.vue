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
        { label: 'Name', type: 'text' },
        { label: 'Category', type: 'select', options: ['Advertising', 'Marketing', 'Sales'] },
        { label: 'Description', type: 'textarea' }
      ]
    }
  }
}
</script>


<template>
  <Modal :isOpen="isVisible">
    <div class="w-[35vw] max-w-[650px] bg-white p-6 rounded-[2px]">
      <Form :controls="controls" title="Add New Task" />
    </div>
  </Modal>
</template>