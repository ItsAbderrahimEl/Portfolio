<script
    setup
    lang="ts"
>
    import Title from "@/components/Shared/Title.vue";
    import {fields} from "@/data/Fields.ts"
    import Container from "@/components/Shared/Container.vue";
    import {languages} from "@/data/Languages.ts";
</script>

<template>
    <Container>
        <Title
            id="Fields"
            normal="What I"
            colored="Know"
        />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-20 md:text-lg w-full">
            <template
                v-for="field in fields"
                :key="field.id"
            >
                <div class="col-span-1 border-1 border-gray-800 bg-secondary/10 p-5 rounded-lg">
                    <h2 class="text-xl flex text-white font-bold mb-5 items-center gap-x-2">
                        <span class="size-2 animate-pulse bg-green-200 rounded-full"></span> {{ field.name }}
                    </h2>
                    <div class="flex flex-wrap gap-3 text-sm ml-5">
                        <template
                            :key="skill.id"
                            v-for="skill in field.skills"
                        >
                            <a
                                class="bg-green-200 px-6 py-2 border-1 border-transparent hover:border hover:-translate-y-1 flex items-center justify-center rounded-lg transition-transform duration-300"
                                :href="skill.url"
                                target="_blank"
                            >

                                <span class="text-sm text-center text-black">
                                    {{ skill.name }}
                                </span>
                            </a>
                        </template>
                    </div>
                </div>
            </template>
        </div>

        <div class="border-1 border-gray-800 bg-secondary/10 p-5 rounded-lg w-full mt-10">
            <h5 class="text-white text-xl font-bold mb-5">
                Languages
            </h5>
            <div class="flex flex-col md:flex-row gap-y-5 items-center justify-evenly">
                <template
                    v-for="language in languages"
                >
                    <div class="flex flex-col items-center">
                        <span class="text-white">{{ language.name }}</span>
                        <span class="text-sm text-gray-500">{{ language.proficiency }}</span>
                    </div>
                </template>
            </div>
        </div>
    </Container>
</template>