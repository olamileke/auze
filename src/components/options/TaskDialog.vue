<script lang="ts">
import Form from './Form.vue'
import Modal from './Modal.vue'

export default {
  components: {
    Form,
    Modal
  },
  props: ['isVisible']
}
</script>


<template>
  <Modal :isOpen="isVisible">
    <div class="w-[30vw] max-w-[450px] bg-white p-5 fix"></div>
  </Modal>
</template>