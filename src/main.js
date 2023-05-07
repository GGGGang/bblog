import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import pinia from "./store";
import api from "./utils/api";
import moment from "moment";

import ElementPlus from "element-plus";
import * as ElIconModules from "@element-plus/icons-vue";
import "element-plus/dist/index.css";
import "@/assets/icon/iconfont.css";
import "@/assets/style/global-style.scss";
import "@/assets/style/global-animation.scss";

moment.locale("zh-cn");
const app = createApp(App);

app.config.globalProperties.$https = api;
app.config.globalProperties.$moment = moment;

// 注册全局组件
Object.keys(ElIconModules).forEach((key) => {
  app.component(key, ElIconModules[key]);
});

app.use(pinia);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
