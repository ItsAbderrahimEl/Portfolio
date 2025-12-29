import type {Project} from '@/types/Project.ts'
import Pattern1 from '@/assets/projects/pattern1.jpg'
import Pattern2 from '@/assets/projects/pattern2.gif'
import Pattern3 from '@/assets/projects/pattern3.png'
import Pattern4 from '@/assets/projects/pattern4.png'
import Pattern5 from '@/assets/projects/pattern5.png'
import Pattern6 from '@/assets/projects/pattern6.jpg'
export let projects: Project[] = [
    {
        'id': 1,
        'name': 'PenGate',
        'pattern': Pattern1,
        'applicationCategory': 'SecurityApplication',
        'description': `
             Is a collaborative forum for penetration testers to share knowledge and techniques, built with Laravel, Vue.js, and Inertia.js in a Dockerized environment using Laravel Sail.
        `,
        'url': 'https://itsabderrahimel.github.io/PenGate/',
    },
    {
        'id': 2,
        'name': 'Guess Royal Game CTF',
        'pattern': Pattern2,
        'applicationCategory': 'SecurityApplication',
        'description': `
            Is a Laravel-based guessing game designed as a hard CTF challenge demonstrating second-order SQL injection risks, emphasizing secure query handling and safe data persistence.
        `,
        'url': 'https://itsabderrahimel.github.io/GuessRoyalGame_CTF/',
    },
    {
        'id': 3,
        'name': 'Cinematic Odyssey',
        'pattern': Pattern3,
        'applicationCategory': 'EntertainmentApplication',
        'description': `
             Is a web app that lets users browse and manage favorite movies, TV shows, and actors using TMDB data, built with Laravel, Livewire, and Tailwind CSS for a responsive, interactive experience.
        `,
        'url': 'https://github.com/ItsAbderrahimEl/Cinematic_Odyssey',
    },
    {
        'id': 4,
        'name': 'BirdBoard',
        'pattern': Pattern4,
        'applicationCategory': 'UtilitiesApplication',
        'description': `
            Is a project and task collaboration platform built with Laravel, Blade, Tailwind CSS, and Alpine.js, enabling teams to manage projects, track tasks, and collaborate with a real-time activity feed.
        `,
        'url': 'https://itsabderrahimel.github.io/BirdBoard/',
    },
    {
        'id': 5,
        'name': 'Code Katas',
        'pattern': Pattern5,
        'applicationCategory': 'DeveloperApplication',
        'description': `
            Is a collection of PHP exercises using PHPUnit to practice Test-Driven Development, improve problem-solving, and build strong habits in clean, testable code.
        `,
        'url': 'https://itsabderrahimel.github.io/CodeKatas/',
    },
    {
        'id': 6,
        'name': 'My Portfolio',
        'pattern': Pattern6,
        'applicationCategory': 'ReferenceApplication',
        'description': `
            Is a modern, performance-focused personal portfolio website built with Vue 3, Vite, Tailwind CSS, and TypeScript to showcase skills, projects, and professional experience.
        `,
        'url': 'https://github.com/ItsAbderrahimEl/Portfolio',
    }

]
