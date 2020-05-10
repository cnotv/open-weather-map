import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import store from "@/store";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Weather",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "weather" */ "../views/Weather.vue"),
    beforeEnter: (to, from, next) => {
      const api = store.getters.getApiKey;
      if (to.name !== "Login" && !api)
        next({ name: "Login" });
      else next();
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
