import { createApp } from "vue";
import { useCounterStore } from "@/stores/counter";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App);
app.use(router);
const counterStore = useCounterStore();
app.mount("#app");
