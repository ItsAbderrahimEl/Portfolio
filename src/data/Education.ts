import type {Education} from '@/types/Education'
import ESTOLogo from '@/assets/education/esto.jpeg'
import HackTheBoxLogo from '@/assets/education/hackthebox.svg'
import LaracastsLogo from '@/assets/education/laracasts.svg'
import BookLogo from '@/assets/education/book.png'

export let educations: Education[] = [
    {
        id: 1,
        institution: 'Hack The Box Academy',
        studied: "Professional Education in Cybersecurity and Penetration Testing",
        duration: 'Dec 2022 – Present',
        site: 'https://academy.hackthebox.com/',
        logo: HackTheBoxLogo,
        description: `
    <li>Completed hands-on training in penetration testing methodologies and attack frameworks</li>
    <li>Practiced exploiting real-world vulnerabilities across web applications, networks, and systems</li>
    <li>Strengthened skills in reconnaissance, enumeration, privilege escalation, and post-exploitation</li>
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
    <li>Advanced Laravel development with a focus on clean architecture and maintainable code</li>
    <li>Built modern full-stack applications using Laravel, Inertia.js, and Vue.js</li>
    <li>Implemented automated testing using Pest, along with best practices for reliable and scalable applications</li>
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
    <li>Built a solid foundation in core computer science concepts and problem-solving</li>
    <li>Developed practical experience with PHP, JavaScript, Java, and C</li>
    <li>Gained knowledge of computer networking and Linux-based operating systems</li>
  `
    },
    {
        id: 4,
        institution: 'Library',
        studied: 'Avid and Lifelong Reader',
        duration: 'Lifelong',
        site: '#',
        logo: BookLogo,
        description: `
    <li>Reading extensively across penetration testing, web development, and design</li>
    <li>Studying and practising martial arts, self-defense, and other discipline-building techniques</li>
    <li>Maintaining a strong habit of reading Islamic books, valuing character and faith alongside technical expertise</li>
  `
    }
]