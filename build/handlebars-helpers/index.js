import Handlebars from 'handlebars';
import { getDateComponent, formatDateRange } from './dates.js';

import fs from 'fs';
import path from 'path';
import { srcDir } from '../paths.js';

Handlebars.registerHelper('displayLink', (value, type) => {
  const escapedValue = Handlebars.escapeExpression(value);
  let out;
  if (type === 'link') out = `<a href="https://${escapedValue}">${escapedValue}</a>`;
  else if (type === 'email') out = `<a href="mailto:${escapedValue}">${escapedValue}</a>`;
  else if (type === 'tel') {
    let number = Handlebars.escapeExpression(value.replace(/\s/g, ''));
    if (number.length === 10) number = `+1${number}`;
    out = `<a href="tel:${number}">${escapedValue}</a>`;
  } else return value;
  return new Handlebars.SafeString(out);
});

Handlebars.registerHelper('icon', (name) => {
  const iconPath = path.join(srcDir, 'icons', `${name}.svg`);
  const markup = fs.readFileSync(iconPath, 'utf-8');
  return new Handlebars.SafeString(markup);
});

// Date helpers
Handlebars.registerHelper('getDateComponent', getDateComponent);
Handlebars.registerHelper('dateRange', formatDateRange);
