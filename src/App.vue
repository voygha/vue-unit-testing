<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Agregamos el componente -->
  <AppHeader></AppHeader>
</template>

<script>
//importamos el componente AppHeader
import AppHeader  from "./components/AppHeader.vue"
export default {
  
  name: 'App',
  //Agregamos el componente a App
  components: {
    AppHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
