<template>
  <div id="app">
    <Window id="AboutWindow" title="About" iconName="user-circle" iconType="fas">
      <Navigation :items="[{ title: 'Desktop', url: '#' }, { title: 'About', url: '#' }]" />
    </Window>
    <Launcher title="About" showTitle=true windowId="AboutWindow" iconName="user-circle" iconType="fas" />
    <Taskbar />
  </div>
</template>

<script>
import { Window, Navigation, Taskbar, Launcher } from "./components/index"
//import LinkTree from "./utils/link_tree";

//var link_tree = LinkTree();

export default {
  name: "App",
  components: {
    Window, Navigation, Taskbar, Launcher
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
