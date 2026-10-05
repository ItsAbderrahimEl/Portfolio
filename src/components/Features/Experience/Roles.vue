<script setup lang="ts">
import type { Roles } from "../../../../data/Experiences.ts";
import Triangle from "@/components/Shared/Icons/Triangle.vue";
import Bag from "@/components/Shared/Icons/Bag.vue";
import Note from "@/components/Shared/Note.vue";

let props = defineProps<{
  experience: Roles;
}>();

let hasManyRoles = props.experience.roles.length > 1;
</script>

<template>
  <div
    class="flex flex-col space-y-5 rounded-lg border border-gray-800 bg-secondary/10 p-5 pb-10 hover:border-green-200"
  >
    <span class="flex items-center gap-x-1 text-green-200">
      <Bag class="fill-green-200" />
      <a
        :href="experience.company_url"
        target="_blank"
        class="text-xl font-bold text-green-200"
        >{{ experience.company_name }}</a
      >
    </span>

    <div class="ml-5 space-y-10">
      <div
        class="space-y-10 pl-6"
        :class="{ 'border-l border-green-200/40': hasManyRoles }"
      >
        <div
          v-for="role in experience.roles"
          :key="role.name"
          class="relative flex flex-col"
        >
          <span
            v-if="hasManyRoles"
            class="absolute top-2 -left-7.75 size-3 rounded-full bg-green-200 ring-4 ring-green-200/20"
          />

          <h5 class="text-lg font-bold text-white">
            {{ role.name }}
          </h5>

          <div class="text-sm">
            <span>{{ role.type }}</span> — <span>{{ role.duration }}</span>
          </div>

          <ul class="mt-5 space-y-2">
            <li
              v-for="descriptionLine in role.description"
              :key="descriptionLine"
              class="flex gap-x-1"
            >
              <Triangle class="mt-1 size-3 rotate-90 stroke-green-200" />
              <span
                class="w-full text-sm text-gray-200"
                v-html="descriptionLine"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Note
      v-if="experience.has_overview"
      class="text-sm text-gray-200"
      title="Overview"
      :content="experience.overview ?? ''"
    />
  </div>
</template>
