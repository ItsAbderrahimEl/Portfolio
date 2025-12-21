<script setup lang="ts">
    //Components
    import AboutSection from '@/components/AboutSection.vue';
    import FieldsSection from '@/components/FieldsSection.vue';
    import ContactSection from '@/components/ContactSection.vue';
    import LandingSection from '@/components/LandingSection.vue';
    import WhyBothSection from '@/components/WhyBothSection.vue';
    import ProjectsSection from '@/components/ProjectsSection.vue';
    import ExperienceSection from '@/components/ExperienceSection.vue';

    //Data
    import {user} from '@/data/User'
    import {contacts} from '@/data/Contacts'
    import {fields} from '@/data/Fields'
    import {experiences} from '@/data/Experiences'
    import {projects} from '@/data/Projects'
</script>

<template>
    <div class="mountain_pattern overflow-x-hidden overflow-y-auto flex flex-col h-screen w-screen items-center gap-y-10 md:gap-y-0 md:gap-x-40 md:flex-row md:overflow-x-scroll md:px-40">
        <LandingSection
            :user
            :contacts
        />

        <AboutSection
            title="About"
            :biography="user.biography"
        />

        <FieldsSection
            :fields
            title="In What I'm Skilled"
        />

        <WhyBothSection
            title="Why Both?"
            :whyBothSection="user.why_both_section"
        />

        <ProjectsSection
            :projects
            title="Projects"
        />

        <ExperienceSection
            :experiences
            title="Experiences"
        />

        <ContactSection
            :contacts
            title="Contact Me"
        />
    </div>
</template>