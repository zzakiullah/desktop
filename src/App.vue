<template>
  <div id="app">
    <!--<Window id="SettingsWindow" title="Settings" iconName="cog" iconType="fas">
      <Navigation :items="[{ title: 'Settings', url: '#' }]" />
    </Window>-->
    <Window id="AboutWindow" title="About" iconName="user-circle" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'About', url: '#' }]" />-->
    </Window>
    <Window id="EducationWindow" title="Education" iconName="graduation-cap" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'Education', url: '#' }]" />-->
    </Window>
    <Window id="SkillsWindow" title="Skills" iconName="wrench" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'Skills', url: '#' }]" />-->
    </Window>
    <Window id="ExperienceWindow" title="Experience" iconName="briefcase" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'Experience', url: '#' }]" />-->
    </Window>
    <Window id="ProjectsWindow" title="Projects" iconName="lightbulb" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'Projects', url: '#' }]" />-->
    </Window>
    <Window id="ContactWindow" title="Contact" iconName="comment-alt" iconType="fas">
      <!--<Navigation :items="[{ title: 'Home', url: '#' }, { title: 'Contact', url: '#' }]" />-->
    </Window>
    <Taskbar>
      <!--<Shortcut title="Settings" windowId="SettingsWindow" iconName="cog" iconType="fas" />-->
      <Shortcut title="About" windowId="AboutWindow" iconName="user-circle" iconType="fas" />
      <Shortcut title="Education" windowId="EducationWindow" iconName="graduation-cap" iconType="fas" />
      <Shortcut title="Skills" windowId="SkillsWindow" iconName="wrench" iconType="fas" />
      <Shortcut title="Experience" windowId="ExperienceWindow" iconName="briefcase" iconType="fas" />
      <Shortcut title="Projects" windowId="ProjectsWindow" iconName="lightbulb" iconType="fas" />
      <Shortcut title="Contact" windowId="ContactWindow" iconName="comment-alt" iconType="fas" />
    </Taskbar>
  </div>
</template>

<script>
import { Window, Taskbar, Shortcut } from "./components/index"
//import LinkTree from "./utils/link_tree";

//var link_tree = LinkTree();

export default {
  name: "App",
  components: {
    Window, Taskbar, Shortcut
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
