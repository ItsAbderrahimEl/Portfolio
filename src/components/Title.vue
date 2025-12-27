<script
    setup
    lang="ts"
>
    defineProps<{
        title: string
    }>()

</script>

<template>

    <p class="block text-3xl font-bold">
        {{ title }}
    </p>

</template>