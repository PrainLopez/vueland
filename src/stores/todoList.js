import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => [],
  actions: {
    toggleComplete(index) {},
    toggleEdit(index) {},
    deleteTodo(todoId) {}
  }
})
