import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementPlus from "element-plus";
import * as ElIconModules from "@element-plus/icons-vue";
import "element-plus/dist/index.css";

const app = createApp(App);

// 注册全局组件
Object.keys(ElIconModules).forEach((key) => {
  app.component(key, ElIconModules[key]);
});

app.use(store);
app.use(router);
app.use(ElementPlus);

app.mount("#app");
