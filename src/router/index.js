import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";
import PostPage from "@/views/PostPage";
import AboutPage from "@/views/AboutPage";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
