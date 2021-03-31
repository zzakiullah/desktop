<template>
  <div id="app">
    <Window title="about" iconName="folder" iconType="fas" />
  </div>
</template>

<script>
import { Window } from './components/index'

export default {
  name: 'App',
  components: {
    Window
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
