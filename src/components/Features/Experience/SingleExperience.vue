<script
    setup
    lang="ts"
>
    import type {Experience} from "@/data/Experiences.ts";
    import Triangle from "@/components/Shared/Icons/Triangle.vue";
    import Bag from "@/components/Shared/Icons/Bag.vue";

    defineProps<{
        experience: Experience
    }>()

</script>

<template>
<div class="border-1 border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5 flex flex-col space-y-5">
    <span class="text-green-200 flex items-center gap-x-1 text-sm">
        <Bag class="fill-green-200"/> {{ experience.duration }}
    </span>

    <div class="flex flex-col">
        <h5 class="text-xl font-bold text-white">
            {{ experience.role }}
        </h5>

        <div class="text-md">
            <a :href="experience.company_url" class="text-green-200">{{ experience.company_name }}</a>
            —
            <span>{{ experience.type }}</span>
        </div>
    </div>

    <ul class="space-y-2">
        <li
            class="flex gap-x-1"
            v-for="description in experience.description"
        >
            <Triangle class="stroke-green-200 rotate-90 size-3 mt-1" /> <span class="text-sm">{{ description }}</span>
        </li>
    </ul>
</div>
</template>