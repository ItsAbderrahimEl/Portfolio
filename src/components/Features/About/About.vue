<script
    setup
    lang="ts"
>
    import {user} from "@/data/User.ts";
    import Note from "@/components/Shared/Note.vue";
    import Title from "@/components/Shared/Title.vue";
    import Code from "@/components/Shared/Icons/Code.vue";
    import Container from "@/components/Shared/Container.vue";
    import Shield from "@/components/Shared/Icons/Shield.vue";
    import Terminal from "@/components/Shared/Icons/Terminal.vue";
    import AboutMiniSection from "@/components/Features/About/AboutMiniSection.vue";
</script>

<template>
    <Container>
        <Title id="About" normal="Who" colored="I Am" />
        <p
            class="space-y-5  md:space-y-1 md:text-lg"
            v-html="user.biography"
        ></p>

        <div class="grid mt-5 grid-cols-1 md:grid-cols-3 gap-5">
            <AboutMiniSection>
                <template #icon>
                    <Code class="size-10 fill-green-300" />
                </template>

                <template #title>
                    Web Development
                </template>

                <template #description>
                    Building robust full-stack apps with Laravel, Vue.js, and modern tooling.
                </template>
            </AboutMiniSection>

            <AboutMiniSection>
                <template #icon>
                    <Shield class="size-10 fill-green-300" />
                </template>

                <template #title>
                    Penetration Testing
                </template>

                <template #description>
                    Identifying vulnerabilities and securing systems through ethical hacking.
                </template>
            </AboutMiniSection>

            <AboutMiniSection>
                <template #icon>
                    <Terminal class="size-10 fill-green-300 stroke-green-300"/>
                </template>

                <template #title>
                    Clean Code
                </template>

                <template #description>
                    Writing maintainable, well-tested, and reusable code.
                </template>
            </AboutMiniSection>
        </div>

        <Note title="Why Both?">
            Most developers ship code hoping it's secure. Most pentesters break code without knowing how it was built. I do both—and each side makes me sharper at the other. Building gives me an attacker's map of where things tend to break; pentesting gives me a developer's instinct for writing code that doesn't break.
        </Note>
    </Container>
</template>