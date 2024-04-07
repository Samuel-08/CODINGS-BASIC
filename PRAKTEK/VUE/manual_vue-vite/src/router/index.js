import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "transaksi.index",
    component: () => import("../views/transaksi/Index.vue"),
  },
  {
    path: "/create",
    name: "transaksi.create",
    component: () => import("../views/transaksi/Create.vue"),
  },
  {
    path: "/edit/:id",
    name: "transaksi.edit",
    component: () => import("../views/transaksi/Edit.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

//    "vue-js-modal": "^1.3.16"
//    "vuetify"
// vite-plugin-vuetify

//
// import axios from "axios";
//
// const options = {
//   method: "GET",
//   url: "https://www.googleapis.com/books/v1/volumes",
//   params: { q: "${term}", maxResults: "11" },
//   headers: {
//     Authorization: "Basic Og==",
//     "keyes&key": "AIzaSyCPZ40kf9ZNOf13GpjYstxFxiccs_GB3gY",
//   },
// };
//
// // https://www.googleapis.com/books/v1/volumes?q=
//
// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
