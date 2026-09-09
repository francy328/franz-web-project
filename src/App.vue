<template>  
<main-nav />
 <router-view />
</template>

<script>
  import MainNav from "@/components/MainNav.vue";
  import { useAuthStore } from "@/components/gestioneLogin";

  export default {
    name: "App",
    components:{
      MainNav,
    },
    async mounted() {
    const authStore = useAuthStore();
    await authStore.checkAuth();
  }
};


</script>