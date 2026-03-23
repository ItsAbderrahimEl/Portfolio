<script
    setup
    lang="ts"
>
    import Introduction from "@/components/Features/Introduction.vue";
    import About from "@/components/Features/About/About.vue";
    import Fields from "@/components/Features/Fields.vue";
    import Contact from "@/components/Features/Contact.vue";
    import Projects from "@/components/Features/Projects/Projects.vue";
    import {definePerson} from "@vueuse/schema-org";
    import Education from "@/components/Features/Education/Education.vue";
    import Experiences from "@/components/Features/Experience/Experience.vue";
    import AppHeader from "@/components/Layout/AppHeader.vue";
    import AppFooter from "@/components/Layout/AppFooter.vue";
    import Title from "@/components/Shared/Title.vue";
    import CoolGlow from "@/components/Shared/CoolGlow.vue";
    import TopGlow from "@/components/Shared/TopGlow.vue";

    let Glows = [
        {
            id: 1,
            y_position: "15%",
            x_position: "10%"
        },
        {
            id: 2,
            y_position: "25%",
            x_position: "50%"
        },
        {
            id: 3,
            y_position: "35%",
            x_position: "10%"
        },
        {
            id: 4,
            y_position: "45%",
            x_position: "50%"
        },
        {
            id: 5,
            y_position: "70%",
            x_position: "10%"
        },
        {
            id: 6,
            y_position: "80%",
            x_position: "50%"
        },
        {
            id: 6,
            y_position: "90%",
            x_position: "10%"
        }
    ];

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

<template class="relative">
    <AppHeader />

    <Title id="Home" />

    <div class="bg-base relative text-secondary-text  space-y-20 p-5 pb-0md:space-y-30 md:flex md:flex-col md:items-center md:justify-center overflow-hidden">
        <TopGlow />

        <template v-for="glow in Glows" :key="glow.id">
            <CoolGlow :x_position="glow.x_position" :y_position="glow.y_position"/>
        </template>

        <Introduction />

        <About />

        <Experiences />

        <Projects />

        <!-- <Certificates /> -->

        <Education />

        <Fields />

        <Contact />

        <AppFooter />
    </div>
</template>