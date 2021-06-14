import path from 'path';
import { promises as fs, existsSync } from 'fs';
import { promisify } from 'util';
import glob from 'globby';

import { srcDir, outDir } from './paths.js';

import sass from 'sass';
import Handlebars from 'handlebars';
import './handlebars-helpers/index.js';

import puppeteer from 'puppeteer';


// 1) Generate output

process.stdout.write('Compiling... ');

Promise.all([
  // a) Compile HTML
  (async () => {
    const [content, templateFunc] = await Promise.all([
      import('../src/content.js').then((module) => module.default),
      fs.readFile(path.join(srcDir, 'template.hbs'), 'utf-8')
        .then((template) => Handlebars.compile(template)),
    ]);
    return templateFunc(content);
  })(),
  // b) Compile SASS
  promisify(sass.render)({ file: path.join(srcDir, 'styles.scss') }),
  // c) Get supporting files
  glob('**/*.svg', { cwd: srcDir, onlyFiles: true }),
])

// 2) Clean old build

  .then(async (values) => {
    await fs.rm(outDir, { recursive: true });
    await fs.mkdir(outDir);
    return values;
  })

// 3) Write output to disk

  .then(([html, { css }, filesToCopy]) => Promise.all([
    // a) Write HTML
    fs.writeFile(path.join(outDir, 'index.html'), html, 'utf-8'),
    // b) Write CSS
    fs.writeFile(path.join(outDir, 'styles.css'), css, 'utf-8'),
    // c) Write supporting files
    ...filesToCopy.map(async (f) => {
      const dir = path.join(outDir, path.dirname(f));
      if (!existsSync(dir)) await fs.mkdir(dir, { recursive: true });
      return fs.copyFile(
        path.join(srcDir, f),
        path.join(outDir, f),
      );
    }),
  ]))
  .then(() => process.stdout.write('Done!\n'))

// 4) Capture PDF and screenshot using puppeteer

  .then(() => {
    if (process.argv.includes('--no-render')) process.exit();
  })
  .then(() => process.stdout.write('Capturing PDF and static image... '))
  .then(async () => {
    const browser = await puppeteer.launch();

    // Capture US Letter size PDF
    const page = await browser.newPage();
    await page.goto(`file://${path.join(outDir, 'index.html')}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: 'resume.pdf',
      preferCSSPageSize: true,
    });
    // Capture screenshot (same size as PDF, we hope)
    await page.emulateMediaType('print');
    const ppi = 96;
    await page.setViewport({ width: 8.5 * ppi, height: 11 * ppi, deviceScaleFactor: 2 });
    await page.screenshot({ path: 'preview.png' });

    await browser.close();
  })
  .then(() => process.stdout.write('Done!\n'));
