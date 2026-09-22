<template>
  <div class="flex flex-col min-h-screen items-center justify-center">
    
    <div v-if="isAuthenticated">
      Ciao {{ user?.username }}
    </div>

    <div v-else>
      Utente non autenticato
    </div>
  
    <ul>
      <li 
        v-for="esperienza in esperienze" 
        :key="esperienza.id">
        {{ esperienza }}
      </li>
    </ul>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
// @ts-ignore
import { useAuthStore } from '@/components/gestioneLogin'
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ref,onMounted } from "vue";




const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.authenticated)
const user = computed(() => authStore.user)


const client = generateClient<Schema>();

// create a reactive reference to the array of eperienze
const esperienze = ref<Array<Schema['Activities']["type"]>>([]);

// fetch todos when the component is mounted
 onMounted(() => {
  listEsperienze();
});


function listEsperienze() {
  debugger;
  client.models.Activities.observeQuery().subscribe({
    next: ({ items, isSynced }) => {
      esperienze.value = items
      console.log(JSON.stringify(esperienze.value, null, 2));
     },
  }); 
}



</script>