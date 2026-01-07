import type {Field} from "@/types/Field.ts";

import Git from '@/assets/skills/git.svg'
import Vite from '@/assets/skills/vite.svg'
import Vue from '@/assets/skills/vuejs.svg'
import MySQL from '@/assets/skills/mysql.svg'
import Figma from '@/assets/skills/figma.svg'
import Docker from '@/assets/skills/docker.svg'
import Laravel from '@/assets/skills/laravel.svg'
import Inertia from '@/assets/skills/inertiajs.svg'
import Networking from '@/assets/skills/networking.png'
import TailwindCSS from '@/assets/skills/tailwindcss.svg'
import WebSecurity from '@/assets/skills/web_security.png'
import SecureCoding from '@/assets/skills/secure_coding.png'
import InformationSecurity from '@/assets/skills/information_security.png'
import VulnerabilityAssessment from '@/assets/skills/vulnerability_assessment.png'
import LinuxBasedOperatingSystems from '@/assets/skills/linux_based_operating_systems.png'
import ReportingAndCommunication from '@/assets/skills/reporting.png'

export let fields: Field[] = [
    {
        'id': 1,
        'name': 'Web Development',
        'skills': [
            {
                'id': 1,
                'name': 'Laravel',
                'url': 'https://laravel.com/docs/12.x',
                'logo': Laravel,
            },
            {
                'id': 2,
                'name': 'Vue.js',
                'url': 'https://vuejs.org',
                'logo': Vue,
            },
            {
                'id': 3,
                'name': 'Inertia.js',
                'url': 'https://inertiajs.com',
                'logo': Inertia,
            }
            ,
            {
                'id': 4,
                'name': 'TailwindCSS',
                'url': 'https://tailwindcss.com',
                'logo': TailwindCSS,
            }
            ,
            {
                'id': 5,
                'name': 'MySQL',
                'url': 'https://dev.mysql.com/doc/refman/8.4/en/introduction.html',
                'logo': MySQL,
            },
            {
                'id': 6,
                'name': 'Vite',
                'url': 'https://vite.dev',
                'logo': Vite,
            }
            ,
            {
                'id': 7,
                'name': 'Docker',
                'url': 'https://docs.docker.com/get-started/',
                'logo': Docker,
            }
            ,
            {
                'id': 8,
                'name': 'Git',
                'url': 'https://git-scm.com/book/en/v2',
                'logo': Git,
            },
            {
                'id': 9,
                'name': 'Figma',
                'url': 'https://www.figma.com',
                'logo': Figma,
            }
        ]
    },
    {
        'id': 2,
        'name': 'Penetration Testing',
        'skills': [
            {
                'id': 1,
                'name': 'Web Application Security',
                'logo': WebSecurity,
                'url': 'https://www.geeksforgeeks.org/ethical-hacking/web-security-con}iderations/',
            }
            ,
            {
                'id': 3,
                'name': 'Secure Code Review',
                'logo': SecureCoding,
                'url': 'https://www.geeksforgeeks.org/blogs/secure-coding-what-is-it-all-about/',
            }
            ,
            {
                'id': 4,
                'name': 'Vulnerability Assessment',
                'logo': VulnerabilityAssessment,
                'url': 'https://www.techtarget.com/searchsecurity/definition/vulnerability-assessment-vulnerability-analysis',
            }
            ,
            {
                'id': 6,
                'name': 'Networking',
                'logo': Networking,
                'url': 'https://www.geeksforgeeks.org/computer-networks/basics-computer-networking/',
            }

            ,
            {
                'id': 5,
                'name': 'Information Security',
                'logo': InformationSecurity,
                'url': 'https://www.geeksforgeeks.org/computer-networks/what-is-information-security/',
            }
            ,
            {
                'id': 7,
                'name': 'Linux-Based Operating Systems',
                'logo': LinuxBasedOperatingSystems,
                'url': 'https://www.geeksforgeeks.org/linux-unix/introduction-to-linux-operating-system/',
            },
            {
                'id': 8,
                'name': 'Reporting and Communication',
                'logo': ReportingAndCommunication,
                'url': 'https://web443.com/how-to-become-a-penetration-tester-a-step-by-step-guide-for-2025/communication-and-reporting-skills',
            }
        ]
    }
]
