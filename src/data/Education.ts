export interface Education {
    id: number;
    institution: string;
    studied: string;
    site: string;
    duration: string;
    description: string[];
}

export let educations: Education[] = [
    {
        id: 1,
        institution: 'HackTheBox Academy',
        studied: 'Professional Education in Cybersecurity and Penetration Testing',
        duration: '2022 – Present',
        site: 'https://github.com/ItsAbderrahimEl/HackTheBox-Student-Transcript/',
        description: [
            'Completed hands-on training in penetration testing methodologies and attack frameworks.',
            'Practiced exploiting real-world vulnerabilities across web applications, networks, and systems.',
            'Strengthened skills in reconnaissance, enumeration, privilege escalation, and post-exploitation.'
        ]
    },
    {
        id: 2,
        institution: 'Laracasts',
        studied: 'Advanced Training in Web Development',
        duration: '2022 – Present',
        site: 'https://laracasts.com/',
        description: [
            'Advanced Laravel development with a focus on clean architecture and maintainable code.',
            'Built modern full-stack applications using Laravel, Inertia.js, and Vue.js.',
            'Implemented automated testing using Pest, along with best practices for reliable and scalable applications.'
        ]
    },
    {
        id: 3,
        institution: 'Higher School of Technology, Oujda',
        studied: "Bachelor’s Degree in Computer Science",
        duration: '2021 – 2024',
        site: 'http://esto.ump.ma/',
        description: [
            'Built a solid foundation in core computer science concepts and problem-solving.',
            'Developed practical experience with PHP, JavaScript, Java, and C.',
            'Gained knowledge of computer networking and Linux-based operating systems.'
        ]
    }
]