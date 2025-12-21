<script
    setup
    lang="ts"
>
    import {computed} from 'vue';

    import type {User} from '@/types/User';
    import type {Contact} from '@/types/Contact';
    import MainCart from '@/components/MainCart.vue';

    const props = defineProps<{
        user: User;
        contacts: Contact[];
    }>();

    //Computed
    const linkedinAndGithub = computed(function () {
        return props.contacts.filter((contact) => ['Linkedin', 'Github'].includes(contact.name));
    });
</script>

<template>
    <MainCart class="relative justify-between space-y-10 md:space-y-0">
        <img
            alt="Landing Section Logo"
            src="@/assets/mainLogo.svg"
            class="absolute -top-30 md:-top-10 right-0 size-120 rotate-45 overflow-hidden md:rotate-50 opacity-90"
        />

        <div class="mt-62 md:mt-15 space-y-5">
            <div class="space-y-2">
                <div>Hi, my name is</div>
                <div class="text-5xl font-bold">{{ user.name }}</div>
            </div>

            <div class="text-xl">
                {{ user.expertise }}
            </div>
        </div>

        <div class="flex flex-col space-y-5 md:space-y-0 md:flex-row md:items-center md:justify-between">
            <p>
                {{ user.intro }}
            </p>

            <div class="flex items-center justify-end space-x-2">
                <a
                    v-for="contact in linkedinAndGithub"
                    :key="contact.id"
                    :title="contact.name"
                    :href="contact.url"
                    target="_blank"
                >
                    <img
                        class="size-10"
                        :src="contact.logo"
                        :alt="contact.name"
                    />
                </a>
            </div>
        </div>
    </MainCart>
</template>
