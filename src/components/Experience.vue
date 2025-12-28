<script
    setup
    lang="ts"
>
    import {experiences} from "@/data/Experiences.ts";
    import Title from "@/components/Title.vue";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="Experiences" />
        <div class="space-y-10 md:space-y-15 md:text-lg md:flex md:flex-wrap md:p-5 md:gap-x-2">
            <template
                v-for="experience in experiences"
                :key="experience.id"
            >
                <div class="space-y-3">
                    <a
                        :href="experience.company_url"
                        target="_blank"
                        class="flex space-x-5"
                    >
                        <img
                            class="size-15 mt-2 rounded"
                            :src="experience.logo"
                            :alt="`${experience.company_name} Logo`"
                        />
                        <div class="flex flex-col">
                            <div class="font-bold">{{ experience.role }}</div>
                            <div class=" space-x-2 text-sm">
                                <span class="underline underline-offset-4">{{ experience.company_name }}</span>
                                <span>{{ experience.type }}</span>
                                <div class="mt-2"> {{ experience.duration }}</div>
                            </div>
                        </div>
                    </a>

                    <ul
                        class="list-inside list-disc space-y-2 text-sm md:text-base pl-3 md:pl-0"
                        v-html="experience.description"
                    />
                </div>
            </template>
        </div>
    </Container>
</template>