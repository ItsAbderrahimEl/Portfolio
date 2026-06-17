type User = {
    id: number,
    firstname: string,
    lastname: string,
    intro: string,
    expertise: string,
    biography: string,
    whyboth: string,
}

export let user: User = {
    'id': 1,
    'firstname': 'Abderrahim',
    'lastname': 'El Ouariachi',
    'intro': 'I Build. I Secure. I Conquer',
    'expertise': 'Penetration Tester & Full-Stack Laravel Developer',
    'whyboth': 'Most developers write code they can\'t secure. Most pentesters break systems they don\'t know how to build. I do both.',
    'biography': `<p>I'm a security person who likes adventure, challenges, and loves thinking in systems. Starting from a young age, I became fascinated by cybersecurity and the power that it gives.</p>
<p>Growing up, my thinking in systems made me love programming so I can create real things while my darker side helps me keep everything I build secure at the same time that allows me to analyze other people's work (systems). </p>
<p>I live in Morocco, and I welcome any opportunity that values development and security alike.</p>`
}