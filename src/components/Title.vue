<script
    setup
    lang="ts"
>
    defineProps<{
        title: string
    }>()

</script>

<template>

    <h1 :id="title" class="block text-3xl md:text-4xl font-bold">
        {{ title }}
    </h1>

</template>