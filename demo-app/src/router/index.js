import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "signup",
    component: () =>
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/app",
    component: () => import("../layouts/Nav.vue"),
    children: [
      { path: "/app", component: () => import("../views/Products.vue") },
      {
        path: "/addProduct",
        component: () => import("../views/AddProduct.vue"),
      },
      {
        path: "/details/:idProduct",
        component: () => import("../views/Details.vue"),
      },
      { path: "/cart", component: () => import("../views/Cart.vue") },
      {
        path: "/app/edit/:idProduct",
        component: () => import("../views/EditProduct.vue"),
        name: "edit-product",
        params: true,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
