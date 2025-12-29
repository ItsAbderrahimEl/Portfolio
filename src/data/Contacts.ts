import type {Contact} from '@/types/Contact.ts'
import logo3 from '@/assets/contact/email.svg'
import logo4 from '@/assets/contact/phone.svg'
import logo2 from '@/assets/contact/github.svg'

export let contacts: Contact[] = [
    {
        'id': 2,
        'name': 'Github',
        'logo': logo2,
        'url': 'https://github.com/ItsAbderrahimEl',
    },
    {
        'id': 3,
        'name': 'Email',
        'logo': logo3,
        'url': "mailto:abderahimouriachi@gmail.com",
    },
    {
        'id': 4,
        'name': "+212623960018",
        'logo': logo4,
        'url': '#',
    }
]



