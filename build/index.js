import path from 'path';
import { promises as fs } from 'fs';
import glob from 'globby';

import Handlebars from 'handlebars';

import { getDateComponent, formatDateRange } from './dates.js';

const srcDir = path.resolve(process.cwd(), 'src');
const outDir = path.resolve(process.cwd(), 'out');

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

// 1) Generate output
Promise.all([
  // b) Compile HTML
  (async () => {
    const [content, templateFunc] = await Promise.all([
      import('../src/content.js').then((module) => module.default),
      fs.readFile(path.join(srcDir, 'template.hbs'), 'utf-8')
        .then((template) => Handlebars.compile(template)),
    ]);
    return templateFunc(content);
  })(),
  // a) Get supporting files
  glob('*.{css,svg}', { cwd: srcDir, onlyFiles: true }),
])

// 2) Write output to disk
  .then(([html, filesToCopy]) => Promise.all([
    // a) Write HTML
    fs.writeFile(path.join(outDir, 'index.html'), html, 'utf-8'),
    // b) Write supporting files
    ...filesToCopy.map((f) => fs.copyFile(
      path.join(srcDir, f),
      path.join(outDir, f),
    )),
  ]));
