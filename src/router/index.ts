import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
//import JobResultsView from "@/views/TutorialView.vue";
import WorkView from "@/views/WorkView.vue";
import TutorialView from "@/views/TutorialView.vue";
import LezioniView from "@/views/LezioniView.vue";
import GialloRossoView from "@/views/GialloRossoView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  
   {
    path: "/lezioni",
    name: "lezioni",
    component: LezioniView,
  },
  {
    path: "/tutorial",
    name: "tutorial",
    component: TutorialView,
  },
   {
    path: "/work",
    name: "work",
    component: WorkView,
  },
  {
    path: "/giallorosso",
    name: "giallorosso",
    component: GialloRossoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
