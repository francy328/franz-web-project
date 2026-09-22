<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    
    <div v-if="isAuthenticated">
      Ciao {{ user?.username }}
    </div>

    <div v-else>
      Utente non autenticato
    </div>

    <br><br>

    <h1 class="text-4xl font-bold">
      Lezioni View ----- under construction
    </h1>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useAuthStore } from '@/components/gestioneLogin'

const authStore = useAuthStore()

const isAuthenticated = computed(() => authStore.authenticated)

const user = computed(() => authStore.user)
</script>