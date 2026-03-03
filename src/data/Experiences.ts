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
        id: 3,
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
        id: 2,
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