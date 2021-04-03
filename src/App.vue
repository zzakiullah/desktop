<template>
  <div id="app">
    <Window title="About" iconName="user-circle" iconType="fas">
      <Navigation :items="[{ title: 'Desktop', url: '#' }, { title: 'About', url: '#' }]" />
    </Window>
  </div>
</template>

<script>
import { Window, Navigation } from './components/index'
//import LinkTree from './utils/link_tree';

//var link_tree = LinkTree();

export default {
  name: 'App',
  components: {
    Window, Navigation
  }
}
</script>

<style lang="scss">
@import './styles/index.scss';

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
