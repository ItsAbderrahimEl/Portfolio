<script setup lang="ts">
import { experiences } from "../../../../data/Experiences.ts";
import Title from "@/components/Shared/Title.vue";
import Container from "@/components/Shared/Container.vue";
import Roles from "@/components/Features/Experience/Roles.vue";
</script>

<template>
  <Container>
    <Title id="Work" normal="Work and" colored="Engagements" />
    <div class="space-y-10">
      <template v-for="experience in experiences" :key="experience.id">
        <Roles :experience />
      </template>
    </div>
  </Container>
</template>
