type User = {
    id: number,
    firstname: string,
    lastname: string,
    expertise: string,
    biography: string,
    whyboth: string,
}

export let user: User = {
    'id': 1,
    'firstname': 'Abderrahim',
    'lastname': 'El Ouariachi',
    'expertise': 'Penetration Tester & Full-Stack Laravel Developer',
    'whyboth': 'Most developers write code they can\'t secure. Most pentesters break systems they don\'t know how to build. I do both.',
    'biography': `<p>I'm a security person who thrives on adventure, challenge, and thinking in systems. From a young age, I became fascinated by cybersecurity and the sense of control it gives.</p>
<p>That same systems-thinking is what drew me to programming — I love building real things. But my offensive side is what keeps me sharp: it pushes me to secure everything I build, and to break down other people's systems just as easily.</p>
<p>I live in Morocco, and I welcome any opportunity that values development and security alike.</p>`
}