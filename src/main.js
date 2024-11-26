import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';

// Import BootstrapVue3
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

// Sử dụng router và BootstrapVue3
app.use(router);
app.use(BootstrapVue3);

app.mount('#app');