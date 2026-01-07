<script
    setup
    lang="ts"
>
    import Title from "@/components/Title.vue";
    import {fields} from "@/data/Fields.ts"
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="Skills" />
        <div class="space-y-10 md:text-lg">
            <template
                v-for="field in fields"
                :key="field.id"
            >
                <div class="flex flex-col">
                    <p class="text-2xl md:ml-[10%] md:mb-5">
                        {{ field.name }}
                    </p>
                    <div class="grid grid-cols-3 gap-y-10  md:w-2/3 md:grid-cols-4 md:mx-auto gap-x-5 md:gap-x-20 pt-5">
                        <template
                            :key="skill.id"
                            v-for="skill in field.skills"
                        >
                            <a
                                :href="skill.url"
                                target="_blank"
                            >
                                <div class="flex flex-col h-[6rem] items-center space-y-2 col-span-1 md:mt-10">
                                    <img
                                        class="size-10 md:size-13"
                                        :src="skill.logo"
                                        :alt="skill.name"
                                        :title="skill.name"
                                    />
                                    <span class="text-sm text-center text-gray-300 md:text-gray-200"> {{ skill.name }}</span>
                                </div>
                            </a>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </Container>
</template>