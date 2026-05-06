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
    'intro': 'A builder who thinks like an attacker. An attacker who ships what he builds.',
    'expertise': 'Full-Stack Laravel Developer & Penetration Tester',
    'biography': `<p>I build web applications end to end — from the interface down to the infrastructure — and I break them to make sure they hold up. My work spans full-stack development and offensive security: I ship production apps, harden the systems behind them, and probe both for weaknesses — most recently surfacing 50+ vulnerabilities in a multi-tenant AI platform as its sole pentester.</p>
<p>I understand how applications work because I build them. I know how they fail because I attack them.</p>
<p>I care about clean, reusable code and interfaces that feel obvious to use — and equally about what happens when someone tries to break them. Based in Morocco, always learning, and open to roles where building and securing carry the same weight.</p>`
}