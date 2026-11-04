// E3 · Cybersecurity tabs (WAI-ARIA tabs pattern, vertical).
// On mobile (<=900px) the panel moves directly under the selected tab, like an accordion.
import { services } from '../data/cyber-services.js';

const list = document.querySelector('.cs__list');
const frame = document.querySelector('.cs__frame');
const panel = document.getElementById('cs-panel');

if (list && frame && panel) {
  const tabs = [...list.querySelectorAll('.cs__tab')];
  const field = (k) => panel.querySelector(`[data-f="${k}"]`);
  const mobile = window.matchMedia('(max-width: 900px)');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Build list items with DOM APIs (no innerHTML), so content can never inject markup.
  const fillList = (ul, items, withCheck) => {
    ul.replaceChildren(...items.map((text) => {
      const li = document.createElement('li');
      if (withCheck) {
        const img = document.createElement('img');
        img.src = '/assets/check.svg'; img.width = 15; img.height = 15; img.alt = '';
        li.append(img);
      }
      li.append(text);
      return li;
    }));
  };

  const place = () => {
    const active = tabs.find((t) => t.getAttribute('aria-selected') === 'true');
    if (mobile.matches) active.after(panel);
    else if (panel.parentElement !== frame) frame.appendChild(panel);
  };

  const render = (key) => {
    const s = services[key];
    field('kicker').textContent = s.kicker;
    field('title').textContent = s.heading;
    field('body').textContent = s.body;
    fillList(field('chips'), s.chips, false);
    fillList(field('gets'), s.gets, true);
    field('cta').textContent = s.cta;
  };

  const select = (tab, focus) => {
    if (tab.getAttribute('aria-selected') === 'true') { if (focus) tab.focus(); return; }
    tabs.forEach((t) => {
      const on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    if (focus) tab.focus();
    place();
    if (reduce.matches) { render(tab.dataset.key); return; }
    panel.classList.add('is-swapping');
    setTimeout(() => { render(tab.dataset.key); panel.classList.remove('is-swapping'); }, 160);
  };

  tabs.forEach((t) => t.addEventListener('click', () => select(t)));
  list.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    const next = { ArrowDown: i + 1, ArrowUp: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    select(tabs[(next + tabs.length) % tabs.length], true);
  });
  mobile.addEventListener('change', place);
  place();
}
