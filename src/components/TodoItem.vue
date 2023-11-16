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

<style lang="scss" scoped></style>
