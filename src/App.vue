<script setup>
import { RouterView } from 'vue-router'
import TodoHeader from './components/TodoHeader.vue'
</script>

<template>
  <TodoHeader />
  <RouterView />
</template>

<style lang="scss">
@import url('https://fonts.font.im/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap');

* {
  font-family: 'Space Grotesk', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  background-color: #ccc;
}
</style>
