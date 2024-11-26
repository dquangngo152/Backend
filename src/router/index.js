import { createRouter, createWebHistory } from 'vue-router';
import Bai1Lab6 from '../views/Bai1Lab6.vue';
import Bai2Lab6 from '../views/Bai2Lab6.vue';
import Bai3Lab6 from '../views/Bai3Lab6.vue';
import Bai4Lab6 from '../views/Bai4Lab6.vue';

// Định nghĩa các route
const routes = [
  {
    path: "/Bai1Lab6",
    name: "Bai1",
    component: Bai1Lab6,
  },
  {
    path: '/Bai2Lab6',
    name: ' Bai2',
    component:Bai2Lab6
  },
  {
    path: '/Bai3Lab6',
    name: ' Bai3',
    component: Bai3Lab6
  },
  {
    path: '/Bai4Lab6',
    name: ' Bai4',
    component: Bai4Lab6
  },
];

// Tạo router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Sử dụng lịch sử trình duyệt
  routes,
});

export default router;
