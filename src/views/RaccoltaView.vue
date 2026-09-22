<template>
  <div class="max-w-5xl mx-auto p-6 mt-20 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-8 text-sky-600 text-center">
      <div v-if="isAuthenticated">
        Diario digitale di {{ user.signInDetails?.loginId }}
      </div>
      <div v-else>Utente non autenticato</div>
    </h2>
    <h3 class="text-2xl font-bold mb-6 text-gray-800">
      Memorizza le tue esperienze in un unico spazio personale,
      consultali quando ti servono.
    </h3>

    <form @submit.prevent="salva" class="space-y-4">
      <!-- Data e Categoria sulla stessa riga -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            for="titolo"
            class="block text-sm font-medium text-gray-700 mb-1"
          >
            📌 Titolo
          </label>

          <input
            id="titolo"
            v-model="form.titolo"
            type="text"
            placeholder="Inserisci il titolo dell'esperienza..."
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
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
            class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value="">Seleziona una categoria</option>
            <option value="tempo_libero">🏍️ Tempo Libero</option>
            <option value="universita">🎓 Università</option>
            <option value="lavoro">💼 Lavoro</option>
          </select>
        </div>
      </div>

      <!-- Allegato -->
      <div>
        <label for="file" class="block text-sm font-medium text-gray-700 mb-1">
          📎 Allegato
        </label>

        <input
          id="file"
          type="file"
          @change="onFileSelected"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
        />

        <p v-if="selectedFile" class="mt-2 text-sm text-gray-600">
          File selezionato: {{ selectedFile.name }}
        </p>
      </div>

      <br /><br />

      <!-- Note / Appunti -->
      <div>
        <label for="nota" class="block text-sm font-medium text-gray-700 mb-1">
          📝 Note
        </label>

        <textarea
          id="note"
          v-model="form.nota"
          rows="8"
          placeholder="Scrivi qui i tuoi appunti, un resoconto dell'escursione, note di lavoro..."
          class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-y"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Salva
      </button>
    </form>
  </div>

  <!-- Debug -->
  <div class="mt-6">
    <h3 class="text-sm font-semibold text-gray-600 mb-2">🔍 Debug</h3>

    <pre class="bg-gray-100 p-4 rounded-md text-sm overflow-auto"
      >{{ JSON.stringify(form, null, 2) }}
  </pre
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { uploadData } from "aws-amplify/storage";
import { computed } from "vue";
import { useAuthStore } from "../components/gestioneLogin";

const authStore = useAuthStore();

const isAuthenticated = computed(() => authStore.authenticated);

const user = computed(() => authStore.user);

const form = ref({
  titolo: "",
  categoria: "",
  nota: "",
});

const client = generateClient<Schema>();

const activities = ref<Array<Schema["Activities"]["type"]>>([]);

async function salva() {
  try {
    const file = selectedFile.value;

    if (!file) {
      alert("Seleziona un file");
      return;
    }

    const filePath = `attachments/${Date.now()}-${file.name}`;

    await uploadData({
      path: filePath,
      data: file,
    }).result;

    await client.models.Activities.create({
      ...form.value,
      allegato: filePath,
    });

    alert("✅ File caricato con successo!");
  } catch (error) {
    console.error(error);
    alert("❌ Errore durante il caricamento del file");
  }
}

const selectedFile = ref<File | null>(null);

function onFileSelected(event: Event) {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    selectedFile.value = target.files[0];
  }
}
</script>
