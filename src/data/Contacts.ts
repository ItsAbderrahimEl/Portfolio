import type {Contact} from '@/types/Contact.ts'
import logo3 from '@/assets/contact/email.svg'
import logo4 from '@/assets/contact/phone.svg'
import logo2 from '@/assets/contact/github.svg'
import logo1 from '@/assets/contact/linkedin.png'


export let contacts: Contact[] = [
    {
        'id': 1,
        'name': 'Linkedin',
        'logo': logo1,
        'url': 'https://www.linkedin.com/in/abderrahim-el-ouariachi-a1b2c3/',
    },
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
        'name': `<div class="flex flex-col items-center"><span>Phone Number</span> <span>+212623960018</span></div>`,
        'logo': logo4,
        'url': '#',
    }
]



