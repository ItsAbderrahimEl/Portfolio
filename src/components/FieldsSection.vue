<script
    setup
    lang="ts"
>
    import type { Field } from '@/types/Field';
    import Item from '@/components/Item.vue';
    import MainCart from '@/components/MainCart.vue';
    import CartTitle from '@/components/CartTitle.vue';

    defineProps<{
        title: string;
        fields: Field[];
    }>();
</script>

<template>
    <MainCart>
        <CartTitle>{{ title }}</CartTitle>

        <div class="mt-10 flex flex-col md:flex-none md:grid md:grid-cols-2 space-x-5 space-y-10">
            <template
                v-for="field in fields"
                :key="field.id"
            >
                <div class="flex flex-col">
                    <div v-html="field.description"></div>
                    <div class="flex flex-wrap gap-5 text-white pt-5">
                        <template
                            :key="skill.id"
                            v-for="skill in field.skills"
                        >
                            <Item
                                :title="skill.name"
                                :logo="skill.logo"
                                :url="skill.url"
                            />
                        </template>
                    </div>
                </div>
            </template>
        </div>
    </MainCart>
</template>
