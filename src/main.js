import { createApp } from 'vue'
import App from './App.vue'
import "../src/main.css"
import "./assets/style.css";
import router from "./router"


createApp(App).use(router).mount('#app')
