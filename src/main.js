import Vue from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./icons";
import { Shortcut } from "./components/index"

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("shortcut", Shortcut);

Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount("#app");
