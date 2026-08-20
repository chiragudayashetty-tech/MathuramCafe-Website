const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'Photos', 'Posters');
const outputDir = path.join(__dirname, 'public', 'assets', 'Photos', 'Posters');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const formatName = (name) => {
  // Convert "Butter nan an butter paneer poster" -> "butter-nan-an-butter-paneer-poster"
  let formatted = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // Append "-udupi" if not present
  if (!formatted.includes('udupi')) {
    formatted += '-udupi';
  }
  return formatted;
};

const processImages = async () => {
  const files = fs.readdirSync(inputDir).filter(file => file.match(/\.(png|jpe?g)$/i));
  let galleryEntries = [];

  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const newName = formatName(basename) + '.webp';
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, newName);

    console.log(`Processing ${file} -> ${newName}`);

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    galleryEntries.push({
      src: `/assets/Photos/Posters/${newName}`,
      alt: `${basename.replace(/-/g, ' ')} at Mathuram Cafe Udupi`,
      category: "Posters"
    });
  }

  // Update gallery.json
  const galleryJsonPath = path.join(__dirname, 'src', 'data', 'gallery.json');
  const existingGallery = JSON.parse(fs.readFileSync(galleryJsonPath, 'utf8'));
  
  // Remove existing posters if any to avoid duplicates
  const filteredGallery = existingGallery.filter(item => item.category !== 'Posters');
  const updatedGallery = [...galleryEntries, ...filteredGallery];
  
  fs.writeFileSync(galleryJsonPath, JSON.stringify(updatedGallery, null, 2));
  console.log('gallery.json updated with new posters!');
};

processImages().catch(console.error);
