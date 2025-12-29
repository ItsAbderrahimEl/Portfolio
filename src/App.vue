<script
    setup
    lang="ts"
>
    import Intro from "@/components/Intro.vue";
    import About from "@/components/About.vue";
    import Skills from "@/components/Skills.vue";
    import WhyBoth from "@/components/WhyBoth.vue";
    import Contact from "@/components/Contact.vue";
    import Projects from "@/components/Projects.vue";
    import { definePerson } from "@vueuse/schema-org";
    import Education from "@/components/Education.vue";
    import Experiences from "@/components/Experience.vue";

    definePerson({
        name: "Abderrahim El Ouariachi",
        jobTitle: "Web Application Penetration Tester & Full-Stack Developer",
        url: "https://itsabderrahimel.github.io/Portfolio/",
        sameAs: [
            "https://github.com/ItsAbderrahimEl",
            "https://itsabderrahimel.github.io/ItsAbderrahimEl/",
            "mailto:abderahimouriachi@gmail.com"
        ],
        description:
            "Abderrahim El Ouariachi is a Web Application Penetration Tester and Full-Stack Developer specializing in Laravel and Vue.js. He builds secure, scalable web applications by combining offensive security techniques with modern software engineering. Active in CTF competitions and platforms such as Hack The Box, he focuses on web exploitation, vulnerability research, and application hardening. Based in Morocco, he is passionate about continuous learning, knowledge sharing, and secure system design.",
        knowsAbout: [
            "Web Application Security",
            "Penetration Testing",
            "Laravel",
            "Vue.js",
            "CTF Challenges",
            "OWASP Top 10",
            "Docker",
            "Secure Software Development"
        ],
        nationality: "Moroccan"
    });
</script>

<template>
    <div class="mountain_pattern relative min-h-screen text-white p-5 space-y-20 md:space-y-30 md:flex md:flex-col md:items-center md:justify-center">
        <Intro />

        <About />

        <WhyBoth />

        <Experiences />

        <Projects />

        <Education />

        <Skills />

        <Contact />
    </div>
</template>