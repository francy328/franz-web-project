<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <!-- NAVBAR STICKY SCURA -->
    <div class="fixed left-0 top-0 h-16 w-full bg-slate-800/90 backdrop-blur-sm border-b border-slate-700">
      <div
        class="mx-auto flex h-full flex-nowrap px-8 max-w-6xl"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl font-bold text-slate-100"
        >
          franz App
        </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5 text-slate-300 hover:text-white"
              >
                {{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
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
        "h-32": this.isLoggedIn,
      };
    },
  },
};
</script>
