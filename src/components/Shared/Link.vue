<script setup lang="ts">
type LinkType = "primary" | "secondary";

defineProps<{
  type: LinkType;
}>();
</script>

<template>
  <a
    :class="[
      'border-box flex items-center gap-x-2 rounded-lg px-4 py-3 transition-colors duration-300',
      {
        'bg-green-200 hover:cursor-pointer hover:bg-green-200/80 hover:shadow-xl':
          type === 'primary',
        'border border-green-200 text-secondary-text hover:cursor-pointer hover:border-green-400':
          type === 'secondary',
      },
    ]"
  >
    <slot name="icon" />
    <slot />
  </a>
</template>
