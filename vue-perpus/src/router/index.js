import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/edit/:id", name: "edit", component: EditView, props: true },
  { path: "/post", name: "post", component: PostView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
