<script
    setup
    lang="ts"
>
   defineProps<{
      href: string
   }>()

</script>

<template>
<a target="_blank" :href class="flex items-center gap-x-2 px-4 py-3 rounded-lg bg-green-200 border-1 border-green-200">
    <slot name="icon"/>
    <slot />
</a>
</template>