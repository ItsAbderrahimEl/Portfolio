import type {Project} from '@/types/Project.ts'
import Pattern1 from '@/assets/projects/pattern1.jpg'
import Pattern2 from '@/assets/projects/pattern2.gif'
import Pattern3 from '@/assets/projects/pattern3.png'
import Pattern4 from '@/assets/projects/pattern4.png'
import Pattern5 from '@/assets/projects/pattern5.png'

export let projects: Project[] = [
    {
        'id': 1,
        'name': 'PenGate',
        'pattern': Pattern1,
        'url': 'https://itsabderrahimel.github.io/PenGate/',
    },
    {
        'id': 2,
        'name': 'Guess Royal Game CTF',
        'pattern': Pattern2,
        'url': 'https://itsabderrahimel.github.io/GuessRoyalGame_CTF/',
    },
    {
        'id': 3,
        'name': 'Cinematic Odyssey',
        'pattern': Pattern3,
        'url': 'https://github.com/ItsAbderrahimEl/Cinematic_Odyssey',
    },
    {
        'id': 4,
        'name': 'BirdBoard',
        'pattern': Pattern4,
        'url': 'https://itsabderrahimel.github.io/BirdBoard/',
    },
    {
        'id': 5,
        'name': 'Code Katas',
        'pattern': Pattern5,
        'url': 'https://itsabderrahimel.github.io/CodeKatas/',
    }
]
