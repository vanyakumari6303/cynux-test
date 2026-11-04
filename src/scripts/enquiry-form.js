// Shared validation for the site's enquiry forms (Services → "Book a free consultation", Contact → "Send us a message").
// It checks the fields in the browser but does NOT send anything yet — when a backend exists,
// replace the "show the done panel" step below with a fetch() POST.
//
// Markup it expects (ids are passed in):
//   <input id="X">          + <span id="X-err">      for each checked field
//   chip buttons with aria-pressed inside the form + <span id="{chips}-err">
//   .{prefix}__body (the form fields), .{prefix}__done (thank-you panel, [hidden]) with [data-name] and .{prefix}__again

const rules = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your name.'),
  phone: (v) => (/^[0-9 ()-]{6,15}$/.test(v.trim()) && v.replace(/\D/g, '').length >= 6 ? '' : 'Please enter a valid phone number.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
};

/**
 * @param {HTMLFormElement} form
 * @param {{ prefix: string, fields: Record<string, keyof rules>, chips: string, chipSelector: string }} opts
 */
export function initEnquiryForm(form, { prefix, fields, chips: chipsId, chipSelector }) {
  if (!form) return;
  const body = form.querySelector(`.${prefix}__body`);
  const done = form.querySelector(`.${prefix}__done`);
  const chips = [...form.querySelectorAll(chipSelector)];
  const $ = (id) => document.getElementById(id);

  const setErr = (id, msg) => {
    const err = $(id + '-err');
    err.textContent = msg;
    err.closest(`.${prefix}__field`).classList.toggle('has-err', !!msg);
    const input = $(id);
    if (input) {
      input.setAttribute('aria-invalid', String(!!msg));
      if (msg) input.setAttribute('aria-describedby', id + '-err');
      else input.removeAttribute('aria-describedby');
    }
  };

  chips.forEach((c) => c.addEventListener('click', () => {
    c.setAttribute('aria-pressed', String(c.getAttribute('aria-pressed') !== 'true'));
    if (chips.some((x) => x.getAttribute('aria-pressed') === 'true')) setErr(chipsId, '');
  }));

  Object.entries(fields).forEach(([id, rule]) => $(id).addEventListener('input', (e) => {
    if (e.target.closest(`.${prefix}__field`).classList.contains('has-err')) setErr(id, rules[rule](e.target.value));
  }));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let first = null;
    for (const [id, rule] of Object.entries(fields)) {
      const el = $(id);
      const msg = rules[rule](el.value);
      setErr(id, msg);
      if (msg && !first) first = el;
    }
    const chipsOk = chips.some((c) => c.getAttribute('aria-pressed') === 'true');
    setErr(chipsId, chipsOk ? '' : 'Pick at least one option.');
    if (!chipsOk && !first) first = chips[0];
    if (first) { first.focus(); return; }

    const nameId = Object.keys(fields).find((id) => fields[id] === 'name');
    done.querySelector('[data-name]').textContent = $(nameId).value.trim().split(' ')[0];
    body.hidden = true; done.hidden = false; done.focus();
  });

  form.querySelector(`.${prefix}__again`).addEventListener('click', () => {
    done.hidden = true; body.hidden = false;
    $(Object.keys(fields)[0]).focus();
  });
}
