<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">
      Raccolta Esperienze
    </h2>

    <form @submit.prevent="salva" class="space-y-4">
      
      <!-- Data e Categoria sulla stessa riga -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
          <label
            for="data"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            📅 Data
          </label>
          <input
            id="data"
            type="date"
            v-model="form.data"
            class="w-full rounded-md border border-gray-300 px-3 py-2
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                   outline-none"
          />
        </div>

        <div>
          <label
            for="categoria"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            Categoria
          </label>
          <select
            id="categoria"
            v-model="form.categoria"
            class="w-full rounded-md border border-gray-300 px-3 py-2
                   focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                   outline-none"
          >
            <option value="">Seleziona una categoria</option>
            <option value="tempo_libero">🏍️ Tempo Libero</option>
            <option value="universita">🎓 Università</option>
            <option value="lavoro">💼 Lavoro</option>
          </select>
        </div>

      </div>

      <!-- Note / Appunti -->
      <div>
        <label
          for="note"
          class="block text-sm font-medium text-gray-700 mb-1"
        >
          📝 Note
        </label>

        <textarea
          id="note"
          v-model="form.note"
          rows="8"
          placeholder="Scrivi qui i tuoi appunti, un resoconto dell'escursione, note di lavoro..."
          class="w-full rounded-md border border-gray-300 px-3 py-2
                 focus:border-blue-500 focus:ring-2 focus:ring-blue-200
                 outline-none resize-y"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-2 rounded-md
               hover:bg-blue-700 transition-colors"
      >
        Salva
      </button>
    </form>
  </div>

  <!-- Debug -->
<div class="mt-6">
  <h3 class="text-sm font-semibold text-gray-600 mb-2">
    🔍 Debug
  </h3>

  <pre class="bg-gray-100 p-4 rounded-md text-sm overflow-auto">
{{ JSON.stringify(form, null, 2) }}
  </pre>
</div>


</template> 

<script setup lang="ts">
import { ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';


const form = ref({
  data: '',
  categoria: '',
  note: ''
})

const client = generateClient<Schema>();

const activities = ref<Array<Schema['Activities']["type"]>>([]);

// const salva = () => {
//   console.log(form.value)
// }


async function salva() {
  console.log(client.models);
  await client.models.Activities.create(form.value);
  console.log(form.value);
}

</script>