<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >franz App
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
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li class="ml-9 h-full">
              <router-link to="/tutorial"> Tutorial </router-link>
            </li>

            <li class="ml-9 h-full">
              <router-link to="/lezioni"> Lezioni </router-link>
            </li>

            <li class="ml-9 h-full">
              <router-link to="/work"> Work </router-link>
            </li>
          </ul>
        </nav> -->

        <!-- <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div> -->
      </div>

      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
//import ActionButton from "@/components/Shared/ActionButton.vue";
//import ProfileImage from "@/components/Navigation/ProfileImage.vue";
//import TheSubnav from "@/components/Navigation/TheSubnav.vue";

export default {
  name: "MainNav",
  // components: {
  //   ActionButton,
  //   ProfileImage,
  //   TheSubnav,
  // },
  data() {
    return {
      // menuItems: [
      //   { text: "Home", url: "/" },
      //   { text: "Tutorial", url: "/tutorial" },
      //   { text: "Lezioni", url: "/lezioni" },
      //   { text: "Work", url: "/work" },
      //   { text: "Asfalto sentieri e passione giallorossa", url: "/" },

      // ],
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

  // methods: {
  //   loginUser() {
  //     this.isLoggedIn = true;
  //   },
  // },
};
</script>
