<script setup lang="ts">
import type { Education } from "../../../../data/Education.ts";
import School from "@/components/Shared/Icons/School.vue";
import Triangle from "@/components/Shared/Icons/Triangle.vue";

defineProps<{
  education: Education;
}>();
</script>

<template>
  <div
    class="flex max-w-400 gap-x-10 rounded-lg border border-gray-800 bg-secondary/10 p-5 hover:border-green-200"
  >
    <div class="hidden h-fit w-fit rounded-md bg-green-100/10 p-2 md:block">
      <School class="size-8 fill-green-200" />
    </div>

    <div class="w-full space-y-5">
      <div class="flex w-full items-baseline justify-between gap-x-1">
        <div>
          <h5 class="text-xl font-bold text-white">
            {{ education.studied }}
          </h5>
          <a
            :href="education.site"
            target="_blank"
            class="text-sm text-green-200"
          >
            {{ education.institution }}
          </a>
        </div>

        <span class="text-sm text-green-200">
          {{ education.duration }}
        </span>
      </div>

      <ul class="space-y-2">
        <li
          v-for="description in education.description"
          :key="description"
          class="flex gap-x-1"
        >
          <Triangle class="mt-1 size-3 rotate-90 stroke-green-200" />
          <span class="w-full text-sm">{{ description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
