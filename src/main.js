import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { Window, Navigation, Taskbar, Shortcut } from "./components/index";
import { WindowItem, TaskbarItem, ShortcutItem } from "./components/index";
import "./icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("window-item", WindowItem);
//Vue.component("navigation", NavigationItem);
Vue.component("taskbar-item", TaskbarItem);
Vue.component("shortcut-item", ShortcutItem);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount("#app");
