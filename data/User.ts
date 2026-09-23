type User = {
    id: number,
    firstname: string,
    lastname: string,
    slogan: string,
    expertise: string,
    biography: string,
    whyboth: string,
}

export let user: User = {
    'id': 1,
    'firstname': 'Abderrahim',
    'lastname': 'El Ouariachi',
    'slogan': 'Enjoying Security and Development Alike',
    'expertise': 'Penetration Tester & Full-Stack Laravel Developer',
    'whyboth': 'Most developers write code they can\'t secure. Most pentesters break systems they don\'t know how to build. I do both.',
    'biography': `<p>I'm a security person who thrives on adventure, challenge, and thinking in systems. From a young age, I became fascinated by cybersecurity and the control it gives.</p>
<p>That same system-thinking is what drew me to programming — I love building real things. At the same time that my offensive side keeps me sharp: it pushes me to secure everything I build, and to break down other people's systems just as easily.</p>
<p>I live in Morocco, and I welcome any opportunity that values development and security alike.</p>`
}