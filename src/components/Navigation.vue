<script

    setup
    lang="ts"
>
    let links = [
        {
            id: 1,
                name: 'Home',
            logo: '',
            link: '#Home'
        },{
            id: 2,
            name: 'About',
            logo: '',
            link: '#About'
        },{
            id: 3,
            name: 'WhyBoth',
            logo: '',
            link: '#WhyBoth'
        },{
            id: 4,
            name: 'Experience',
            logo: '',
            link: '#Experience'
        },{
            id: 5,
            name: 'Projects',
            logo: '',
            link: '#Projects'
        },{
            id: 6,
            name: 'Education',
            logo: '',
            link: '#Education'
        },{
            id: 7,
            name: 'Skills',
            logo: '',
            link: '#Skills'
        },{
            id: 8,
            name: 'Contact',
            logo: '',
            link: '#Contact'
        }
    ]
</script>

<template>
<div id="navigation" class="fixed flex flex-wrap items-center justify-center gap-x-3 p-1 text-white rounded-xl w-[80%] text-sm md:hidden left-[50%] bottom-[0%] -translate-x-[50%] -translate-y-[50%] h-13 z-40">
    <a
        v-for="link in links"
        :key="link.id"
        :href="link.link"
        class=""
    >
        {{ link.name }}
    </a>
</div>
</template>

<style scoped>
#navigation {
    background-color: #c8c8c82c;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(10px);
    box-shadow: 1px 1px 5px 1px #13131354;
    border: 1px solid #e9e9e94f;
}
</style>