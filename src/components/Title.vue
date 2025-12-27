<script
    setup
    lang="ts"
>
    defineProps<{
        title: string
    }>()

</script>

<template>

    <p class="block text-3xl md:text-4xl md:text-center font-bold">
        {{ title }}
    </p>

</template>