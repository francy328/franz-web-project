<template>
  <div class="max-w-5xl mx-auto p-6 mt-20 bg-white rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-8 text-sky-600 text-center">
      <div v-if="isAuthenticated">
        Diario digitale di {{ user.signInDetails?.loginId }}
      </div>
      <div v-else>Utente non autenticato</div>
    </h2>
    <h3 class="text-2xl font-bold mb-6 text-gray-800 text-center">
      Cerca tra le tue esperienze salvate.
    </h3>

    <div>
      <label for="ricerca" class="block text-sm font-medium text-gray-700 mb-1">
        📌 Testo da cercare
      </label>

      <input
        id="ricerca"
        v-model="stringaRicerca"
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
        v-model="categoriaSelezionata"
        class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
      >
        <option value="">Tutte</option>
        <option value="lavoro">Lavoro</option>
        <option value="universita">Università</option>
        <option value="tempo_libero">Tempo libero</option>
      </select>
    </div>
    <table class="w-full border border-gray-300 mt-6">
      <!-- <thead>
        <tr class="bg-gray-800 text-white">
          <th class="px-4 py-2 text-left">Titolo esperienza</th>
          <th class="px-4 py-2 text-left">Creata il</th>
          <th class="px-4 py-2 text-left">Nota</th>
          <th class="px-4 py-2 text-left">allegato</th>
        </tr>
      </thead> -->
      <thead>
        <tr class="bg-gray-800 text-white">
          <th
            @click="ordinaPer('titolo')"
            class="px-4 py-2 text-left cursor-pointer"
          >
            Titolo esperienza
          </th>

          <th
            @click="ordinaPer('createdAt')"
            class="px-4 py-2 text-left cursor-pointer"
          >
            Creata il
            <span v-if="campoOrdinamento === 'createdAt'">
              {{ versoOrdinamento === "asc" ? "▲" : "▼" }}
            </span>
          </th>

          <th
            @click="ordinaPer('nota')"
            class="px-4 py-2 text-left cursor-pointer"
          >
            Nota
          </th>

          <th class="px-4 py-2 text-left">Allegato</th>
          <th class="px-4 py-2 text-center">Elimina</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="esperienza in esperienzeOrdinate"
          :key="esperienza.id"
          class="odd:bg-white even:bg-gray-100"
        >
          <td class="px-4 py-2 border-t">
            {{ esperienza.titolo }}
          </td>

          <td class="px-4 py-2 border-t">
            {{ esperienza.createdAt }}
          </td>
          <td class="px-4 py-2 border-t">
            {{ esperienza.nota }}
          </td>

          <td class="px-4 py-3 text-center">
            <button @click="scaricaFile(esperienza.allegato)">📥</button>
          </td>
          <td class="px-4 py-3 text-center">
            <button
              @click="eliminaEsperienza(esperienza.id)"
              class="text-red-600 hover:text-red-800"
              title="Elimina esperienza"
            >
              🗑️
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
// @ts-ignore
import { useAuthStore } from "@/components/gestioneLogin";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { ref, onMounted } from "vue";
import { getUrl } from "aws-amplify/storage";
import { watch } from "vue";

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.authenticated);
const user = computed(() => authStore.user);

const client = generateClient<Schema>();

// create a reactive reference to the array of eperienze
//const esperienze = ref<Array<Schema["Activities"]["type"]>>([]);
const esperienze = ref<Attivita[]>([]);

const categoriaSelezionata = ref("");

const stringaRicerca = ref("");

onMounted(() => {
  listEsperienze();
});

watch([categoriaSelezionata, stringaRicerca], () => {
  listEsperienze();
});

async function listEsperienze() {
  let queryOptions = {};

  if (categoriaSelezionata.value || stringaRicerca.value) {
    queryOptions = {
      filter: {
        and: [
          ...(categoriaSelezionata.value
            ? [
                {
                  categoria: {
                    eq: categoriaSelezionata.value,
                  },
                },
              ]
            : []),

          ...(stringaRicerca.value
            ? [
                {
                  or: [
                    {
                      titolo: {
                        contains: stringaRicerca.value,
                      },
                    },
                    {
                      nota: {
                        contains: stringaRicerca.value,
                      },
                    },
                  ],
                },
              ]
            : []),
        ],
      },
    };
  }

  const { data } = await client.models.Activities.list(queryOptions);

  esperienze.value = data;
}

async function scaricaFile(allegato: string | null | undefined) {
  try {
    if (!allegato) {
      return;
    }

    const result = await getUrl({
      path: allegato,
    });

    window.open(result.url.toString(), "_blank");
  } catch (error) {
    console.error(error);
  }
}

// interface Esperienza {
//   id: string;
//   titolo: string;
//   nota: string;
//   createdAt: string;
//   allegato: string;
// }

type Attivita = Schema["Activities"]["type"];
type CampoOrdinamento = "titolo" | "nota" | "categoria" | "createdAt";

//const campoOrdinamento = ref<keyof Esperienza>("createdAt");
const campoOrdinamento = ref<CampoOrdinamento>("createdAt");
const versoOrdinamento = ref<"asc" | "desc">("desc");

const ordinaPer = (campo: CampoOrdinamento): void => {
  if (campoOrdinamento.value === campo) {
    versoOrdinamento.value = versoOrdinamento.value === "asc" ? "desc" : "asc";
  } else {
    campoOrdinamento.value = campo;
    versoOrdinamento.value = "asc";
  }
};

// const esperienzeOrdinate = computed<Esperienza[]>(() => {
//   return [...esperienze.value].sort((a, b) => {
//     // Ordinamento per data
//     if (campoOrdinamento.value === "createdAt") {
//       const dataA = new Date(a.createdAt).getTime();
//       const dataB = new Date(b.createdAt).getTime();

//       return versoOrdinamento.value === "asc" ? dataA - dataB : dataB - dataA;
//     }

//     // Ordinamento alfabetico per le altre colonne
//     const valoreA = String(a[campoOrdinamento.value] ?? "");
//     const valoreB = String(b[campoOrdinamento.value] ?? "");

//     return versoOrdinamento.value === "asc"
//       ? valoreA.localeCompare(valoreB, "it")
//       : valoreB.localeCompare(valoreA, "it");
//   });
// });

const esperienzeOrdinate = computed(() => {
  return [...esperienze.value].sort((a, b): number => {
    if (campoOrdinamento.value === "createdAt") {
      const dataA = new Date(a.createdAt).getTime();
      const dataB = new Date(b.createdAt).getTime();
      return versoOrdinamento.value === "asc" ? dataA - dataB : dataB - dataA;
    }
    const valoreA = a[campoOrdinamento.value] ?? "";
    const valoreB = b[campoOrdinamento.value] ?? "";
    return versoOrdinamento.value === "asc"
      ? valoreA.localeCompare(valoreB, "it")
      : valoreB.localeCompare(valoreA, "it");
  });
});

const eliminaEsperienza = async (id: string): Promise<void> => {
  const conferma = confirm("Sei sicuro di voler eliminare questa esperienza?");

  if (!conferma) return;

  client.models.Activities.delete({ id });
  listEsperienze();
};

type Test = Schema["Activities"]["type"];
</script>
