<template>
  <div class="bg-white min-h-screen flex px-4 py-12 text-black">
    <div class="max-w-6xl mx-auto mt-8">
      <h1 class="text-4xl font-bold text-center mb-14">Le mie passioni</h1>

      <!-- Giallorosso (foto sinistra) -->
      <section class="grid md:grid-cols-2 gap-10 mb-20 items-center">
        <img
          src="/giallorosso.jpg"
          alt="Giallorosso"
          class="w-full h-96 object-cover rounded-xl shadow-xl"
        />

        <div>
          <h2 class="text-2xl font-semibold mb-4">
            <span class="text-yellow-400">Giallo</span
            ><span class="text-red-400">rosso</span>
          </h2>
          <p class="text-slate-1500 leading-relaxed text-lg">
            vedo solo giallorosso.
          </p>
        </div>
      </section>

      <!-- Monster S2R (foto destra) -->
      <section class="grid md:grid-cols-2 gap-10 mb-20 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-2xl font-semibold mb-4 text-yellow-400">
            Monster S2R
          </h2>
          <p class="text-slate-1500 leading-relaxed text-lg">
            Monster S2R 803 cc di puro piacere.
          </p>
        </div>

        <img
          src="/monster.jpg"
          alt="Monster S2R"
          class="order-1 md:order-2 w-full max-h-[600px] object-cover object-center rounded-xl shadow-xl"
        />
      </section>

      <!-- Brutale Italia (foto sinistra) -->
      <section class="grid md:grid-cols-2 gap-10 mb-20 items-center">
        <img
          src="/brutale.jpg"
          alt="Brutale Italia"
          class="w-full max-h-[600px] object-cover object-center rounded-xl shadow-xl"
        />

        <div>
          <h2 class="text-2xl font-semibold mb-4 text-blue-400">
            Brutale Italia
          </h2>
          <p class="text-slate-1500 leading-relaxed text-lg">
            top di gamma nel 2012, si difende benissimo anche adesso e gli
            scarichi in galleria si che ne fanno di rumore :)
          </p>
        </div>
      </section>

      <!-- Trekking (foto destra) -->
      <section class="grid md:grid-cols-2 gap-10 mb-20 items-center">
        <div class="order-2 md:order-1">
          <h2 class="text-2xl font-semibold mb-4 text-green-400">Trekking</h2>
          <p class="text-slate-1500 leading-relaxed text-lg">
            Montagne, sentieri, panorami, silenzi e bella gente
          </p>
        </div>

        <img
          src="/trek.jpg"
          alt="Trekking"
          class="order-1 md:order-2 w-full h-96 object-cover rounded-xl shadow-xl"
        />
      </section>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/components/gestioneLogin";
export default {
  name: "WorkView",
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
};
</script>
