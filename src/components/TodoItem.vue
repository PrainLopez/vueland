<script setup>
import { Icon } from '@iconify/vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li>
    <input type="checkbox" :checked="todo.isCompleted" />
    <div class="todo">
      <input type="text" :value="todo.todo" />
      <span>
        {{ todo.todo }}
      </span>
    </div>
    <div class="todo-actions">
      <Icon icon="ph:check-circle" class="icon" color="#41b080" width="22" />
      <Icon icon="ph:pencil-fill" class="icon" color="#41b080" width="22" />
      <Icon icon="ph:trash" class="icon" color="#f95e5e" width="22" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  background-color: #f1f1f1;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

&:hover {
  .todo-actions {
    opacity: 1;
  }
}
</style>
