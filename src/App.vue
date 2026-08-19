<template>  
<main-nav />
 <!-- <router-link to="/">Home-link </router-link>
 <router-link to="/work">work-link </router-link> -->
 <router-view />
</template>

<script>
  import MainNav from "@/components/MainNav.vue";

  export default {
    name: "App",
    components:{
      MainNav,
    }
};


</script>