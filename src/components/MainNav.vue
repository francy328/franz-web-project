<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 w-full bg-slate-800/90 backdrop-blur-sm border-b border-slate-700 z-50">
      <div class="mx-auto flex items-center justify-between h-16 px-4 md:px-8 max-w-6xl">

        <!-- LOGO -->
        <router-link
          :to="{ name: 'Home' }"
          class="text-xl font-bold text-slate-100"
        >
          franz App
        </router-link>

        <!-- HAMBURGER (solo mobile) -->
        <button
          class="md:hidden text-slate-200"
          @click="isOpen = !isOpen"
        >
          <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- MENU DESKTOP -->
        <nav class="hidden md:block">
          <ul class="flex list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="text-slate-300 hover:text-white"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <!-- MENU MOBILE -->
      <div
        v-if="isOpen"
        class="md:hidden bg-slate-800 border-t border-slate-700 px-4 pb-4"
      >
        <ul class="flex flex-col space-y-3">
          <li
            v-for="menuItem in menuItems"
            :key="menuItem.text"
          >
            <router-link
              :to="menuItem.url"
              class="block text-slate-300 hover:text-white py-2"
              @click="isOpen = false"
            >
              {{ menuItem.text }}
            </router-link>
          </li>
        </ul>
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",

  data() {
    return {
      isOpen: false,
      menuItems: [
        { text: "Home", url: { name: "Home" } },
        { text: "Tutorial", url: { name: "tutorial" } },
        { text: "Lezioni", url: { name: "lezioni" } },
        { text: "Work", url: { name: "work" } },
        { text: "Asfalto sentieri e passione giallorossa", url: { name: "giallorosso" } },
      ],
      isLoggedIn: false,
    };
  },

  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-auto": this.isLoggedIn,
      };
    },
  },
};
</script>
