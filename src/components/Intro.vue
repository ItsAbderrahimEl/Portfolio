<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <div class="hidden md:block md:absolute top-0 right-0">
            <img
                src="@/assets/mainLogo.svg"
                class="size-50"
                alt="Main Logo"
            >
        </div>
        <div class="space-y-1">
            <p>Hi, my name is</p>
            <p class="text-2xl font-bold">{{ user.name }}</p>
        </div>

        <p class="text-lg">{{ user.expertise }}</p>

        <p class="mt-10 text-sm">{{ user.intro }}</p>

        <div class="flex gap-x-5 mt-5 justify-end pr-10">
            <a href="/Portfolio/Abderrahim-El-Ouariachi-CV-English.pdf" target="_blank">
                <img
                    src="@/assets/contact/resume.png"
                    class="size-10"
                    alt="Resume CV"
                >
            </a>

            <a href="https://github.com/ItsAbderrahimEl" target="_blank">
                <img
                    src="@/assets/contact/github.svg"
                    class="size-9"
                    alt="Github Account"
                >
            </a>
        </div>
    </Container>
</template>