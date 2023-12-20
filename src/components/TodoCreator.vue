<script setup>
import { reactive } from 'vue'
import TodoButton from './TodoButton.vue'

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
  <div class="input-wrap" :class="{ 'input-err': todoState.invalid }">
    <input v-model="todoState.todo" type="text" />
    <TodoButton @click="createTodo" />
  </div>
  <p v-show="todoState.invalid" class="err-msg">
    {{ todoState.errMsg }}
  </p>
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

  &.input-err {
    border-color: red;
  }
}
.err-msg {
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  color: red;
  margin: 8px, 4px;
  text-align: center;
}
</style>
