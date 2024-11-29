import { createRouter, createWebHistory } from "vue-router";

// Import các component
import Bai1Lab7 from "../components/Bai1Lab7.vue";
import Bai2Lab7 from "../components/Bai2Lab7.vue";
import Bai3Lab7 from "../components/Bai3Lab7.vue";
import Bai4Lab7 from "../components/Bai4Lab7.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/bai1Lab7",
    name: "bai1lab7",
    component: Bai1Lab7,
  },
  {
    path: "/bai2Lab7",
    name: "bai2lab7",
    component: Bai2Lab7,
  },
  {
    path: "/bai3Lab7",
    name: "bai3lab7",
    component: Bai3Lab7,
  },
  {
    path: "/bai4Lab7",
    name: "bai4lab7",
    component: Bai4Lab7,
  },
];

// Tạo router instance
const router = createRouter({
  history: createWebHistory(), // Sử dụng HTML5 history mode
  routes,
});

export default router;
