export interface RoleItem {
  name: string;
  type: string;
  description: string[];
  duration: string;
}

export interface Roles {
  id: number;
  company_url: string;
  company_name: string;
  has_overview?: boolean;
  overview?: string;
  roles: RoleItem[];
}

export const experiences: Roles[] = [
  {
    id: 7,
    company_name: "Marsa Maroc",
    company_url: "https://www.marsamaroc.co.ma/",
    roles: [
      {
        name: "Network Security Specialist",
        duration: "Sep 2026 - Oct 2026",
        type: "Internship",
        description: [
          'Designed and simulated a <span class="font-bold">site-to-site IPSec VPN</span> between two company branches in GNS3, validating secure connectivity before deployment.',
          'Deployed an SSL VPN on a <span class="font-bold">FortiGate 40F</span> in a live network, enabling secure remote administration and cutting access time by <span class="font-bold">80%</span>.',
          "Configured firewall policies on enterprise hardware to control and secure network traffic.",
        ],
      },
      {
        name: "Penetration Testing",
        duration: "Aug 2026 - Sep 2026",
        type: "Internship",
        description: [
          "Conducted an internal network penetration test on a Marsa Maroc station, identifying critical vulnerabilities in network equipment and infrastructure.",
          'Reduced internal network attack surface by <span class="font-bold">40%</span> through targeted vulnerability identification and remediation guidance.',
          "Authored a detailed security report documenting critical findings, risk severity, and short-term and long-term remediation procedures for the company.",
        ],
      },
    ],
  },
  {
    id: 6,
    company_name: "Confidential",
    roles: [
      {
        name: "External Attack Surface Assessment",
        duration: "Apr 2026 - May 2026",
        type: "Independent Security Assessment",
        description: [
          'Conducted an independent assessment of a hosting provider\'s external attack surface spanning <span class="font-bold">13,312 IP addresses</span>, identifying <span class="font-bold">205 responsive hosts</span> and security findings affecting <span class="font-bold">37 internet-facing assets</span>.',
          'Discovered <span class="font-bold">30 vulnerabilities</span>, including <span class="font-bold">12 Critical</span> and <span class="font-bold">11 High</span> severity findings, impacting VPN management interfaces, network infrastructure, web applications, default credentials, and outdated software.',
          "Performed asset discovery, attack surface mapping, vulnerability validation, and risk assessment using a methodology aligned with real-world penetration testing engagements.",
          "Submitted a detailed responsible disclosure report following multiple documented outreach attempts over a two-month period.",
          'A redacted version of the report is available for review — <a target="_blank" class="underline font-bold text-green-200" href="/Redacted Independent Security Assessment.pdf">here</a>.',
        ],
      },
    ],
    company_url: "#",
    has_overview: true,
    overview:
      'This engagement gave me hands-on experience with real production infrastructure — a hosting provider, where the blast radius of any vulnerability extends far beyond the company to every client and web application they serve. <span class="font-bold">It also led me to build something lasting</span>: a custom Obsidian script that spins up a structured penetration testing vault, automatically linking all assets discovered during an engagement — a tool I now use as a core part of my methodology — that you can found <a target="_blank" class="underline font-bold text-green-200" href="https://github.com/ItsAbderrahimEl/obsidian-pentest-vault">here</a>.',
  },
  {
    id: 5,
    company_name: "WebCom",
    company_url: "https://webcom.ma/",
    roles: [
      {
        name: "DevSecOps",
        duration: "Mar 2026 - Apr 2026",
        type: "Freelance",
        description: [
          "Architected and automated full infrastructure provisioning for a production web application using Ansible, enabling repeatable, zero-drift deployments at scale.",
          "Hardened server security end-to-end: configured stateful firewalls, deployed Fail2Ban for brute-force mitigation, and enforced least-privilege user access policies via Ansible playbooks.",
          '<span class="font-bold">Sole DevSecOps owner of a staging application</span> — independently driving infrastructure, security posture, and continuous deployment pipelines from design to delivery.',
        ],
      },
      {
        name: "Laravel Security Analyst",
        duration: "Feb 2026 - Mar 2026",
        type: "Freelance",
        description: [
          'Conducted a black-box penetration test on a multi-tenant AI-powered Laravel application, uncovering more than <span class="font-bold">50 vulnerabilities</span>.',
          'Discovered and documented a wide range of vulnerabilities, including <span class="font-bold">OWASP API Top 10 vulnerabilities</span>, <span class="font-bold">Remote Code Execution (RCE)</span>, and <span class="font-bold">Insecure Direct Object Reference (IDOR)</span> issues, among others.',
          "A great opportunity to apply hands-on offensive security skills in a real-world production environment.",
        ],
      },
    ],
  },
  {
    id: 3,
    company_name: "Superior School Of Technology Oujda",
    company_url: "http://esto.ump.ma",
    roles: [
      {
        name: "Laravel Full Stack Web Developer",
        duration: "Jun 2024 - Aug 2024",
        type: "Internship",
        description: [
          "Supervised and coordinated an intern team to deliver a full-stack web application for the Higher School of Technology in Oujda, Morocco.",
          "Designed and implemented the application using Laravel, Blade, and Tailwind CSS, producing a modern, responsive user interface.",
          "Led and mentored team members, promoting collaboration, clear communication, and effective problem-solving in a real-world project environment.",
        ],
      },
    ],
  },
  {
    id: 2,
    company_name: "Hack The Box",
    company_url: "https://app.hackthebox.com/public/users/677236",
    roles: [
      {
        name: "Ethical Hacking Practitioner",
        duration: "Sep 2023 - Present",
        type: "Practice",
        description: [
          'Achieved <span class="font-bold">Master rank (#74)</span> on Hack The Box through consistent performance across offensive security challenges and labs.',
          'Successfully <span class="font-bold">compromised 330+ targets</span> spanning web applications, Linux systems, Windows environments, Active Directory, and network infrastructure.',
          "Developed hands-on expertise in enumeration, exploitation, privilege escalation, web application security, and post-exploitation techniques through realistic attack simulations.",
        ],
      },
    ],
  },
  {
    id: 1,
    company_name: "Soft Cactus",
    company_url: "https://softcactus.ma/",
    roles: [
      {
        name: "Laravel Web Developer",
        duration: "Jun 2023 - Jul 2023",
        type: "Internship",
        description: [
          "Completed a web development internship focused on building functional and responsive applications using Laravel.",
          "Applied theoretical knowledge to implement features that improved system reliability and long-term maintainability.",
          "Strengthened full-stack development skills while gaining hands-on experience with secure coding practices and modern web architecture.",
        ],
      },
    ],
  },
];
