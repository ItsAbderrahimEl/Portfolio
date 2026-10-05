<script setup lang="ts">
import { ArrowDown } from "@lucide/vue";

defineProps<{
  title: string;
  content: string;
}>();

const showNote = defineModel<boolean>({ default: false });
</script>

<template>
  <div
    class="mt-5 rounded-lg border border-l-4 border-green-200 bg-secondary/10 p-5"
  >
    <div class="flex justify-between">
      <h5 class="text text-lg font-bold text-white">
        {{ title }}
      </h5>
      <div class="hover:cursor-pointer" @click="showNote = !showNote">
        <ArrowDown
          :class="{ 'rotate-180 transition-all duration-500': showNote }"
          color="#fff"
        />
      </div>
    </div>

    <p v-show="showNote" class="mt-5" v-html="content" />
  </div>
</template>
