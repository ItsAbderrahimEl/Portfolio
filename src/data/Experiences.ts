export interface Experience {
    id: number;
    role: string;
    type: string;
    duration: string;
    company_url: string;
    description: string[];
    company_name: string;
}

export let experiences: Experience[] = [
    {
        id: 5,
        role: "DevSecOps Engineer",
        company_name: "WebCom",
        company_url: "https://webcom.ma/",
        duration: "Mar 2026 - Present",
        type: "Full-Time",
        description: [
            "Automated the infrastructure of a web application using Terraform and Ansible, ensuring scalability and reliability.",
            "Implemented security hardening measures including firewall configuration, brute-force protection via Cloudflare and Fail2Ban, and more.",
            "Sole DevSecOps owner of a production application — independently managing infrastructure, security, and deployment pipelines end-to-end."
        ]
    },
    {
        id: 4,
        role: "Laravel Security Analyst",
        company_name: "WebCom",
        company_url: "https://webcom.ma/",
        duration: "Feb 2026 - Mar 2026",
        type: "Contractor",
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
        company_name: "HackTheBox",
        company_url: "https://app.hackthebox.com/public/users/677236",
        duration: "Sep 2023 - Present",
        type: "Practice",
        description: [
            "Participate in Capture The Flag (CTF) challenges to enhance cybersecurity and penetration testing skills.",
            "Practice exploiting real-world vulnerabilities across web, network, and system targets.",
            "Collaborate with the HackTheBox community to share techniques and learn advanced attack methodologies."
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