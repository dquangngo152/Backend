import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'; // Import router
// Import Bootstrap CSS và JS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue 3
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

// Sử dụng router
app.use(router);
// Sử dụng BootstrapVue 3
app.use(BootstrapVue3);

app.mount('#app');