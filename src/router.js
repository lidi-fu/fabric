// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import NewDay from './components/NewDay.vue';
import CatJack from './components/CatJack.vue';
import WildFable from './components/WildFable.vue';
import AllinMotion from './components/AllinMotion.vue';

const routes = [
  { path: '/', component: HomeComponent },
  { path: '/NewDay', component: NewDay },
  { path: '/CatJack', component: CatJack },
  { path: '/AllinMotion', component: AllinMotion },
  { path: '/WildFable', component: WildFable },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
