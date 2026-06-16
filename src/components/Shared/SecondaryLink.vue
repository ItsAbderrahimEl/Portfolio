<script
    setup
    lang="ts"
>
    defineProps<{
        href: string
    }>()

</script>

<template>
    <a target="_blank" :href class="flex border-box items-center gap-x-2 px-4 py-3 rounded-lg border text-secondary-text border-green-200">
        <slot name="icon"/>
        <slot />
    </a>
</template>