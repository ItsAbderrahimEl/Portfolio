<script setup lang="ts">
defineProps<{
  title: string;
  content: string;
}>();
</script>

<template>
  <div
    class="mt-5 rounded-lg border border-l-4 border-green-200 bg-secondary/10 p-5"
  >
    <h5 class="text mb-5 text-lg font-bold text-white">
      {{ title }}
    </h5>

    <p v-html="content" />
  </div>
</template>
