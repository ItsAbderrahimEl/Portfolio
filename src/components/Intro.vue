<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container class="md:relative md:mt-0 h-screen flex items-center justify-center">
        <p class="text-4xl text-center md:text-7xl font-bold">{{ user.name }}</p>

        <p class="text-lg md:text-2xl text-center md:text-left">{{ user.expertise }}</p>

        <p class="mt-10 text-center  text-sm md:text-xl">{{ user.intro }}</p>

        <div class="flex gap-x-5 md:-mb-5 md:gap-x-8 mt-5">
            <a
                href="/Portfolio/Abderrahim-El-Ouariachi-CV-English.pdf"
                target="_blank"
                title="Resume"
            >
                <img
                    src="@/assets/contact/resume.png"
                    class="size-10"
                    alt="Resume CV"
                >
            </a>

            <a
                href="https://github.com/ItsAbderrahimEl"
                target="_blank"
                title="Github Account"
            >
                <img
                    src="@/assets/contact/github.svg"
                    class="size-9"
                    alt="Github Account"
                >
            </a>
        </div>
    </Container>
</template>