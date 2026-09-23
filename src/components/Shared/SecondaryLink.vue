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
       class="flex border-box hover:border-green-400 hover:cursor-pointer items-center gap-x-2 px-4 py-3 rounded-lg border text-secondary-text border-green-200">
        <slot name="icon"/>
        <slot />
    </a>
</template>