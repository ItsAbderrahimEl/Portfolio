<script
    setup
    lang="ts"
>
    import Title from "@/components/Shared/Title.vue";
    import Container from "@/components/Shared/Container.vue";
    import PrimaryLink from "@/components/Shared/PrimaryLink.vue";
    import Email from "@/components/Shared/Icons/Email.vue";
    import SecondaryLink from "@/components/Shared/SecondaryLink.vue";
    import Phone from "@/components/Shared/Icons/Phone.vue";
</script>

<template>
    <Container>
        <Title id="Contact" normal="Get In" colored="Touch" />
        <div class="space-y-5 md:flex md:flex-col md:items-center md:mb-10">
            <p class="text-center md:text-lg md:max-w-2/3">
                I'm always open to new opportunities, collaborations, and meaningful conversations. Feel free to reach out!
            </p>

            <div class="flex flex-col md:flex-row gap-5 items-center justify-center">
                <PrimaryLink href="mailto:abderahimouriachi@gmail.com" title="Email" class="text-black">
                    <template #icon>
                        <Email class="size-5"/>
                    </template>

                    Say Hello!
                </PrimaryLink>

                <SecondaryLink href="tel:+212623960018" title="Phone Number" class="text-white">
                    <template #icon>
                        <Phone class="size-5 "/>
                    </template>

                    Give me a call
                </SecondaryLink>
            </div>
        </div>
    </Container>
</template>