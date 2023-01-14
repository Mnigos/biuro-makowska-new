<script setup lang="ts">
const routes = reactive([
  {
    name: 'Strona główna',
    path: '/',
  },
  {
    name: 'Cennik',
    path: '/cennik',
  },
])
</script>

<template>
  <div class="fixed top-0 z-50 w-full">
    <v-app-bar
      color="background-600"
      density="compact"
      elevation="24"
      height="81"
      fixed
    >
      <v-app-bar-title class="hidden sm:block">Biuro Makowska</v-app-bar-title>

      <v-spacer />

      <v-tabs color="primary-600">
        <v-tab v-for="route in routes" :key="route.name" :to="route.path">
          {{ route.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>
