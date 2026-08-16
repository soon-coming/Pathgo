const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const sourceDir = path.join(root, 'docs');
const publicDir = path.join(root, 'public');

fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDir(sourceDir, publicDir);

const indexFile = path.join(publicDir, 'index.html');
if (!fs.existsSync(indexFile)) {
  fs.copyFileSync(path.join(sourceDir, 'aigo-product-story.html'), indexFile);
}

console.log('Build complete: static site prepared in public/');
