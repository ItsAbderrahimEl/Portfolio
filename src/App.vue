<script
    setup
    lang="ts"
>
    import Intro from "@/components/Intro.vue";
    import About from "@/components/About.vue";
    import Skills from "@/components/Skills.vue";
    import WhyBoth from "@/components/WhyBoth.vue";
    import Projects from "@/components/Projects.vue";
    import Experiences from "@/components/Experience.vue";
    import Contact from "@/components/Contact.vue";
    import Education from "@/components/Education.vue";
</script>

<template>
    <div class="mountain_pattern min-h-screen text-white p-5 space-y-20 md:space-y-30 md:flex md:flex-col md:items-center md:justify-center">
        <Intro/>

        <About />

        <WhyBoth />

        <Experiences />

        <Projects />

        <Education />

        <Skills />

        <Contact />
    </div>
</template>