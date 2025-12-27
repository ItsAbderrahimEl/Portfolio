<script
    setup
    lang="ts"
>
    import Title from "@/components/Title.vue";
    import {contacts} from "@/data/Contacts";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="Contact Me" />
        <div class="space-y-5 md:flex md:flex-col md:items-center md:mb-10">
            <p class="text-center md:max-w-2/3">
                Thank you for taking the time to join me on this journey. I hope this overview has provided meaningful
                insight into my background, skills, and interests. Should you have any
                questions or wish to connect for discussion or collaboration, please feel free to reach out—I would be glad to engage further.
            </p>

            <div class="flex flex-wrap gap-x-20 gap-y-5 md:max-w-70 items-center justify-center">
                <a
                    :key="contact.id"
                    :href="contact.url"
                    v-for="contact in contacts"
                    class="flex flex-col items-center justify-between"
                >
                    <img
                        class="size-10"
                        :src="contact.logo"
                        :alt="contact.name"
                    />
                    <span> {{ contact.name }}</span>
                </a>
            </div>
        </div>
    </Container>
</template>