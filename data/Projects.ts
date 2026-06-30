import Pattern1 from '../src/assets/patterns/pattern1.jpg'
import Pattern2 from '../src/assets/patterns/pattern2.gif'
import Pattern3 from '../src/assets/patterns/pattern3.png'
import Pattern4 from '../src/assets/patterns/pattern4.png'
import Pattern5 from '../src/assets/patterns/pattern5.png'
import Pattern6 from '../src/assets/patterns/pattern6.png'
import Pattern7 from '../src/assets/patterns/pattern7.png'

export interface Project {
    id: number;
    url: string;
    name: string;
    pattern: string;
    description: string;
}

export let Projects: Project[] = [
    {
        id: 7,
        name: 'Obsidian Pentest Vault',
        pattern: Pattern7,
        description: `Designed a reusable Obsidian vault template that centralizes penetration testing documentation, asset relationships, task tracking, and reporting.`,
        url: 'https://itsabderrahimel.github.io/obsidian-pentest-vault/',
    },
    {
        id: 6,
        name: 'Cybersecurity WriteUps',
        pattern: Pattern6,
        description: `A curated collection of in-depth writeup's for some of the most challenging machines on HackTheBox, covering exploitation techniques, privilege escalation, and CTF methodologies.`,
        url: 'https://itsabderrahimel.github.io/Cybersecurity-Writeups/',
    },
    {
        id: 5,
        name: 'PenGate',
        pattern: Pattern1,
        description: `
            A collaborative forum for penetration testers to share knowledge and techniques, built with Laravel, Vue.js, and Inertia.js in a Dockerized environment using Laravel Sail.
        `,
        url: 'https://itsabderrahimel.github.io/PenGate/',
    },
    {
        id: 4,
        name: 'Guess Royal Game CTF',
        pattern: Pattern2,
        description: `
            A Laravel-based guessing game designed as a hard CTF challenge demonstrating second-order SQL injection risks, emphasizing secure query handling and safe data persistence.
        `,
        url: 'https://itsabderrahimel.github.io/Web-Security-Challenges/',
    },
    {
        id: 3,
        name: 'Cinematic Odyssey',
        pattern: Pattern3,
        description: `
            A web app that lets users browse and manage favorite movies, TV shows, and actors using TMDB data, built with Laravel, Livewire, and Tailwind CSS for a responsive, interactive experience.
        `,
        url: 'https://github.com/ItsAbderrahimEl/Cinematic_Odyssey',
    },
    {
        id: 2,
        name: 'BirdBoard',
        pattern: Pattern4,
        description: `
            A project and task collaboration platform built with Laravel, Blade, Tailwind CSS, and Alpine.js, enabling teams to manage projects, track tasks, and collaborate with a real-time activity feed.
        `,
        url: 'https://itsabderrahimel.github.io/BirdBoard/',
    },
    {
        id: 1,
        name: 'Code Katas',
        pattern: Pattern5,
        description: `
            A collection of PHP exercises using PHPUnit to practice Test-Driven Development, improve problem-solving, and build strong habits in clean, testable code.
        `,
        url: 'https://itsabderrahimel.github.io/CodeKatas/',
    }
]