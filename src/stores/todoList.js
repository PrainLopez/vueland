import { defineStore } from 'pinia'
import { uid } from 'uid'

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: localStorage.getItem('todoList')?.todoList ?? []
  }),

  watch: {
    todoList: {
      handler() {
        localStorage.setItem('todoList', JSON.stringify(todoList))
      },
      deep: true
    }
  },

  actions: {
    addTodo(todo) {
      this.todoList.push({
        id: uid(),
        todo,
        isCompleted: null,
        isEditing: null
      })
    },

    toggleComplete(todoPos) {
      this.todoList[todoPos].isCompleted = !this.todoList[todoPos].isCompleted
    },

    toggleEdit(todoPos) {
      this.todoList[todoPos].isEditing = !this.todoList[todoPos].isEditing
    },

    updateTodo(todoVal, todoPos) {
      this.todoList[todoPos].todo = todoVal
    },

    deleteTodo(todoId) {
      this.todoList = this.todoList.filter((todo) => todo.id !== todoId)
    }
  }
})
