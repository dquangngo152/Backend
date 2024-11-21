import { createRouter, createWebHistory } from 'vue-router';
import Bai1Lab5 from '../views/Bai1Lab5.vue';
import Bai2Lab5 from '../views/Bai2Lab5.vue';
import Bai3Lab5 from '../views/Bai3Lab5.vue';
import Bai4Lab5 from '../views/Bai4Lab5.vue';
// Định nghĩa các route
const routes = [
  {
    path: '/Bai1Lab5',
    name: 'Bai1Lab5',
    component: () => import('../views/Bai1Lab5.vue'), // Lazy-load component
  },
  {
    path: '/Bai2Lab5',
    name: 'Bai2Lab5',
    component: () => import('../views/Bai2Lab5.vue'),
  },
  {
    path: '/Bai3Lab5',
    name: 'Bai3Lab5',
    component: () => import('../views/Bai3Lab5.vue'),
  },
  {
    path: '/Bai4Lab5',
    name: 'Bai4Lab5',
    component: () => import('../views/Bai4Lab5.vue'), // Lazy-load component
  },
];

// Tạo router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
