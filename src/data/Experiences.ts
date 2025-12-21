import type {Experience} from '@/types/Experience.ts'

import logo1 from '@/assets/experiences/esto.jpeg'
import logo2 from '@/assets/experiences/softcactus.png'

export let experiences: Experience[] = [
  {
    'id': 1,
    'role': 'Laravel Full Stack Web Developer',
    'company_name': 'Superior School Of Technology Oujda',
    'company_url': 'http://esto.ump.ma',
    'duration': 'jun 2024 - Aug 2024',
    'logo': logo1,
    'type': 'Internship',
    'description': `<li>Supervised and coordinated a team of students in developing a full-stack web application for
           the Higher School of Technology (Oujda, Morocco)
         </li> <li>Designed and implemented the system using Laravel, Blade templates, and Tailwind CSS,
           delivering a modern, responsive, and user-friendly interface.
         </li> <li> Led and mentored teammates throughout the project, fostering collaboration, effective
                    communication, and problem-solving under real-world conditions.
         </li>`
  },
  {
    'id': 2,
    'role': 'Laravel Web Developer',
    'company_name': 'Soft Cactus',
    'company_url': 'https://softcactus.com/',
    'duration': 'jun 2023 - jul 2023',
    'logo': logo2,
    'type': 'Internship',
    'description': `<li>Completed an internship focused on web application development with Laravel, contributing to
                            the creation of functional and responsive web solutions.
                        </li> <li>Transformed theoretical knowledge into practical results by implementing features that
                            enhanced system reliability and maintainability.
                        </li> <li>Strengthen full-stack development expertise and gained hand-on experience in secure coding
                            practices and modern web architecture.
                        </li>`
  }
]
