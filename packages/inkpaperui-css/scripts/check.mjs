import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = join(dirname(fileURLToPath(import.meta.url)), '..', 'src');
const index = readFileSync(join(src, 'index.css'), 'utf8');
const components = readdirSync(join(src, 'components')).filter((name) => name.endsWith('.css'));
const files = ['base.css', ...components.map((name) => `components/${name}`)];
const problems = [];

for (const name of components) {
  if (!index.includes(`./components/${name}`)) problems.push(`index.css does not import components/${name}`);
}

/** Colours live in tokens.css only, so a theme is one file; masks are drawn in black by name. */
for (const file of files) {
  const css = readFileSync(join(src, file), 'utf8');
  const hex = css.match(/#[0-9a-f]{3,8}\b/gi);
  if (hex) problems.push(`${file} has raw colours: ${[...new Set(hex)].join(', ')}`);
}

/** Each class is owned by one file; a second file declaring the same bare class means two parts
    share a name (as the page wrapper and the pagination button once did). */
const owners = new Map();
for (const file of files) {
  const css = readFileSync(join(src, file), 'utf8');
  for (const [, name] of css.matchAll(/^\s*\.(ip-[a-z0-9-]+)\s*[{,]/gm)) {
    const owner = owners.get(name);
    if (owner && owner !== file) problems.push(`.${name} is declared in both ${owner} and ${file}`);
    else owners.set(name, file);
  }
}

if (problems.length > 0) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`${files.length} stylesheets checked.`);
