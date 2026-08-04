<template>
  <v-layout>

    <!-- Barra superiore -->
    <v-app-bar color="primary">

      <v-app-bar-title>
        Franz Web Project
      </v-app-bar-title>

    </v-app-bar>


    <!-- Menu laterale -->
    <v-navigation-drawer permanent>

      <v-list>

        <v-list-item
          title="Home"
          prepend-icon="mdi-home"
          to="/"
        />

        <v-list-item
          title="Dashboard"
          prepend-icon="mdi-view-dashboard"
          to="/dashboard"
        />

        <v-list-item
          title="Login"
          prepend-icon="mdi-account"
          to="/login"
        />

      </v-list>

    </v-navigation-drawer>


    <!-- Contenuto -->
    <v-main>

      <router-view />

    </v-main>


  </v-layout>
</template>


<script setup lang="ts">

</script>
