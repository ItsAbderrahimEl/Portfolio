<script setup lang="ts">
import type { Project } from '@/types/Project';
import MainCart from '@/components/MainCart.vue';
import CartTitle from '@/components/CartTitle.vue';
import ProjectContainer from '@/components/ProjectContainer.vue';

defineProps<{
    title: string;
    projects: Project[];
}>();
</script>

<template>
    <MainCart>
        <CartTitle>{{ title }}</CartTitle>

        <div class="mt-10 flex flex-col md:grid min-h-4/5 md:grid-cols-3 gap-y-10 md:overflow-y-scroll pb-3">
            <template
                v-for="project in projects"
                :key="project.id"
            >
                <ProjectContainer
                    :name="project.name"
                    :url="project.url"
                    :pattern="project.pattern"
                />
            </template>
        </div>
    </MainCart>
</template>
