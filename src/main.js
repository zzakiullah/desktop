import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//import { Window, Navigation, Taskbar, Shortcut } from "./components/index";
import { Window, Taskbar, Shortcut } from "./components/index";
import "./icons";

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.component("window", Window);
//Vue.component("navigation", Navigation);
Vue.component("taskbar", Taskbar);
Vue.component("shortcut", Shortcut);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount("#app");
