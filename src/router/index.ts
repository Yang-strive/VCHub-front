import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/components/layout/index.vue";

const routes = [
  {
    path: '/',
    component: Layout
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router