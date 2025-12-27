<script
    setup
    lang="ts"
>
    import {projects} from "@/data/Projects.ts";
    import Title from "@/components/Title.vue";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="Projects" />
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-x-10 p-5">
            <template
                v-for="project in projects"
                :key="project.id"
            >
                <div>
                    <a
                        :href="project.url"
                        target="_blank"
                        class=""
                    >
                        <img
                            :src="project.pattern"
                            alt="Project Image"
                            class="w-full h-[15rem] md:max-w-90  rounded-xl object-cover "
                        />

                        <div class="ml-2 mt-2">
                            <p class="inline underline text-lg font-bold underline-offset-4">
                                {{ project.name }}
                            </p>

                            <p class="inline"> — {{ project.description }}</p>
                        </div>
                    </a>
                </div>

            </template>
        </div>
    </Container>
</template>