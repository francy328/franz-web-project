<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
      <div v-if="isAuthenticated">
    Ciao {{ user?.username }}
  </div>

  <div v-else>
    Utente non autenticato
  </div>

  <h1 class="text-4xl font-bold">Lezioni View----- under construction</h1>
</div>
</template>

<script>
import { useAuthStore } from "@/components/gestioneLogin";
export default { 
    name:'LezioniView',
     computed: {
    authStore() {
      return useAuthStore();
    },

    isAuthenticated() {
      return this.authStore.authenticated;
    },

    user() {
      return this.authStore.user;
    },
  },
}

</script>