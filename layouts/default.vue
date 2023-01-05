<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <v-app class="bg-background-800 !min-h-screen">
      <v-layout>
        <div
          class="bg-no-repeat !min-h-screen flex flex-col max-w-screen"
          :style="
            route.path === '/' ? 'background-image: url(/background.jpg)' : ''
          "
        >
          <navigation-bar />

          <v-main>
            <div class="p-4">
              <slot />
            </div>
          </v-main>

          <the-footer class="justify-self-end" />
        </div>
      </v-layout>
    </v-app>
  </div>
</template>
