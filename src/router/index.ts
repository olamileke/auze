import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Options from "../views/Options.vue";
import Composition from "../views/Composition.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/options',
      name: 'Options',
      component: Options
    },
    {
      path: '/composition',
      name: 'Composition',
      component: Composition
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
