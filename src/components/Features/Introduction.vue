<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Container from "@/components/Shared/Container.vue";
    import PrimaryLink from "@/components/Shared/PrimaryLink.vue";
    import Resume from "@/components/Shared/Icons/Resume.vue";
    import SecondaryLink from "@/components/Shared/SecondaryLink.vue";
    import GitHub from "@/components/Shared/Icons/GitHub.vue";
</script>

<template>
    <Container class=" text-text md:mt-0 md:h-screen flex items-center mt-20 md:justify-center">
        <p class="text-5xl text-center md:text-7xl font-bold">{{ user.firstname }} <span class="green-gradient">{{ user.lastname }}</span> </p>

        <p class="text-lg md:text-2xl text-center md:text-left">{{ user.expertise }}</p>

        <p class="mt-10 text-center  text-sm md:text-xl">{{ user.intro }}</p>

        <div class="flex flex-col gap-5 md:-mb-5 md:gap-8 md:flex-row mt-5">
            <PrimaryLink title="Resume" href="/Portfolio/Abderrahim-El-Ouariachi-CV-English.pdf" class="text-black">
                <template #icon>
                    <Resume class="size-5 fill-transparent stroke-black"/>
                </template>

                Resume
            </PrimaryLink>

            <SecondaryLink title="Github Account" href="https://github.com/ItsAbderrahimEl">
                <template #icon>
                    <GitHub class="size-5 fill-transparent stroke-white"/>
                </template>

                GitHub
            </SecondaryLink>
        </div>
    </Container>
</template>