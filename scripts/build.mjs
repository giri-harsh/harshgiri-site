// Static build → dist/.  No bundler: pages are hand-authored HTML; this copies them, vendors the runtime
// libraries from node_modules, and publishes the design system at /ds/v1/ for the other two sites.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import "./kb.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const pkgDir = (name) => { const d = path.join(root, "node_modules", name); if (!fs.existsSync(d)) throw new Error(`missing dependency ${name} — run npm install`); return d; };
const cp = (from, to) => { fs.mkdirSync(path.dirname(to), { recursive: true }); fs.copyFileSync(from, to); };

fs.rmSync(dist, { recursive: true, force: true });
fs.cpSync(path.join(root, "src"), dist, { recursive: true });

// runtime libraries
const gsap = path.join(pkgDir("gsap"), "dist");
for (const f of ["gsap.min.js", "ScrollTrigger.min.js", "SplitText.min.js"]) cp(path.join(gsap, f), path.join(dist, "vendor", f));
cp(path.join(pkgDir("lenis"), "dist", "lenis.min.js"), path.join(dist, "vendor", "lenis.min.js"));

// design system → /ds/v1/
const ds = path.join(dist, "ds", "v1");
const files = [];
for (const f of fs.readdirSync(path.join(root, "ds"))) { cp(path.join(root, "ds", f), path.join(ds, f)); files.push(f); }
let fontsCss = "";
for (const [pkg, css] of [["@fontsource-variable/archivo", "wdth.css"], ["@fontsource-variable/geist-mono", "index.css"]]) {
  const dir = pkgDir(pkg);
  fontsCss += fs.readFileSync(path.join(dir, css), "utf8").replace(/url\(\.\/files\/([^)]+)\)/g, (_, f) => {
    cp(path.join(dir, "files", f), path.join(ds, "fonts", f)); files.push(`fonts/${f}`);
    return `url(./fonts/${f})`;
  }) + "\n";
}
fs.writeFileSync(path.join(ds, "fonts.css"), fontsCss); files.push("fonts.css");
const version = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8")).version;
fs.writeFileSync(path.join(ds, "manifest.json"), JSON.stringify({ name: "harshgiri-ds", version, files: [...new Set(files)].sort() }, null, 1));

const count = (d) => fs.readdirSync(d, { withFileTypes: true }).reduce((n, e) => n + (e.isDirectory() ? count(path.join(d, e.name)) : 1), 0);
console.log(`build: ${count(dist)} files → dist/ (design system v${version}: ${files.length} files)`);
