<script setup>
import { defineEmits, reactive } from 'vue'

const emit = defineEmits(['create-todo'])

const todoState = reactive({
  todo: '',
  invalid: null,
  errMsg: ''
})
const createTodo = () => {
  if (!todoState.todo) {
    todoState.invalid = true
    todoState.errMsg = 'Please enter todo title'
    return
  }
  todoState.invalid = false
  emit('create-todo', todoState.todo)

  todoState.todo = ''
  todoState.errMsg = ''
  todoState.invalid = null
}
</script>

<template>
  <div class="input-wrap">
    <input type="text" v-model="todoState.todo" />
    <button @click="createTodo">Create</button>
  </div>
  <p class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;

  &:focus-within {
    box-shadow:
      0 -4px 6px -1px #41b080,
      0 -2px 4px -2px #41b080;
  }

  .err-msg {
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    color: red;
    margin: 8px, 4px;
  }

  input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    font-family: Arial, Helvetica, sans-serif;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 8px 16px;
    border: none;
  }
}
</style>
