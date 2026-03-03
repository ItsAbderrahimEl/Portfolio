<script
    setup
    lang="ts"
>
</script>

<template>
    <div class="flex flex-col space-y-2 bg-secondary/10 rounded-xl p-5 border-gray-150 border-1 border-gray-800 hover:border-green-300">
        <div class="p-1 bg-green-200/10 rounded-md w-fit h-fit ">
            <slot name="icon"/>
        </div>

        <div class="text-lg font-bold">
            <slot name="title" />
        </div>

        <div class="text-sm">
            <slot name="description" />
        </div>
    </div>
</template>