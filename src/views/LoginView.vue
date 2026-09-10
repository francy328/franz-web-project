<template>
  <div class="bg-black min-h-screen flex justify-center pt-32 text-slate-100">
    <Authenticator>
      <template v-slot="{ user }">
        {{ saveUser(user) }}
        <h1 class="text-slate-100 text-4xl font-bold text-center">
          Ciao {{ user.signInDetails?.loginId }} <br />
          redirect verso la home tra qualche secondo
        </h1>
      </template>
    </Authenticator>
  </div>
</template>

<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
import { useAuthStore } from "@/components/gestioneLogin";
import { useRouter } from "vue-router";

export default {
  components: {
    Authenticator,
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    const saveUser = (user) => {
      console.log("save user");
      authStore.setUser(user);

      setTimeout(() => {
        router.push("/");
      }, 4000);
    };

    return {
      saveUser,
    };
  },
};
</script>
