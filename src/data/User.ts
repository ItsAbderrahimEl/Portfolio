type User = {
    id: number,
    firstname: string,
    lastname: string,
    intro: string,
    expertise: string,
    biography: string
}

export let user: User = {
    'id': 1,
    'firstname': 'Abderrahim',
    'lastname': 'El Ouariachi',
    'intro': 'Building secure, reliable web applications — and breaking them to find what others miss.',
    'expertise': "Full-Stack Laravel Developer & Penetration Tester",
    'biography': `<p>I'm a developer who builds web applications and breaks them to make sure they hold up. My work sits at the intersection of full-stack development and offensive security: I ship production apps, harden their infrastructure, and have discovered 50+ vulnerabilities in a multi-tenant AI platform as its sole pentester.</p>
<p>I understand how applications work because I build them. I know how they fail because I attack them.</p>
<p>I care about clean, reusable code and interfaces that feel obvious to use — and equally about what happens when someone tries to break them. Based in Morocco, always learning, and open to roles where building and securing carry the same weight.</p>`
}