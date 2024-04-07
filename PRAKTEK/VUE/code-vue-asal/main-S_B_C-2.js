// copy paste ini di main.js jika kamu menggunakan file SIDE BAR COMPONENT 2 .VUE
import { createApp } from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(Vuetify);
app.use(router);
app.mount("#app");
