<script
    setup
    lang="ts"
>
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
    >
        <g stroke-width="1" fill="none">
            <!-- Draw the outline -->
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke-dasharray="200"
                stroke-dashoffset="200"
                d="M10 9h4m-4 7h12m-12 4h12m-12 4h4m-6 5h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2"
            >
                <!-- animate the dash offset so it “draws in” -->
                <animate
                    attributeName="stroke-dashoffset"
                    from="200"
                    to="0"
                    dur="0.8s"
                    fill="freeze"
                />
            </path>

            <!-- Circle “notification” effect -->
            <circle
                cx="22"
                cy="9"
                r="0.5"
                fill="currentColor"
                opacity="0"
            >
                <!-- fade & scale in after the path is drawn -->
                <animate
                    attributeName="opacity"
                    begin="0.8s"
                    dur="0.6s"
                    from="0"
                    to="1"
                    fill="freeze"
                />
                <animate
                    attributeName="r"
                    begin="0.8s"
                    dur="0.4s"
                    values="0.2;1.1;0.5"
                    fill="freeze"
                />
            </circle>
        </g>
    </svg>
</template>