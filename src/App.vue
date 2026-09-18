<template>
  <div class="min-h-screen flex flex-col">
    <MainNav />

    <main class="flex-1">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import Footer from "@/components/Footer.vue";
import { useAuthStore } from "@/components/gestioneLogin";

export default {
  name: "App",
  components: {
    MainNav,
    Footer,
  },
  async mounted() {
    const authStore = useAuthStore();
    await authStore.checkAuth();
  },
};


</script>