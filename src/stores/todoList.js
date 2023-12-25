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
      todoList.value.push({
        id: uid(),
        todo,
        isCompleted: null,
        isEditing: null
      })
    },
    addTodo(todo) {
      todoList.value.push({
        id: uid(),
        todo,
        isCompleted: null,
        isEditing: null
      })
    },

    toggleComplete(todoPos) {
      todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
    },

    toggleEdit(todoPos) {
      todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing
    },

    updateTodo(todoVal, todoPos) {
      todoList.value[todoPos].todo = todoVal
    },

    deleteTodo(todoId) {
      todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
    }
  }
})
