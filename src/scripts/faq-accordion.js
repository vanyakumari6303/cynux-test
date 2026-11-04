// E7 · FAQ accordion — one item open at a time.
document.querySelectorAll('.fq__q').forEach((q) => q.addEventListener('click', () => {
  const item = q.closest('.fq__item');
  const open = !item.classList.contains('is-open');
  document.querySelectorAll('.fq__item.is-open').forEach((o) => {
    o.classList.remove('is-open');
    o.querySelector('.fq__q').setAttribute('aria-expanded', 'false');
  });
  if (open) { item.classList.add('is-open'); q.setAttribute('aria-expanded', 'true'); }
}));
