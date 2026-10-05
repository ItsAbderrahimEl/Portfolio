<script setup lang="ts">
import { user } from "../../../data/User.ts";
import Container from "@/components/Shared/Container.vue";
import PrimaryLink from "@/components/Shared/PrimaryLink.vue";
import Resume from "@/components/Shared/Icons/Resume.vue";
import SecondaryLink from "@/components/Shared/SecondaryLink.vue";
import GitHub from "@/components/Shared/Icons/GitHub.vue";
</script>

<template>
  <Container
    class="mt-20 flex items-center text-text md:mt-0 md:h-screen md:w-screen md:justify-center"
  >
    <p class="text-center font-quantico text-xl font-bold md:text-8xl">
      {{ user.firstname }}
      <span class="green-gradient">{{ user.lastname }}</span>
    </p>

    <p class="text-center text-lg md:text-left md:text-2xl">
      {{ user.expertise }}
    </p>

    <div class="mt-20 flex flex-col items-center">
      <p class="text-md mb-10 font-bold">
        {{ user.slogan }}
      </p>
      <div class="flex flex-col gap-5 md:-mb-5 md:flex-row md:gap-8">
        <PrimaryLink
          title="Resume"
          href="/CV - Abderrahim El Ouariachi.pdf"
          class="text-black"
        >
          <template #icon>
            <Resume class="size-5 fill-transparent stroke-black" />
          </template>

          Resume
        </PrimaryLink>

        <SecondaryLink
          title="Github Account"
          href="https://github.com/ItsAbderrahimEl"
        >
          <template #icon>
            <GitHub class="size-5 fill-transparent stroke-white" />
          </template>

          GitHub
        </SecondaryLink>
      </div>
    </div>
  </Container>
</template>
