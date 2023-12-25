import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
  state: () => [],
  actions: {
    addTodo(todo) {
      todoList.value.push({
        id: uid(),
        todo,
        isCompleted: null,
        isEditing: null
      })
    },
    toggleComplete(index) {},
    toggleEdit(index) {},
    deleteTodo(todoId) {}
  }
})
