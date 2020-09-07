import Handlebars from 'handlebars';
import { getDateComponent, formatDateRange } from './dates.js';

// Date helpers
Handlebars.registerHelper('getDateComponent', getDateComponent);
Handlebars.registerHelper('dateRange', formatDateRange);

// Misc
Handlebars.registerHelper('displayLink', (value, type) => {
  const escapedValue = Handlebars.escapeExpression(value);
  let out;
  if (type === 'link') out = `<a href="https://${escapedValue}">${escapedValue}</a>`;
  else if (type === 'email') out = `<a href="mailto:${escapedValue}">${escapedValue}</a>`;
  else if (type === 'tel') {
    let number = Handlebars.escapeExpression(value.replace(/\s/g, ''));
    if (number.length === 10) number = `+1${number}`;
    out = `<a href="tel:${number}">${escapedValue}</a>`;
  } else return '';
  return new Handlebars.SafeString(out);
});
