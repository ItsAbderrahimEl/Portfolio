<script
    setup
    lang="ts"
>
    import {educations} from "@/data/Education";
    import Title from "@/components/Title.vue";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="Educations" />
        <div class="space-y-10 p-5">
            <template
                v-for="education in educations"
                :key="education.id"
            >
                <div class="mt-5 min-w-1/2 md:max-w-3/4 space-y-3">
                    <a
                        :href="education.site"
                        target="_blank"
                        class="flex space-x-5"
                    >
                        <img
                            class="size-15 mt-2 rounded"
                            :src="education.logo"
                            :alt="`${education.institution} Logo`"
                        />
                        <div class="flex flex-col">
                            <div class="font-bold">{{ education.studied }}</div>
                            <div class="space-y-2 text-sm md:space-x-5">
                                <div class="md:inline underline underline-offset-4">{{ education.institution }}</div>
                                <div class="md:inline">{{ education.duration }}</div>
                            </div>
                        </div>
                    </a>

                    <ul
                        class="list-inside list-disc space-y-2 text-sm md:pl-5"
                        v-html="education.description"
                    />
                </div>
            </template>
        </div>
    </Container>
</template>