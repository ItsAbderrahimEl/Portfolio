<script
    setup
    lang="ts"
>
    import {educations} from "@/data/Education.ts";
    import Title from "@/components/Shared/Title.vue";
    import Container from "@/components/Shared/Container.vue";
    import SingleEducation from "@/components/Features/Education/SingleEducation.vue";
    import Note from "@/components/Shared/Note.vue";
</script>

<template>
    <Container>
        <Title
            id="Education"
            normal="Where I've"
            colored="Learned"
        />
        <div class=" w-full space-y-10 md:space-y-15 md:text-lg md:p-5">
            <template
                v-for="education in educations"
                :key="education.id"
            >
                <SingleEducation :education />
            </template>
        </div>

        <Note title="Avid & Lifelong Reader">
            Reading extensively across penetration testing, web development, design, martial arts,
            and Islamic literature — valuing character and faith alongside technical expertise.
        </Note>
</template>
    </Container>
