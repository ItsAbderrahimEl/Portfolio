import type {Education} from '@/types/Education'
import ESTOLogo from '@/assets/education/esto.jpeg'
import HackTheBoxLogo from '@/assets/education/hackthebox.svg'
import LaracastsLogo from '@/assets/education/laracasts.svg'
import BookLogo from '@/assets/education/book.png'

export let educations: Education[] = [
    {
        id: 1,
        institution: 'HackTheBox Academy',
        studied: "Professional Education in Cybersecurity and Penetration Testing",
        duration: 'Dec 2022 – Present',
        site: 'https://academy.hackthebox.com/',
        logo: HackTheBoxLogo,
        description: `
<li>
    Completed intensive, hands-on training covering industry-standard penetration testing methodologies, attack frameworks, and ethical hacking principles.
</li>

<li>
    Gained practical experience identifying and exploiting real-world vulnerabilities across web applications, network infrastructures, and operating systems in controlled lab environments.
</li>

<li>
    Strengthened offensive security skills in reconnaissance, enumeration, exploitation, privilege escalation, and post-exploitation, with an emphasis on systematic assessment and risk evaluation.
</li>
`

    }
    ,
    {
        id: 2,
        institution: 'Laracasts',
        studied: 'Advanced Training in Web Development',
        duration: 'Oct 2022 – Present',
        site: 'https://laracasts.com/',
        logo: LaracastsLogo,
        description: `
<li>
    Advanced Laravel development with a strong emphasis on clean architecture, separation of concerns, and writing maintainable, testable, and scalable codebases.
</li>

<li>
    Designed and built modern full-stack applications using Laravel in combination with Inertia.js and Vue.js, enabling seamless server-driven applications with rich, reactive user interfaces.
</li>

<li>
    Implemented automated testing strategies using Pest, applying industry best practices to ensure application reliability, reduce regressions, and support long-term scalability.
</li>
`

    },
    {
        id: 3,
        institution: 'Higher School of Technology, Oujda',
        studied: 'Bachelor’s Degree in Computer Science',
        duration: 'Sep 2021 – Sep 2024',
        site: 'http://esto.ump.ma/',
        logo: ESTOLogo,
        description: `
<li>
    Built a strong foundation in core computer science principles, including algorithms, data structures, and systematic problem-solving techniques.
</li>

<li>
    Developed hands-on programming experience across multiple languages—PHP, JavaScript, Java, and C—applying them to academic projects and practical software development scenarios.
</li>

<li>
    Acquired solid knowledge of computer networking fundamentals and Linux-based operating systems, with practical exposure to system usage, configuration, and command-line environments.
</li>
`

    },
    {
        id: 4,
        institution: '',
        studied: 'Avid and Lifelong Reader',
        duration: 'Lifelong',
        site: '#',
        logo: BookLogo,
        description: `
<li>
    Reading extensively on topics related to penetration testing, web development, and design in order to continuously expand technical knowledge and stay current with evolving industry trends.
</li>

<li>
    Practicing martial arts and self-defense disciplines to build physical fitness, mental resilience, focus, and personal discipline.
</li>

<li>
    Maintaining a consistent habit of reading Islamic literature, placing strong value on character development, ethics, and faith alongside technical and professional growth.
</li>
`

    }
]