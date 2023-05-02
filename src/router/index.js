import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/home-page.vue";
import Login from "../components/Login.vue";
import HomePageContent from "../components/content/home-page-content.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/HomePage",
    name: "HomePage",
    component: HomePage,
    children: [
      {
        path: "/article/:type",
        name: "articleList",
        component: HomePageContent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
