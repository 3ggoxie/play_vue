import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/Home.vue"),
    },
    {
      path: "/gsap",
      name: "gsap",
      component: () => import("@/pages/gsap/index.vue"),
    },
    {
      path: "/gsap/stagger",
      name: "gsap-stagger",
      component: () => import("@/pages/gsap/Stagger.vue"),
    },
    {
      path: "/gsap/first-animation",
      name: "gsap-first-animation",
      component: () => import("@/pages/gsap/FirstAnimation.vue"),
    },
    {
      path: "/three",
      name: "three",
      component: () => import("@/pages/three/index.vue"),
    },
    {
      path: "/cesium",
      name: "cesium",
      component: () => import("@/pages/cesium/index.vue"),
    },
    {
      path: "/decorator",
      name: "decorator",
      component: () => import("@/pages/decorator/index.vue"),
    },
  ],
})

export default router
