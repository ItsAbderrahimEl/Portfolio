<script
    setup
    lang="ts"
>
    import type {Project} from "@/data/Projects.ts";
    import ExternalLink from "@/components/Shared/Icons/ExternalLink.vue";

    defineProps<{
        project: Project
    }>()
</script>

<template>
    <div class="border border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5 flex flex-col gap-y-5 group">
        <img
            :src="project.pattern"
            :alt="project.name"
            class="w-full h-60 md:max-w-90  rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <div class="flex flex-col bg-black/10">
            <a :href="project.url" target="_blank" class="flex justify-between items-center mb-1">
                <h5 class="text-white text-xl font-bold">
                    {{ project.name }}
                </h5>

                <ExternalLink class="stroke-green-200 size-5"/>
            </a>

            <p class="text-sm">
                {{ project.description }}
            </p>
        </div>
    </div>
</template>