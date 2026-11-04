// C2 · Contact page "Send us a message" form — validation only for now (see enquiry-form.js).
import { initEnquiryForm } from './enquiry-form.js';

initEnquiryForm(document.querySelector('.cf__form'), {
  prefix: 'cf',
  fields: { 'cf-name': 'name', 'cf-phone': 'phone', 'cf-email': 'email' },
  chips: 'cf-topic',
  chipSelector: '.cf__chip',
});
