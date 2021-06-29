import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import dataV from "@jiaminghi/data-view";
import "@/style/common.scss";
import "@/config/dv-charts.js";
import { Select, Option } from "element-ui";

Vue.config.productionTip = false;

Vue.use(dataV);
Vue.use(Select);
Vue.use(Option);
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
