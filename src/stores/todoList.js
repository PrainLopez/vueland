import { defineStore } from 'pinia'
import { uid } from 'uid'
import { ref } from 'vue'

/* 
export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: localStorage.getItem('todoList')?.todoList ?? []
  }),

  watch: {
    todoList: {
      handler() {
        localStorage.setItem('todoList', JSON.stringify(this.todoList))
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
 */

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref([])

  function addTodo(todo) {
    this.todoList.push({
      id: uid(),
      todo,
      isCompleted: null,
      isEditing: null
    })
  }

  function toggleComplete(todoPos) {
    this.todoList[todoPos].isCompleted = !this.todoList[todoPos].isCompleted
  }

  function toggleEdit(todoPos) {
    this.todoList[todoPos].isEditing = !this.todoList[todoPos].isEditing
  }

  function updateTodo(todoVal, todoPos) {
    this.todoList[todoPos].todo = todoVal
  }

  function deleteTodo(todoId) {
    this.todoList = this.todoList.filter((todo) => todo.id !== todoId)
  }

  return {
    // state:
    todoList,
    // action:
    addTodo,
    toggleComplete,
    toggleEdit,
    updateTodo,
    deleteTodo
  }
})
