<script setup lang="ts"></script>

<template>
  <a
    target="_blank"
    class="flex items-center gap-x-2 rounded-lg bg-green-200 px-4 py-3 transition-colors duration-300 hover:cursor-pointer hover:bg-green-300 hover:text-green-100 hover:shadow-xl"
  >
    <slot name="icon" />
    <slot />
  </a>
</template>
