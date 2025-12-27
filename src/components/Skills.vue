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
        <div class="space-y-5">
            <template
                v-for="field in fields"
                :key="field.id"
            >
                <div class="flex flex-col">
                    <p class="text-xl">
                        {{ field.name }}:
                    </p>
                    <div class="grid grid-cols-4 md:grid-cols-6 gap-x-2 pt-5">
                        <template
                            :key="skill.id"
                            v-for="skill in field.skills"
                        >
                            <a
                                :href="skill.url"
                                target="_blank"
                            >
                                <div class="flex flex-col h-[6rem] items-center space-y-2 col-span-1">
                                    <img
                                        class="size-10"
                                        :src="skill.logo"
                                        :alt="skill.name"
                                        :title="skill.name"
                                    />
                                    <span class="text-sm text-center text-gray-300"> {{ skill.name }}</span>
                                </div>
                            </a>
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </Container>
</template>