<template>
 <div class="bg-black min-h-screen flex items-center justify-center">
  <h1 class="text-slate-100 text-4xl font-bold">
    Torna a visitarci
  </h1>
</div>
</template>

<script>
import { useAuthStore } from "@/components/gestioneLogin";

export default {
     name:'LogoutView',
  async mounted() {
    const authStore = useAuthStore();

    try {
      await authStore.logout(); // Cognito + Pinia
      console.log("Logout eseguito");
    } catch (err) {
      console.error("Errore durante il logout", err);
    }
  },
};
</script>