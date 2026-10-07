<script setup lang="ts"></script>

<template>
  <a
    target="_blank"
    class="border-box flex items-center gap-x-2 rounded-lg border border-green-200 px-4 py-3 text-secondary-text hover:cursor-pointer hover:border-green-400"
  >
    <slot name="icon" />
    <slot />
  </a>
</template>
