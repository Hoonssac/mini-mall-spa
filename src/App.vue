<template>
  <div class="app">
    <Header />
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}

.app {
  min-height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  font-family: sans-serif;
}

.main {
  max-width: 1060px;
  margin: 0 auto;
  text-align: center;
  margin-top: 120px;
  color: #444;
}
</style>
