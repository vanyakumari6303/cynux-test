// E8 · Services page booking form — validation only for now (see enquiry-form.js).
import { initEnquiryForm } from './enquiry-form.js';

initEnquiryForm(document.querySelector('.bk__form'), {
  prefix: 'bk',
  fields: { 'bk-name': 'name', 'bk-phone': 'phone', 'bk-email': 'email' },
  chips: 'bk-svc',
  chipSelector: '.bk__chip',
});
