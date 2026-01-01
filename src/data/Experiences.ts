import type {Experience} from '@/types/Experience.ts'

import logo1 from '@/assets/experiences/esto.jpeg'
import logo2 from '@/assets/experiences/softcactus.png'
import HackTheBoxLogo from '@/assets/education/hackthebox.svg'


export let experiences: Experience[] = [
    {
        'id': 3,
        'role': 'Ethical Hacking Practitioner',
        'company_name': 'HackTheBox',
        'company_url': 'https://hackthebox.com/',
        'duration': 'Sep 2023 - Present',
        'logo': HackTheBoxLogo,
        'type': 'Practice',
        'description': `
    <li>Participate in Capture The Flag (CTF) challenges to enhance cybersecurity and penetration testing skills.</li>
    <li>Practice exploiting real-world vulnerabilities across web, network, and system targets.</li>
    <li>Collaborate with the HackTheBox community to share techniques and learn advanced attack methodologies.</li>
`
    },
    {
        'id': 2,
        'role': 'Laravel Full Stack Web Developer',
        'company_name': 'Superior School Of Technology Oujda',
        'company_url': 'http://esto.ump.ma',
        'duration': 'jun 2024 - Aug 2024',
        'logo': logo1,
        'type': 'Internship',
        'description': `<li>
    Supervised and coordinated an intern team to deliver a full-stack web application for the Higher School of Technology in Oujda, Morocco.
</li>

<li>
    Designed and implemented the application using Laravel, Blade, and Tailwind CSS, producing a modern, responsive user interface.
</li>

<li>
    Led and mentored team members, promoting collaboration, clear communication, and effective problem-solving in a real-world project environment.
</li>
`
    },
    {
        'id': 1,
        'role': 'Laravel Web Developer',
        'company_name': 'Soft Cactus',
        'company_url': 'https://softcactus.com/',
        'duration': 'jun 2023 - jul 2023',
        'logo': logo2,
        'type': 'Internship',
        'description': `<li>
    Completed a web development internship focused on building functional and responsive applications using Laravel.
</li>

<li>
    Applied theoretical knowledge to implement features that improved system reliability and long-term maintainability.
</li>

<li>
    Strengthened full-stack development skills while gaining hands-on experience with secure coding practices and modern web architecture.
</li>
`
    }
]
