import path from 'path';
import { promises as fs, existsSync } from 'fs';
import { promisify } from 'util';
import glob from 'globby';

import sass from 'node-sass';
import Handlebars from 'handlebars';
import './handlebars-helpers/index.js';

const compileSass = promisify(sass.render);

const srcDir = path.resolve(process.cwd(), 'src');
const outDir = path.resolve(process.cwd(), 'out');


// 1) Generate output

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
  compileSass({ file: path.join(srcDir, 'styles.scss') }),
  // c) Get supporting files
  glob('**/*.svg', { cwd: srcDir, onlyFiles: true }),
])

// 2) Clean old build

  .then(async (values) => {
    await fs.rmdir(outDir, { recursive: true });
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
    ...filesToCopy.map((f) => {
      const dir = path.join(outDir, path.dirname(f));
      if (!existsSync(dir)) return fs.mkdir(dir, { recursive: true });
      return undefined;
    }),
    ...filesToCopy.map((f) => fs.copyFile(
      path.join(srcDir, f),
      path.join(outDir, f),
    )),
  ]));
