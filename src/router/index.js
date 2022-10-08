import { createRouter, createWebHistory } from "vue-router";
import About from "../pages/About.vue";
import ForRent from "../pages/ForRent.vue";
import ForSale from "../pages/ForSale.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/Home.vue"),
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
    path: "/dashboard",
    name: "DashBoard",
    component: () => import("../components/dashboard/Dashboard.vue"),
    children: [
      {
        path: "",
        name: "DashBoard Content",
        component: () => import("../pages/DashBoardContent.vue"),
      },
      {
        path: "post-property",
        name: "Post Property",
        component: () => import("../pages/PostProperty.vue"),
      },
      {
        path: "property-types",
        name: "Property Types",
        component: () => import("../pages/PropertyTypes.vue"),
      },
      {
        path: "inbox",
        name: "Inbox",
        component: () => import("../pages/Inbox.vue"),
      },
      {
        path: "profile",
        name: "Profile",
        component: () => import("../pages/Profile.vue"),
      },
      {
        path: "settings",
        name: "Settings",
        component: () => import("../pages/Settings.vue"),
      },
    ],
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
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
