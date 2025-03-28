import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).use(ElementPlus).mount("#app");
