import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/About.vue"),
  },
  {
    path: "/for-rent",
    name: "ForRent",
    component: () => import("../pages/ForRent.vue"),
  },
  {
    path: "/for-sale",
    name: "ForSale",
    component: () => import("../pages/ForSale.vue"),
  },
  {
    path: "/property-info",
    name: "Property Info",
    component: () => import("../pages/PropertyInfo.vue"),
  },
  {
    path: "/contact-us",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
  {
    path: "/unauthorised",
    name: "Unauthorised",
    component: () => import("../pages/Error401.vue"),
  },
  {
    path: "/forbidden",
    name: "Forbidden",
    component: () => import("../pages/Error403.vue"),
  },
  {
    path: "/not-found",
    name: "NotFound",
    component: () => import("../pages/Error404.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../pages/Error404.vue"),
  },
  {
    path: "/forgot-passwrod",
    name: "ForgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
