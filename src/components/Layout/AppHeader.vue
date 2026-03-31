<script
    setup
    lang="ts"
>
    import {navLinks} from "@/data/NavidationLinks.ts";
</script>

<template>
    <!-- Desktop Navigation-->
    <div class="hidden md:fixed top-5 left-0 md:flex items-center justify-center w-full px-5 py-3 z-20">
        <nav class="flex gap-x-5 w-fit  bg-secondary/10 border border-gray-800 px-4 py-3  shadow-lg rounded-lg  backdrop-blur-xs">
            <a
                class="text-secondary-text hover:text-green-200"
                v-for="link in navLinks"
                :href="'#' + link.name"
            >
                {{ link.name }}
            </a>
        </nav>
    </div>

    <!-- Mobile Navigation -->
    <div class="md:hidden fixed bottom-0 left-0 w-full z-20 ">
        <nav class="flex h-15 gap-x-5 w-full items-center overflow-scroll  bg-secondary/10 border border-gray-800 px-5 py-3  shadow-lg  backdrop-blur-lg">
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