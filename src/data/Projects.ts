import Pattern1 from '@/assets/patterns/pattern1.jpg'
import Pattern2 from '@/assets/patterns/pattern2.gif'
import Pattern3 from '@/assets/patterns/pattern3.png'
import Pattern4 from '@/assets/patterns/pattern4.png'
import Pattern5 from '@/assets/patterns/pattern5.png'

export interface Project {
    id: number;
    url: string;
    name: string;
    pattern: string;
    description: string;
    tags: string[];
}

export let Projects: Project[] = [
    {
        id: 1,
        name: 'PenGate',
        pattern: Pattern1,
        tags: ["Laravel", "Vue.js", "Inertia.js", "Docker"],
        description: `
            A collaborative forum for penetration testers to share knowledge and techniques, built with Laravel, Vue.js, and Inertia.js in a Dockerized environment using Laravel Sail.
        `,
        url: 'https://itsabderrahimel.github.io/PenGate/',
    },
    {
        id: 2,
        name: 'Guess Royal Game CTF',
        pattern: Pattern2,
        tags: ["Laravel", "Security", "CTF"],
        description: `
            A Laravel-based guessing game designed as a hard CTF challenge demonstrating second-order SQL injection risks, emphasizing secure query handling and safe data persistence.
        `,
        url: 'https://itsabderrahimel.github.io/GuessRoyalGame_CTF/',
    },
    {
        id: 3,
        name: 'Cinematic Odyssey',
        pattern: Pattern3,
        tags: ["Laravel", "Livewire", "Tailwind"],
        description: `
            A web app that lets users browse and manage favorite movies, TV shows, and actors using TMDB data, built with Laravel, Livewire, and Tailwind CSS for a responsive, interactive experience.
        `,
        url: 'https://github.com/ItsAbderrahimEl/Cinematic_Odyssey',
    },
    {
        id: 4,
        name: 'BirdBoard',
        pattern: Pattern4,
        tags: ["Laravel", "Blade", "Alpine.js"],
        description: `
            A project and task collaboration platform built with Laravel, Blade, Tailwind CSS, and Alpine.js, enabling teams to manage projects, track tasks, and collaborate with a real-time activity feed.
        `,
        url: 'https://itsabderrahimel.github.io/BirdBoard/',
    },
    {
        id: 5,
        name: 'Code Katas',
        pattern: Pattern5,
        tags: ["PHP", "PHPUnit", "TDD"],
        description: `
            A collection of PHP exercises using PHPUnit to practice Test-Driven Development, improve problem-solving, and build strong habits in clean, testable code.
        `,
        url: 'https://itsabderrahimel.github.io/CodeKatas/',
    }
]