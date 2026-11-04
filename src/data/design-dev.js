/** A5 · Design & Development panels. Icons live in public/assets/. */
export const designDevPanels = [
  {
    id: 'design',
    variant: 'design',
    title: 'Design',
    subtitle: 'Interfaces people understand on the first try.',
    glow: '/assets/glow-panel-design.svg',
    iso: '/assets/iso-design-panel.svg',
    items: [
      { icon: 'i-pen-tool', title: 'UI/UX design', desc: 'Websites, web apps and mobile apps designed around how your users actually think.' },
      { icon: 'i-pointer', title: 'Product design & prototyping', desc: 'Clickable prototypes to test ideas before a single line of code.' },
      { icon: 'i-layout', title: 'Website & landing page design', desc: 'Pages that explain what you do and turn visitors into enquiries.' },
      { icon: 'i-palette', title: 'Brand identity', desc: 'Logo, colours, type and guidelines that make you recognisable everywhere.' },
      { icon: 'i-grid', title: 'Design systems', desc: 'Reusable components that keep every screen consistent as you grow.' },
      { icon: 'i-search', title: 'UX audit', desc: 'An expert review of your current product, with fixes ranked by impact.' },
    ],
  },
  {
    id: 'development',
    variant: 'dev',
    title: 'Development',
    subtitle: 'Built by people who break things for a living.',
    glow: '/assets/glow-panel-dev.svg',
    iso: '/assets/iso-dev-panel.svg',
    items: [
      { icon: 'i-monitor', title: 'Website development', desc: 'Fast, responsive, SEO-ready websites on modern frameworks or a CMS your team can edit.' },
      { icon: 'i-app', title: 'Web apps & SaaS', desc: 'Dashboards, portals and platforms built to scale, security-tested before launch.' },
      { icon: 'i-phone', title: 'Mobile apps', desc: 'iOS and Android apps, cross-platform or native.' },
      { icon: 'i-cart', title: 'E-commerce', desc: 'Online stores with secure payments, inventory and order management.' },
      { icon: 'i-plug', title: 'APIs & integrations', desc: 'Back-end systems and third-party integrations that are documented and locked down.' },
      { icon: 'i-wrench', title: 'Maintenance & support', desc: 'Updates, security patches, backups and fixes after launch.' },
    ],
  },
];
