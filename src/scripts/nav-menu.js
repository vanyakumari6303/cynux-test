// Mobile nav: toggle the dropdown, close on outside click or Escape.
const btn = document.querySelector('.btn-menu');
const panel = document.getElementById('menu-panel');

if (btn && panel) {
  const close = () => {
    panel.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  document.addEventListener('click', (e) => { if (!panel.contains(e.target)) close(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) { close(); btn.focus(); }
  });
}
