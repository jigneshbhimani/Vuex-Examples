import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: () => import("../components/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login.vue"),
  },
  {
    path: "/products",
    component: () => import("../components/Home.vue"),
    name: "products"
  },
  {
    path: "/clothes",
    component: () => import("../components/Cloth.vue"),
    name: "clothes",
  },
  {
    path: "/books",
    component: () => import("../components/Book.vue"),
    name: "books",
  },
  {
    path: "/product-details",
    name: "product-details",
    component: () => import("../components/ProductDetails.vue"),
  },
  {
    path: "/cloth-details",
    name: "cloth-details",
    component: () => import("../components/ClothDetails.vue"),
  },
  {
    path: "/boook-details",
    name: "book-details",
    component: () => import("../components/BookDetails.vue"),
  },
  {
    path: "/cart",
    component: () => import("../components/Cart.vue"),
  },
  {
    path: "/success",
    name: "success",
    component: () => import("../views/Success.vue"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("../views/Cancel.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
