<script
    setup
    lang="ts"
>
    withDefaults(
        defineProps<{
            id ?: string,
            normal ?: string,
            colored ?: string
        }>(),
        {
            id: '#'
        }
    )
</script>

<template>

    <h1 :id="id" class="block text-3xl md:text-5xl font-bold">
        {{ normal }} <span class="green-gradient">{{ colored }}</span>
    </h1>

</template>