/**
 * E3 · Cybersecurity services.
 * One entry per tab. `title`/`desc` show in the left list; the rest fills the right-hand panel.
 * Used at build time (Cybersecurity.astro) and in the browser (scripts/cyber-tabs.js).
 * NOTE: panel copy for every service except VAPT was written as placeholder text — review before launch.
 */
export const cyberGroups = [
  {
    label: 'A · Test & assess',
    tone: 'a', // violet
    services: [
      {
        key: 'vapt',
        title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
        desc: 'Manual and automated testing of your web apps, APIs and networks, with clear fix steps for every finding.',
        kicker: '// A.01 — VAPT',
        heading: 'Find the gaps before attackers do.',
        body: 'We test your web apps, APIs and networks the way a real attacker would, then show you exactly what to fix and in what order.',
        chips: ['Web apps', 'APIs', 'Networks', 'Mobile apps'],
        gets: ['Manual + automated testing', 'Risk-ranked, plain-language report', 'Step-by-step fix guidance', 'Free retest after fixes'],
        cta: 'Book a VAPT consultation',
      },
      {
        key: 'appsec',
        title: 'Application security testing',
        desc: 'Web, mobile and API testing against OWASP standards.',
        kicker: '// A.02 — App security',
        heading: 'Ship apps that hold up to real attacks.',
        body: 'We test your web and mobile apps and APIs against OWASP standards — logins, payments, data handling — and help your developers close every gap.',
        chips: ['Web apps', 'Mobile apps', 'APIs', 'OWASP Top 10'],
        gets: ['OWASP-aligned test coverage', 'Proof for every finding', 'Developer-friendly fix notes', 'Free retest after fixes'],
        cta: 'Book an app security consultation',
      },
      {
        key: 'network',
        title: 'Network & infrastructure security',
        desc: 'Firewalls, servers, Wi-Fi and internal networks.',
        kicker: '// A.03 — Network security',
        heading: 'Lock down the network everything runs on.',
        body: 'We review your firewalls, servers, Wi-Fi and internal networks to find open doors, weak settings and the paths an attacker could use to move around.',
        chips: ['Firewalls', 'Servers', 'Wi-Fi', 'Internal networks'],
        gets: ['External + internal network testing', 'Firewall and configuration review', 'Wi-Fi security checks', 'Prioritised hardening plan'],
        cta: 'Book a network security consultation',
      },
      {
        key: 'cloud',
        title: 'Cloud security assessment',
        desc: 'AWS, Azure and Google Cloud configuration review.',
        kicker: '// A.04 — Cloud security',
        heading: 'Close the gaps in your cloud setup.',
        body: 'We review your AWS, Azure or Google Cloud accounts for risky permissions, exposed storage and misconfigurations, then show you how to fix them.',
        chips: ['AWS', 'Azure', 'Google Cloud', 'Access & permissions'],
        gets: ['Configuration and access review', 'Exposed data and storage checks', 'Benchmarked against best practice', 'Clear remediation steps'],
        cta: 'Book a cloud security consultation',
      },
      {
        key: 'redteam',
        title: 'Red teaming & phishing simulation',
        desc: 'Real-world attacks on your people and processes.',
        kicker: '// A.05 — Red teaming',
        heading: 'See how a real attack would play out.',
        body: 'We simulate real-world attacks on your people, processes and systems — including phishing campaigns — to show how far an attacker could get.',
        chips: ['Phishing', 'Social engineering', 'Attack simulation', 'People & process'],
        gets: ['Agreed rules of engagement', 'Realistic phishing campaigns', 'Attack-path walkthrough', 'Leadership debrief'],
        cta: 'Book a red teaming consultation',
      },
    ],
  },
  {
    label: 'B · Comply & govern',
    tone: 'b', // amber
    services: [
      {
        key: 'compliance',
        title: 'Compliance readiness',
        desc: 'ISO 27001, SOC 2, PCI DSS and DPDP Act.',
        kicker: '// B.01 — Compliance',
        heading: 'Get audit-ready without the guesswork.',
        body: 'We map where you stand against ISO 27001, SOC 2, PCI DSS or India’s DPDP Act, close the gaps and prepare the evidence auditors ask for.',
        chips: ['ISO 27001', 'SOC 2', 'PCI DSS', 'DPDP Act'],
        gets: ['Gap assessment against the standard', 'Policies and controls you can use', 'Evidence-ready documentation', 'Audit preparation support'],
        cta: 'Book a compliance consultation',
      },
      {
        key: 'audit',
        title: 'Security audit & risk assessment',
        desc: 'Where you stand, ranked by what to fix first.',
        kicker: '// B.02 — Security audit',
        heading: 'Know where you stand, and what to fix first.',
        body: 'We review your systems, policies and day-to-day practices, rate every risk by likelihood and impact, and give you a clear, prioritised plan.',
        chips: ['Systems', 'Policies', 'Vendors', 'People'],
        gets: ['Full security posture review', 'Risks rated by impact', 'Prioritised action plan', 'Leadership-ready summary'],
        cta: 'Book a security audit consultation',
      },
    ],
  },
  {
    label: 'C · Detect & respond',
    tone: 'c', // pink
    services: [
      {
        key: 'ir',
        title: 'Incident response & digital forensics',
        desc: 'Contain it, investigate it, recover.',
        kicker: '// C.01 — Incident response',
        heading: 'Contain it, investigate it, recover.',
        body: 'If you’ve been breached, we help you contain the damage, find out what happened and how, preserve the evidence and get back to business safely.',
        chips: ['Breach response', 'Digital forensics', 'Malware analysis', 'Recovery'],
        gets: ['Fast containment guidance', 'Forensic investigation', 'Root-cause report', 'Recovery and hardening steps'],
        cta: 'Talk to us about an incident',
      },
      {
        key: 'awareness',
        title: 'Security awareness training',
        desc: 'Teach your team to spot phishing.',
        kicker: '// C.02 — Awareness training',
        heading: 'Make your team your first line of defence.',
        body: 'Practical sessions that teach your staff to spot phishing, handle data safely and report anything suspicious — tailored to how your organisation works.',
        chips: ['Phishing', 'Passwords', 'Data handling', 'Remote work'],
        gets: ['Sessions tailored to your team', 'Phishing awareness drills', 'Short, practical modules', 'Completion reports'],
        cta: 'Book a training consultation',
      },
      {
        key: 'soc',
        title: 'Managed security monitoring (SOC)',
        desc: '24/7 monitoring and alerts — on request.',
        kicker: '// C.03 — Managed SOC',
        heading: 'Eyes on your systems, around the clock.',
        body: 'Available on request: continuous monitoring of your systems, with alerts and guided response the moment something looks wrong.',
        chips: ['24/7 monitoring', 'Alerts', 'Log analysis', 'Threat detection'],
        gets: ['Continuous monitoring', 'Real-time alerts', 'Monthly reports', 'Guided response'],
        cta: 'Ask about managed monitoring',
      },
    ],
  },
];

/** Flat lookup by key, e.g. services.vapt */
export const services = Object.fromEntries(
  cyberGroups.flatMap((g) => g.services).map((s) => [s.key, s]),
);
