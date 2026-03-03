<script setup lang="ts">
    import { computed } from 'vue'

    const props = withDefaults(
        defineProps<{
            color?: string
            size?: string
            x_position?: string
            y_position?: string
        }>(),
        {
            color: 'rgba(70,130,180,0.09)',
            size: '700px',
            x_position: '0px',
            y_position: '66.6667%', // ≈ top-2/3
        },
    )

    const styleObject = computed(() => ({
        backgroundImage: `radial-gradient(circle at top center, ${props.color}, transparent 70%)`,
        width: props.size,
        height: props.size,
        left: props.x_position,
        top: props.y_position,
    }))
</script>

<template>
    <div
        class="bg-no-repeat blur-3xl absolute z-0"
        :style="styleObject"
    />
</template>