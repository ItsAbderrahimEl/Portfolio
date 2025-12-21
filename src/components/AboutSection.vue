<script
    setup
    lang="ts"
>
    import type { User } from '@/types/User';
    import MainCart from '@/components/MainCart.vue';
    import CartTitle from '@/components/CartTitle.vue';

    defineProps<{
        title: string;
        biography: User['biography'];
    }>();
</script>

<template>
    <MainCart class="relative">
        <CartTitle>{{ title }}</CartTitle>

        <div
            class="mt-10 space-y-3 "
            v-html="biography"
        ></div>

        <div class="mt-10 flex items-center justify-center h-10 border border-gray-600 shadow-lg rounded"></div>
    </MainCart>
</template>
