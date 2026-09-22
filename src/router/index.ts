import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import RaccoltaView from "@/views/RaccoltaView.vue";
import RicercaView from "@/views/RicercaView.vue";
import GialloRossoView from "@/views/GialloRossoView.vue";
import LoginView from '@/views/LoginView.vue';
import LogoutView from '@/views/LogoutView.vue';


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  
   {
    path: "/ricerca",
    name: "ricerca",
    component: RicercaView,
  },
  {
    path: "/raccolta",
    name: "raccolta",
    component: RaccoltaView,
  },
  {
    path: "/giallorosso",
    name: "giallorosso",
    component: GialloRossoView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
