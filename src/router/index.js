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
        path: "/HomePageContent",
        name: "HomePageContent",
        component: HomePageContent,
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
