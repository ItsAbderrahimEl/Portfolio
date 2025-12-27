<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Title from "@/components/Title.vue";
    import Container from "@/components/Container.vue";
</script>

<template>
    <Container>
        <Title title="About Me" />
        <p
            class="space-y-5 md:space-y-1 md:text-lg"
            v-html="user.biography"
        ></p>
    </Container>
</template>