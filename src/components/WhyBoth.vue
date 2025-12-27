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
        <Title title="Why Both?" />
        <p
            class="space-y-5 md:space-y-1 md:text-lg"
            v-html="user.why_both_section"
        ></p>
    </Container>
</template>