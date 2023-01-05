<template>
  <v-card color="background-600">
    <div class="flex flex-col gap-4 p-2">
      <v-card-title class="text-h4 !p-4"><slot name="header" /></v-card-title>

      <v-card-text class="flex flex-col gap-2">
        <slot />
      </v-card-text>
    </div>
  </v-card>
</template>
