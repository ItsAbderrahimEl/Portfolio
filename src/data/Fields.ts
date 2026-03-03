export type Skill = {
    id: number
    name: string
    url: string
}

export type Field = {
    id: number
    name: string
    skills: Skill[]
}

export let fields: Field[] = [
    {
        id: 1,
        name: "Web Development",
        skills: [
            {
                id: 1,
                name: "Laravel",
                url: "https://laravel.com/docs/12.x",
            },
            {
                id: 2,
                name: "Vue.js",
                url: "https://vuejs.org",
            },
            {
                id: 3,
                name: "Inertia.js",
                url: "https://inertiajs.com",
            },
            {
                id: 4,
                name: "TailwindCSS",
                url: "https://tailwindcss.com",
            },
            {
                id: 5,
                name: "MySQL",
                url: "https://dev.mysql.com/doc/refman/8.4/en/introduction.html",
            },
            {
                id: 6,
                name: "Vite",
                url: "https://vite.dev",
            },
            {
                id: 7,
                name: "Docker",
                url: "https://docs.docker.com/get-started/",
            },
            {
                id: 8,
                name: "Git",
                url: "https://git-scm.com/book/en/v2",
            },
            {
                id: 9,
                name: "Figma",
                url: "https://www.figma.com",
            }
        ]
    },
    {
        id: 2,
        name: "Penetration Testing",
        skills: [
            {
                id: 1,
                name: "Web Application Security",
                url: "https://www.geeksforgeeks.org/ethical-hacking/web-security-considerations/",
            },
            {
                id: 3,
                name: "Secure Code Review",
                url: "https://www.geeksforgeeks.org/blogs/secure-coding-what-is-it-all-about/",
            },
            {
                id: 4,
                name: "Vulnerability Assessment",
                url: "https://www.techtarget.com/searchsecurity/definition/vulnerability-assessment-vulnerability-analysis",
            },
            {
                id: 6,
                name: "Networking",
                url: "https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/",
            },
            {
                id: 5,
                name: "Information Security",
                url: "https://www.geeksforgeeks.org/computer-networks/what-is-information-security/",
            },
            {
                id: 7,
                name: "Linux-Based Operating Systems",
                url: "https://www.geeksforgeeks.org/linux-unix/introduction-to-linux-operating-system/",
            },
            {
                id: 8,
                name: "Reporting and Communication",
                url: "https://web443.com/how-to-become-a-penetration-tester-a-step-by-step-guide-for-2025/communication-and-reporting-skills",
            }
        ]
    }
]