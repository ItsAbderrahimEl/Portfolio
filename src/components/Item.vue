<script setup lang="ts">
defineProps({
    title: String,
    logo: String,
    url: {
        type: String,
        default: '#',
    },
});
</script>

<template>
    <a
        :href="url"
        target="_blank"
    >
        <img
            class="size-10"
            :src="logo"
            :alt="title"
            :title="title"
        />
    </a>
</template>
