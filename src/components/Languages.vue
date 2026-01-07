<script
    setup
    lang="ts"
>
    import {languages} from "@/data/Languages.ts";
    import Container from "@/components/Container.vue";
    import Title from "@/components/Title.vue";
</script>

<template>
    <Container>
        <Title title="Languages" />
       <div class="flex flex-wrap gap-x-20 gap-y-10 items-center justify-center">
           <div
               class="flex-col-reverse flex items-center max-w-50"
               v-for="language in languages"
               :key="language.id"
           >
               <p class="col-span-1">{{ language.name }}</p>
               <img
                   class="size-10 md:size-13 col-span-1 rounded"
                   :src="language.country"
                   :alt="language.name + ' Flag'"
               >
           </div>
       </div>
    </Container>
</template>