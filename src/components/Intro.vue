<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container class="mt-10 md:mt-0 md:h-screen md:flex md:items-center md:justify-center">

        <p class="text-2xl md:text-6xl font-bold">{{ user.name }}</p>

        <p class="text-lg md:text-2xl">{{ user.expertise }}</p>

        <p class="mt-10 text-sm md:text-base">{{ user.intro }}</p>

        <div class="flex gap-x-5 mt-5 justify-end pr-10">
            <a
                href="/Portfolio/Abderrahim-El-Ouariachi-CV-English.pdf"
                target="_blank"
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