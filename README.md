# Cynux Era — website

Pages built from the Figma designs, one file per section:

| Page | Address | Figma |
|---|---|---|
| Services | `/services` | "Services — Option E" |
| Contact us | `/contact` | "Contact us" (node 432:2) |

Built with [Astro](https://astro.build): it produces plain static HTML, CSS and JS — no framework runs in the browser.

## Run it

Requires **Node.js 22.23.4 or newer** (check with `node -v`).

```bash
npm install        # first time only
npm run dev        # → http://localhost:4321/services and http://localhost:4321/contact  (auto-reloads as you edit)
```

Production build:

```bash
npm run build      # → dist/  (upload this folder to any web host)
npm run preview    # check the built site at http://localhost:4321
```

## Where things are

```
src/
├── pages/
│   ├── services.astro           The Services page (/services): lists its sections in order
│   └── contact.astro            The Contact page (/contact)
├── layouts/BaseLayout.astro     <head>, font preloads, global CSS, the one JS file
├── components/
│   ├── Nav.astro                Top navigation
│   └── sections/                One file per Figma section
│       ├── Hero.astro               E1 · Hero
│       ├── WhatWeDo.astro           E2 · What we do
│       ├── Cybersecurity.astro      E3 · Cybersecurity (tabs)
│       ├── DesignDevelopment.astro  A5 · Design & Development
│       ├── Approach.astro           E5 · Our approach
│       ├── ProjectLead.astro        E6 · Project lead + How we work
│       ├── Faq.astro                E7 · FAQ
│       ├── BookConsultation.astro   E8 · Book a free consultation
│       └── Footer.astro             E9 · Footer (shared; <Footer tall /> on the Contact page)
│   └── contact/                 Contact page sections
│       ├── ContactHero.astro        C1 · Hero + contact channels
│       ├── ContactForm.astro        C2 · Send us a message
│       └── ContactMap.astro         C3 · Locate our office
├── styles/
│   ├── global.css               Fonts, colours, reset
│   ├── shared.css               Pieces used on several pages (glows, the pill eyebrow)
│   ├── nav.css, footer.css
│   └── sections/*.css           One CSS file per section (contact-hero/-form/-map.css for the Contact page)
├── scripts/                     Small JS files (main.js loads them all):
│                                nav-menu, cyber-tabs, faq-accordion, enquiry-form (shared form checks),
│                                booking-form, contact-form, contact-map (copy address)
└── data/                        Text content — edit these to change wording
    ├── cyber-services.js        The 10 cybersecurity services and their detail panels
    ├── design-dev.js            The 12 Design & Development items
    ├── faqs.js                  FAQ questions and answers
    └── site.js                  Nav links, contact details, address, Google Maps links + map embed, footer links, socials
public/
├── assets/                      Icons and illustrations exported from Figma
└── fonts/                       Self-hosted fonts
```

**Common changes**
- Change wording → the matching file in `src/data/`.
- Change how one section looks → its `.astro` file and the `.css` file with the same name.
- Add a section → create `src/components/sections/NewThing.astro` + `src/styles/sections/new-thing.css`, import the CSS at the top of the component, then add `<NewThing />` in `src/pages/services.astro`.
- Add a new page → create `src/pages/about.astro` (it becomes `/about`), reuse `BaseLayout`, and update its link in `src/data/site.js`.
- Add a Home page → create `src/pages/index.astro` and delete the `redirects` line in `astro.config.mjs` (right now `/` forwards to `/services`).

## Notes

- **Keep Inter 3.19 (the files in `public/fonts/`).** It matches Figma. Don't switch to Google Fonts' Inter 4 — letters and spacing change, and outlined text like "SECURE BY DESIGN" renders incorrectly.
- There are no inline `<script>` blocks or `style=""` attributes, so a strict Content-Security-Policy can be added on the server later.
- Both forms (Services booking, Contact message) check the fields but **do not send anything yet** — they tell the visitor so. The one place to connect a backend later is marked in `src/scripts/enquiry-form.js`.
- The Contact page "Locate our office" section shows a **live Google Map** (no API key needed), darkened with a CSS filter to match the site. To pin the exact building, open it in Google Maps → Share → "Embed a map", copy just the `src="…"` link, and paste it as `mapsEmbedUrl` in `src/data/site.js`. For Google's normal colours, remove the `cm__gmap--dark` class in `src/components/contact/ContactMap.astro`. If you add a Content-Security-Policy on your server later, allow `https://www.google.com` in `frame-src`.
- The nav highlights the current page automatically.
- Links to pages that don't exist yet (About us, Learn, Courses, Verify, Login, socials, Privacy Policy, Terms) are `#` placeholders — clicking them adds `#` to the address. Replace them in `src/data/site.js` as pages are built.
