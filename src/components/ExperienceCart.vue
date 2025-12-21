<script setup lang="ts">
defineProps({
    role: String,
    logo: String,
    type: String,
    duration: String,
    company_url: String,
    company_name: String,
});
</script>

<template>
    <div class="mt-10 min-w-1/2 space-y-3">
        <a
            :href="company_url"
            target="_blank"
            class="flex items-center space-x-2"
        >
            <img
                class="size-15"
                :src="logo"
                :alt="`${company_name} Logo`"
            />
            <div class="flex flex-col">
                <div class="font-bold">{{ role }}</div>
                <div class="max-w-5/6 space-x-2 text-sm">
                    <span>{{ company_name }}</span> <span>{{ type }}</span> <span> {{ duration }}</span>
                </div>
            </div>
        </a>

        <slot />
    </div>
</template>
