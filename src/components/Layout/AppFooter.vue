<script
    setup
    lang="ts"
>
</script>

<template>
    <footer class="h-20 mb-15 md:mb-0 text-center z-30 border-t border-gray-800 w-full">
        <div class="px-4 py-6 flex flex-col items-center gap-2 text-xs text-gray-400">
            <div>© {{ new Date().getFullYear() }} All rights reserved.</div>
            <div>
                Crafted with care by
                <a
                    href="mailto:abderahimouriachi@gmail.com"
                    class="font-medium text-gray-300 hover:text-white transition-colors"
                >
                    Abderrahim El Ouariachi
                </a>
            </div>
        </div>
    </footer>
</template>