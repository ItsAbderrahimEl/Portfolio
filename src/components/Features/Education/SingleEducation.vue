<script
    setup
    lang="ts"
>
    import type {Education} from "@/data/Education.ts";
    import School from "@/components/Shared/Icons/School.vue";
    import Triangle from "@/components/Shared/Icons/Triangle.vue";

    defineProps<{
        education: Education
    }>()
</script>

<template>
    <div class="border-1 flex gap-x-10 border-gray-800 bg-secondary/10 hover:border-green-200 rounded-lg p-5">
        <div class="hidden md:block bg-green-100/10 rounded-md p-2 w-fit h-fit">
            <School class="fill-green-200 size-8" />
        </div>

        <div class="space-y-5 w-full">
            <div class="flex justify-between items-baseline gap-x-1 w-full">
                <div>
                    <h5 class="text-white text-xl font-bold">
                        {{ education.studied }}
                    </h5>
                    <a
                        :href="education.site"
                        class="text-sm text-green-200"
                    >
                        {{ education.institution }}
                    </a>
                </div>

                <span class="text-green-200 text-sm">
            {{ education.duration }}
        </span>
            </div>

            <ul class="space-y-2 ">
                <li
                    class="flex gap-x-1 "
                    v-for="description in education.description"
                >
                    <Triangle class="stroke-green-200 size-3 rotate-90 mt-1" />
                    <span class="text-sm w-full">{{ description }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>