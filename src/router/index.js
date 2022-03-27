import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";
import PostPage from "@/views/PostPage";
import AboutPage from "@/views/AboutPage";
import PostIdPage from "@/views/PostIdPage";

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
  {
    path: "/posts/:id",
    component: PostIdPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
