<script setup lang="ts">
import type { Project } from "../../../../data/Projects.ts";
import ExternalLink from "@/components/Shared/Icons/ExternalLink.vue";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="group flex flex-col gap-y-5 rounded-lg border border-gray-800 bg-secondary/10 p-5 hover:border-green-200"
  >
    <img
      :src="project.pattern"
      :alt="project.name"
      class="h-60 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
    />

    <div class="flex flex-col bg-black/10">
      <a
        :href="project.url"
        target="_blank"
        class="mb-1 flex items-center justify-between"
      >
        <h5 class="text-xl font-bold text-white">
          {{ project.name }}
        </h5>

        <ExternalLink class="size-5 stroke-green-200" />
      </a>

      <p class="text-sm">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
