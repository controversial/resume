import path from 'path';
import { promises as fs } from 'fs';
import glob from 'globby';
import Handlebars from 'handlebars';

import { getDateComponent, formatDateRange } from './dates.js';

import data from '../src/content.js';

const srcDir = path.resolve(process.cwd(), 'src');
const outDir = path.resolve(process.cwd(), 'out');

// Date helpers
Handlebars.registerHelper('getDateComponent', getDateComponent);
Handlebars.registerHelper('dateRange', formatDateRange);

// Compile HTML
const template = await fs.readFile(path.join(srcDir, 'template.hbs'), 'utf-8');
const templateFunc = Handlebars.compile(template);
const output = templateFunc(data);
await fs.writeFile(path.join(outDir, 'index.html'), output, 'utf-8');

// Copy supporting files
await glob('*.{css,svg}', { cwd: srcDir, onlyFiles: true })
  .then((files) => Promise.all(
    files.map((f) => fs.copyFile(
      path.join(srcDir, f),
      path.join(outDir, f),
    )),
  ));
