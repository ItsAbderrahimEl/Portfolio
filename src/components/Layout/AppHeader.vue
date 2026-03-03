<script
    setup
    lang="ts"
>

import {navLinks} from "@/data/NavidationLinks.ts";
</script>

<template>
<div class="fixed top-10 left-0 flex items-center justify-center w-full px-5 py-3 z-20">

    <nav class="flex gap-x-5 w-fit  bg-secondary/10 border-1 border-gray-800 px-4 py-3  shadow-lg rounded-lg  backdrop-blur-xs">
        <a
            class="text-secondary-text hover:text-green-200"
            v-for="link in navLinks"
            :href="'#' + link.name"
        >
            {{ link.name }}
        </a>
    </nav>

</div>
</template>