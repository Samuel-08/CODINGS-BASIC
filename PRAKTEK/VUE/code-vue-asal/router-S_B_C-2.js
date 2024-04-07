// copy paste ini di router.js jika kamu menggunakan file SIDE BAR COMPONENT 2 .VUE
import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../components/Dashboard.vue";
import Users from "../components/Users.vue";
import Products from "../components/Products.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/users", component: Users },
  { path: "/products", component: Products },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
