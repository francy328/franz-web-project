<template>
   <div class="bg-black min-h-screen px-4 py-12 text-slate-100">
  <Authenticator>
    <template v-slot="{ user,signOut }">
      <h1> ciao {{ user.username }}</h1>
      <button @click="signOut">Sign Out</button>
    </template>
  </Authenticator>
  </div>
</template>

<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";

export default {
  components: {
    Authenticator,
  },
};
</script>