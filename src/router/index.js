import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import ForRent from "../pages/ForRent.vue";
import ForSale from "../pages/ForSale.vue";
import AgentDashboard from "../pages/AgentDashboard.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/for-rent",
    name: "ForRent",
    component: ForRent,
  },
  {
    path: "/for-sale",
    name: "ForSale",
    component: ForSale,
  },
  {
    path:"/agent-dashboard",
    name:"AgentDashboard",
    component: AgentDashboard,
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
