// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Static output: plain HTML/CSS/JS that any web server or CDN can serve. No Node process needed for the site.
  output: 'static',
  // The site root forwards to the Services page until a Home page exists. Remove this line when you add src/pages/index.astro.
  redirects: { '/': '/services' },
  // Keep whitespace exactly as authored (the layout was matched to Figma with it).
  compressHTML: false,
  build: {
    // Always emit external .css files — inline <style> would need 'unsafe-inline' in the CSP.
    inlineStylesheets: 'never',
    assets: '_assets',
  },
  vite: {
    build: {
      // Never inline scripts/assets as data: or inline blocks — keeps the CSP strict.
      assetsInlineLimit: 0,
    },
  },
});
