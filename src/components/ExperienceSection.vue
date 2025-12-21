<script setup lang="ts">
import type { Experience } from '@/types/Experience';
import MainCart from '@/components/MainCart.vue';
import CartTitle from '@/components/CartTitle.vue';
import ExperienceCart from '@/components/ExperienceCart.vue';

defineProps<{
    title: string;
    experiences: Experience[];
}>();
</script>

<template>
    <MainCart class="flex">
        <CartTitle>{{ title }}</CartTitle>

        <div class="flex flex-col md:flex-row md:space-x-5">
            <template
                v-for="experience in experiences"
                :key="experience.id"
            >
                <ExperienceCart
                    :role="experience.role"
                    :company_name="experience.company_name"
                    :duration="experience.duration"
                    :logo="experience.logo"
                    :company_url="experience.company_url"
                    :type="experience.type"
                >
                    <ul
                        class="list-inside list-disc space-y-2 text-sm pl-3 md:pl-0"
                        v-html="experience.description"
                    />
                </ExperienceCart>
            </template>
        </div>
    </MainCart>
</template>
