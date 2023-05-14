import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";
import store from './store'


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');

//base url for backend restful apis
axios.defaults.baseURL = 'http://localhost:8080/'
