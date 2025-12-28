<script
    setup
    lang="ts"
>
    defineProps<{
        title: string
    }>()

</script>

<template>

    <p class="block text-3xl md:text-4xl  font-bold">
        {{ title }}
    </p>

</template>