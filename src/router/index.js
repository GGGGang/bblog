import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "../components/home-page.vue";
import Login from "../components/Login.vue";
import HomePageContent from "../components/content/home-page-content.vue";
import CommentList from "../components/comment/comment-list.vue";
import FollowList from "../components/follow/follow-list.vue";
import AnswerList from "../components/answer/answer-list.vue";

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
      {
        path: "/comment",
        name: "commentList",
        component: CommentList,
      },
      {
        path: "/follow",
        name: "followList",
        component: FollowList,
      },
      {
        path: "/answer",
        name: "answerList",
        component: AnswerList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
