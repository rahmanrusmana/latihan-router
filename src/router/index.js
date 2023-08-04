import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contac from "@/views/Contac.vue";
import Produk from "@/views/Produk.vue";
import Detail from "@/views/Detail.vue";
import Kategori from "@/views/Kategori.vue";
import DetailKategori from "@/views/DetailKategori.vue";
import NotFound from "@/views/NotFound.vue";
import Login from "@/views/Login.vue"
import { users } from "../assets/User";
import Counter from "@/views/Counter.vue";
import Todo from "@/views/todo.vue";

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contac",
    name: "Contac",
    component: Contac,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
    beforeEnter: (to, from, next) => {
      const loggedInUser = true;
      if (loggedInUser) {
        next(); // Lanjutkan navigasi ke halaman produk jika sudah login
      } else {
        next("/login"); // Alihkan ke halaman login jika belum login
      }
    },
  },
  {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/detailkategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path: "/detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
  {
    path: "/:patMacth(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: true,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
   },
   {
    path: "/todo",
    name: "Todo",
    component: Todo,
   },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;