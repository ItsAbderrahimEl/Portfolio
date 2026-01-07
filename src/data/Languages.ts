import type {Language} from "@/types/Language.ts";
import America from '@/assets/languages/america.svg'
import Spain from '@/assets/languages/spain.svg'
import France from '@/assets/languages/france.svg'
import Morocco from '@/assets/languages/morocco.svg'


export let languages: Language[] = [
    {
        'id': 1,
        'name': 'English',
        'country': America
    }, {
        'id': 2,
        'name': 'Spanish',
        'country': Spain
    }, {
        'id': 3,
        'name': 'French',
        'country': France
    }, {
        'id': 4,
        'name': 'Arabic',
        'country': Morocco
    }, {
        'id': 5,
        'name': 'Amazigh',
        'country': Morocco
    }
]