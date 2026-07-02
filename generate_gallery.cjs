const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, 'public/assets/Photos');
const gallery = [];

function walk(dir, category) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, file);
    } else if (/\.(png|jpe?g|gif|webp)$/i.test(file)) {
      gallery.push({
        src: `/assets/Photos/${category ? category + '/' : ''}${file}`,
        category: category || 'General',
        alt: file.replace(/\.[^/.]+$/, "")
      });
    }
  });
}

walk(photosDir, '');

fs.mkdirSync(path.join(__dirname, 'src/data'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src/data/gallery.json'), JSON.stringify(gallery, null, 2));
console.log('Gallery data generated.');
