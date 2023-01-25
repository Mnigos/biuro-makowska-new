<script setup lang="ts">
import { marked } from 'marked'

defineProps<{
  content?: string
}>()
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <v-card color="background-600">
    <div class="flex flex-col gap-4 p-2">
      <v-card-title class="text-h4 !p-4"><slot name="header" /></v-card-title>

      <v-card-text>
        <div
          v-if="content"
          class="flex flex-col gap-2 list-disc list-inside"
          v-html="marked.parse(content)"
        />

        <div v-else class="flex flex-col gap-2">
          <slot />
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>
