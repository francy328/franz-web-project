<template>  
<main-nav />
 <router-view />
<Footer />
</template>

<script>
  import MainNav from "@/components/MainNav.vue";
  import { useAuthStore } from "@/components/gestioneLogin";
  import Footer from "@/components/Footer.vue"

  export default {
    name: "App",
    components:{
      MainNav,
      Footer,
    },
    async mounted() {
    const authStore = useAuthStore();
    await authStore.checkAuth();
  }
};


</script>