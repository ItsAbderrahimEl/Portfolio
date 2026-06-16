export interface Experience {
    id: number;
    role: string;
    type: string;
    duration: string;
    company_url: string;
    description: string[];
    company_name: string;
    has_overview?: boolean;
    overview?: string;
}

export let experiences: Experience[] = [
    {
        id: 6,
        role: 'External Attack Surface Assessment',
        company_name: 'Confidential',
        company_url: '#',
        duration: 'Apr 2026 - May 2026',
        type: 'Independent Security Assessment',
        description: [
            'Conducted an independent assessment of a hosting provider\'s external attack surface spanning 13,312 IP addresses, identifying 205 responsive hosts and security findings affecting 37 internet-facing assets.',
            'Discovered 30 vulnerabilities, including 12 Critical and 11 High severity findings, impacting VPN management interfaces, network infrastructure, web applications, default credentials, and outdated software.',
            'Performed asset discovery, attack surface mapping, vulnerability validation, and risk assessment using a methodology aligned with real-world penetration testing engagements.',
            'Submitted a detailed responsible disclosure report following multiple documented outreach attempts over a two-month period.',
            'A redacted version of the report is available for review — accessible <a target="_blank" class="underline font-bold text-green-200" href="/public/Redacted%20Independent%20Security%20Assessment.pdf">here</a>.',
        ],
        has_overview: true,
        overview: 'This engagement gave me hands-on experience with real production infrastructure — a hosting provider, where the blast radius of any vulnerability extends far beyond the company to every client and web application they serve. It also led me to build something lasting: a custom Obsidian script that spins up a structured penetration testing vault, automatically linking all assets discovered during an engagement — a tool I now use as a core part of my methodology — that you can found <a target="_blank" class="underline font-bold text-green-200" href="https://github.com/ItsAbderrahimEl/obsidian-pentest-vault">here</a>.'
    },
    {
        id: 5,
        role: "DevSecOps Engineer",
        company_name: "WebCom",
        company_url: "https://webcom.ma/",
        duration: "Mar 2026 - Apr 2026",
        type: "Freelance",
        description: [
            "Architected and automated full infrastructure provisioning for a production web application using Ansible, enabling repeatable, zero-drift deployments at scale.",
            "Hardened server security end-to-end: configured stateful firewalls, deployed Fail2Ban for brute-force mitigation, and enforced least-privilege user access policies via Ansible playbooks.",
            "Sole DevSecOps owner of a production application — independently driving infrastructure, security posture, and continuous deployment pipelines from design to delivery."
        ]
    },
    {
        id: 4,
        role: "Laravel Security Analyst",
        company_name: "WebCom",
        company_url: "https://webcom.ma/",
        duration: "Feb 2026 - Mar 2026",
        type: "Freelance",
        description: [
            "Conducted a black-box penetration test on a multi-tenant AI-powered Laravel application, uncovering more than 50 vulnerabilities.",
            "Discovered and documented a wide range of vulnerabilities, including OWASP API Top 10 vulnerabilities, Remote Code Execution (RCE), and Insecure Direct Object Reference (IDOR) issues, among others.",
            "A great opportunity to apply hands-on offensive security skills in a real-world production environment."
        ]
    },
    {
        id: 3,
        role: "Laravel Full Stack Web Developer",
        company_name: "Superior School Of Technology Oujda",
        company_url: "http://esto.ump.ma",
        duration: "Jun 2024 - Aug 2024",
        type: "Internship",
        description: [
            "Supervised and coordinated an intern team to deliver a full-stack web application for the Higher School of Technology in Oujda, Morocco.",
            "Designed and implemented the application using Laravel, Blade, and Tailwind CSS, producing a modern, responsive user interface.",
            "Led and mentored team members, promoting collaboration, clear communication, and effective problem-solving in a real-world project environment."
        ]
    },
    {
        id: 2,
        role: "Ethical Hacking Practitioner",
        company_name: "Hack The Box",
        company_url: "https://app.hackthebox.com/public/users/677236",
        duration: "Sep 2023 - Present",
        type: "Practice",
        description: [
            "Achieved Master rank (#73) on Hack The Box through consistent performance across offensive security challenges and labs.",
            "Successfully compromised 330+ targets spanning web applications, Linux systems, Windows environments, Active Directory, and network infrastructure.",
            "Developed hands-on expertise in enumeration, exploitation, privilege escalation, web application security, and post-exploitation techniques through realistic attack simulations."
        ]
    },
    {
        id: 1,
        role: "Laravel Web Developer",
        company_name: "Soft Cactus",
        company_url: "https://softcactus.com/",
        duration: "Jun 2023 - Jul 2023",
        type: "Internship",
        description: [
            "Completed a web development internship focused on building functional and responsive applications using Laravel.",
            "Applied theoretical knowledge to implement features that improved system reliability and long-term maintainability.",
            "Strengthened full-stack development skills while gaining hands-on experience with secure coding practices and modern web architecture."
        ]
    }
];