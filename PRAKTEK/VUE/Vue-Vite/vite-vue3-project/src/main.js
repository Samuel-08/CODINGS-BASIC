import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";

// import komponen
import navbar from "./components/NavbarCom.vue"; //bisa kaya gini
// import navbar from "..src/components/NavbarCom.vue"; //bisa juga kaya gini

let app = createApp(App);

// registrasi komponen
app.component("navbar", navbar);

app.mount("#app");
