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
                name: "Backend Development (Laravel, PHP)",
                url: "https://medium.com/@samanthahayesusa/why-laravel-is-a-great-choice-for-backend-development-058b285df3ba",
            },
            {
                id: 2,
                name: "Frontend Development (Vue.js, Inertia.js)",
                url: "https://itechtuts.com/mastering-laravel-with-vuejs-and-inertia-building-full-stack-modern-apps",
            },
            {
                id: 4,
                name: "Database Design & Optimization",
                url: "https://medium.com/@bahar.mahmudlu9/database-optimization-a-comprehensive-guide-for-data-engineers-b8d6c2ea96ce",
            },
            {
                id: 5,
                name: "Docker & Containerization",
                url: "https://www.geeksforgeeks.org/blogs/containerization-using-docker/",
            },
            {
                id: 6,
                name: "Version Control (Git)",
                url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
            },
            {
                id: 7,
                name: "UI/UX (Figma)",
                url: "https://www.geeksforgeeks.org/websites-apps/figma-tutorial/",
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
                name: "Reconnaissance & Intelligence Gathering",
                url: "https://www.numberanalytics.com/blog/intelligence-gathering-modern-era",
            },
            {
                id: 4,
                name: "Vulnerability Assessment",
                url: "https://www.techtarget.com/searchsecurity/definition/vulnerability-assessment-vulnerability-analysis",
            },
            {
                id: 6,
                name: "Network Security Assessment",
                url: "https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/",
            },
            {
                id: 7,
                name: "Operating Systems (Windows, Linux)",
                url: "https://premioinc.com/blogs/blog/what-is-an-operating-system-os",
            },
            {
                id: 8,
                name: "Reporting and Communication",
                url: "https://web443.com/how-to-become-a-penetration-tester-a-step-by-step-guide-for-2025/communication-and-reporting-skills",
            }
        ]
    }
]