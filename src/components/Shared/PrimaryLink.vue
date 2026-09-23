<script
    setup
    lang="ts"
>
   defineProps<{
      href: string
   }>()

</script>

<template>
<a target="_blank"
   class="flex items-center hover:cursor-pointer gap-x-2 px-4 py-3 rounded-lg bg-green-200 hover:shadow-xl  ">
    <slot name="icon"/>
    <slot />
</a>
</template>