<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import { MainPage } from "./pages/index";
//import LinkTree from "./utils/link_tree";

//var link_tree = LinkTree();

export default {
  name: "App",
  components: {
    MainPage
  }
}
</script>

<style lang="scss">
@import "./styles/index.scss";

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
