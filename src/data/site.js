/**
 * Site-wide content: navigation, contact details, footer links. Edit here, not in components.
 * Links still set to '#' are pages that don't exist yet — replace with e.g. '/about' once built.
 */
const mapsQuery = 'DSU Innovation Campus, Kudlu Gate, Bengaluru 560068';

export const contact = {
  email: 'support@cynuxera.in',
  phone: '+91 90652 54600',
  phoneHref: 'tel:+919065254600',
  whatsapp: 'https://wa.me/919065254600',
  office: 'Bengaluru, Karnataka',
  // Full postal address (Contact page). Wording as in the Figma design.
  address: 'Block B, 3rd floor, Innovative Campus, DSU, Kudlu Gate, Bengaluru, Karnataka 560068',
  socialHandle: '@cynuxera',
  // Google Maps links — no API key needed
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`,
  directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`,
  // Live map on the Contact page (no API key needed).
  // For an exact pin: open your office in Google Maps → Share → "Embed a map" → copy only the
  // src="…" link from the code it gives you and paste it here instead.
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=16&output=embed`,
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '#' },
  { label: 'Services', href: '/services' },
  { label: 'Learn', href: '#' },
  { label: 'Explore courses', href: '#' },
  { label: 'Verify', href: '#' },
  { label: 'Contact us', href: '/contact' },
];

export const footerColumns = [
  { heading: 'Quick links', links: [
    { label: 'Our courses', href: '#' }, { label: 'About us', href: '#' },
    { label: 'Learning Portal', href: '#' }, { label: 'Verify a certificate', href: '#' },
  ] },
  { heading: 'Certifications', links: [
    { label: 'CompTIA Security+', href: '#' }, { label: 'Cisco CCNA', href: '#' },
    { label: 'Microsoft Azure', href: '#' }, { label: 'View all 50+ →', href: '#' },
  ] },
];

export const socials = [
  { label: 'LinkedIn', href: '#', icon: 'soc-linkedin' },
  { label: 'Instagram', href: '#', icon: 'soc-instagram' },
  { label: 'WhatsApp', href: contact.whatsapp, icon: 'soc-whatsapp' },
  { label: 'Email', href: `mailto:${contact.email}`, icon: 'soc-mail' },
];
