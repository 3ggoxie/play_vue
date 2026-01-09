import { createApp } from "vue";
import "./styles/index.css";
import App from "./App.vue";
import gsap from "gsap";

const app = createApp(App);
app.use(gsap);
app.mount("#app");
