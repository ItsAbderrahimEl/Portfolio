<script
    setup
    lang="ts"
>
    import {experiences} from "@/data/Experiences.ts";
    import Title from "@/components/Shared/Title.vue";
    import Container from "@/components/Shared/Container.vue";
    import SingleExperience from "@/components/Features/Experience/SingleExperience.vue";
</script>

<template>
    <Container>
        <Title
            id="Experiences"
            normal="Where I've"
            colored="Worked"
        />
        <div class="space-y-10">
            <template
                v-for="experience in experiences"
                :key="experience.id"
            >
                <SingleExperience :experience="experience" />
            </template>
        </div>
    </Container>
</template>