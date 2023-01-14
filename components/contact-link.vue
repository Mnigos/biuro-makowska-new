<script setup lang="ts">
defineProps<{
  href?: string
  icon?: string
}>()
</script>

<template>
  <a
    class="flex items-center cursor-pointer gap-2 hover:text-primary-600 transition-colors duration-300 text-sm sm:text-md"
    target="_blank"
  >
    <v-icon :icon="icon" color="primary-600" />

    <slot />
  </a>
</template>
