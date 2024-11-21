import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'; // Import router đã tạo

const app = createApp(App);

// Sử dụng router trong ứng dụng
app.use(router);

app.mount('#app');
