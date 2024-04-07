import { createApp } from "vue";
// import "./style.css";
import router from "./router";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// createApp(App).mount("#app");
const app = createApp(App);

app.use(router);
app.mount("#app");

//    "vue-js-modal": "^1.3.16"
