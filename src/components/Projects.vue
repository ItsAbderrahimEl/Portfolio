<script
    setup
    lang="ts"
>
    import {projects} from "@/data/Projects.ts";
    import Title from "@/components/Title.vue";
    import Container from "@/components/Container.vue";
    import {defineSoftwareApp} from "@vueuse/schema-org";

    projects.forEach(project => {
        defineSoftwareApp({
            url: project.url,
            name: project.name,
            operatingSystem: "Linux",
            images: [project.pattern],
            description: project.description,
            applicationCategory: project.applicationCategory,
        })
    })
</script>

<template>
    <Container>
        <Title title="Projects" />
        <div class="space-y-10 md:grid md:grid-cols-2 md:gap-x-30 md:p-5 md:mt-5">
            <template
                v-for="project in projects"
                :key="project.id"
            >
                <div>
                    <a :href="project.url" target="_blank">
                        <img
                            :src="project.pattern"
                            alt="Project Image"
                            class="w-full h-[15rem] md:max-w-90  rounded-xl object-cover"
                        />
                    </a>

                    <div class="ml-2 mt-2 md:max-w-90">
                        <a
                            :href="project.url"
                            target="_blank"
                            class="inline underline text-lg font-bold underline-offset-4"
                        >
                            {{ project.name }}
                        </a>

                        <p class="inline"> — {{ project.description }}</p>
                    </div>
                </div>

            </template>
        </div>
    </Container>
</template>