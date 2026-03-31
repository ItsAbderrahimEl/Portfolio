<script
    setup
    lang="ts"
>
    import {Projects} from "@/data/Projects.ts";
    import Title from "@/components/Shared/Title.vue";
    import Container from "@/components/Shared/Container.vue";
    import {defineSoftwareApp} from "@vueuse/schema-org";
    import SingleProject from "@/components/Features/Projects/SingleProject.vue";

    Projects.forEach(Project => {
        defineSoftwareApp({
            url: Project.url,
            name: Project.name,
            operatingSystem: "Linux",
            images: [Project.pattern],
            description: Project.description
        })
    })
</script>

<template>
    <Container>
        <Title
            id="Projects"
            normal="My"
            colored="Craft"
        />
        <div class="grid grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-10 md:p-5 md:mt-5">
            <template
                v-for="project in Projects"
                :key="project.id"
            >
                <SingleProject :project />
            </template>
        </div>
    </Container>
</template>