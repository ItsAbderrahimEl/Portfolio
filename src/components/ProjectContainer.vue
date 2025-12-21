<script setup lang="ts">
defineProps({
    name: String,
    pattern: String,
    url: String,
});
</script>

<template>
    <a
        :href="url"
        target="_blank"
        class="md:h-72 md:w-75 h-[80vw] rounded-xl p-2 shadow-xl transition-all duration-500 ease-in-out hover:cursor-pointer hover:rounded-tl-4xl hover:shadow-md"
    >
        <img
            :src="pattern"
            alt="Project Image"
            class="h-8/9 w-full rounded-xl object-cover transition-all duration-500 ease-in-out hover:rounded-tl-4xl"
        />

        <p class="ml-2 text-lg font-bold">
            {{ name }}
        </p>
    </a>
</template>
