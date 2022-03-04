<template>
  <div class="modal" v-if="isOpen">
    <slot></slot>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const isOpen = ref(false);
    const toggle = () => (isOpen.value = !isOpen.value);
    return { isOpen, toggle };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background: transparent;
  backdrop-filter: blur(5px);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
}
</style>
