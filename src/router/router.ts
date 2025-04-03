import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';


import HomeView from '../views/HomeView.vue';
import CatalogView from '../views/CatalogView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: CatalogView,
  },
  ];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
