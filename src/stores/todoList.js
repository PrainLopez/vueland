import { defineStore } from 'pinia'
import { uid } from 'uid'
import { ref, watch } from 'vue'
/*  watch option just don't work here
export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    todoList: JSON.parse(localStorage.getItem('todoList') ?? '[]')
  }),

  watch: {
    todoList: {
      handler(newValue) {
        console.log(JSON.stringify(newValue))
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
  const todoList = ref(JSON.parse(localStorage.getItem('todoList') ?? '[]'))

  watch(
    todoList,
    (newValue) => {
      localStorage.setItem('todoList', JSON.stringify(newValue))
    },
    { deep: true }
  )

  function addTodo(todo) {
    todoList.value.push({
      id: uid(),
      todo,
      isCompleted: null,
      isEditing: null
    })
  }

  function toggleComplete(todoPos) {
    todoList.value[todoPos].isCompleted = !todoList.value[todoPos].isCompleted
  }

  function toggleEdit(todoPos) {
    todoList.value[todoPos].isEditing = !todoList.value[todoPos].isEditing
  }

  function updateTodo(todoVal, todoPos) {
    todoList.value[todoPos].todo = todoVal
  }

  function deleteTodo(todoId) {
    todoList.value = todoList.value.filter((todo) => todo.id !== todoId)
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
