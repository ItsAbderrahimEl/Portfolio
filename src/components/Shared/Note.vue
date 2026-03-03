<script
    setup
    lang="ts"
>
   defineProps<{
       title: string
   }>()

</script>

<template>
<div class="border-l-4 bg-secondary/10 border-1 border-green-200 p-5 rounded-lg">

    <h5 class="text-white font-bold text-lg mb-5">{{ title }}</h5>

    <p>
        <slot />
    </p>

</div>
</template>