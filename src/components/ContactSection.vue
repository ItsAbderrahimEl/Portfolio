<script setup lang="ts">
import type { Contact } from '@/types/Contact';
import MainCart from '@/components/MainCart.vue';
import CartTitle from '@/components/CartTitle.vue';

defineProps<{
    title: string;
    contacts: Contact[];
}>();
</script>

<template>
    <MainCart class="space-y-10 mb-10 md:mb-0">
        <CartTitle class="text-center text-6xl">
            {{ title }}
        </CartTitle>

        <div class="flex items-center justify-center">
            <p class="md:w-2/3 text-center">
                Thank you for joining me on this journey! I hope you enjoyed exploring and learning more about me. If you have any questions or simply
                want to connect, don't hesitate to reach out—I’d love to hear from you!
            </p>
        </div>

        <div class="grid grid-cols-2 gap-y-5 md:flex md:justify-evenly">
            <a
                :key="contact.id"
                :href="contact.url"
                v-for="contact in contacts"
                class="flex flex-col items-center justify-between"
            >
                <img
                    class="size-10 md:size-13"
                    :src="contact.logo"
                    :alt="contact.name"
                />
                <span v-html="contact.name"></span>
            </a>
        </div>
    </MainCart>
</template>
