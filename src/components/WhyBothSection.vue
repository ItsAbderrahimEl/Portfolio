<script
    setup
    lang="ts"
>
    import type {User} from '@/types/User';
    import MainCart from '@/components/MainCart.vue';
    import CartTitle from '@/components/CartTitle.vue';

    defineProps<{
        title: string;
        whyBothSection: User['why_both_section'];
    }>();
</script>

<template>
    <MainCart>
        <CartTitle>{{ title }}</CartTitle>

        <div
            class="mt-10 space-y-3"
            v-html="whyBothSection"
        ></div>
    </MainCart>
</template>
