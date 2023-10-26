<script setup>
import { ref } from 'vue';

const todo = ref("");
</script>

<template>
    <div class="input-wrap">
        <input type="text" v-model="todo" />
        <button>Create</button>
    </div>
    <p>{{ todo }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
    display: flex;
    transition: 250ms ease;
    border: 2px solid #41b080;

    &:focus-within {
        box-shadow: 0 -4px 6px -1px #41b080,
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
}
</style>
