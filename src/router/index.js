import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ImprintView from "@/views/ImprintView.vue";
import PrivacyView from "@/views/PrivacyView.vue";
import devView from "@/views/devView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/imprint",
    name: "imprint",
    component: ImprintView,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
  },
  {
    path: "/dev",
    name: "development",
    component: devView,
  },
  // {
  //   path: "/cms",
  //   name: "cms",
  //   component: () => import("../views/CMSView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
