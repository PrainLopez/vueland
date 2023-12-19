<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="src\assets\1.jpg" alt="" />
        <h1>Vue <br />Todos</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/test">Test</RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #bbb;

  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
        color: #36c;
        margin-left: 0.35em;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: #36c;
        font-size: large;
      }
    }
  }
}
</style>
