const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, 'Photos', 'Posters');
const outputDir = path.join(__dirname, 'public', 'assets', 'Photos', 'Posters');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const formatName = (name) => {
  let formatted = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (!formatted.includes('mathuram-cafe')) {
    formatted += '-mathuram-cafe';
  }
  if (!formatted.includes('brahmavara')) {
    formatted += '-brahmavara';
  }
  if (!formatted.includes('udupi')) {
    formatted += '-udupi';
  }
  return formatted;
};

const cleanAltTitle = (name) => {
  let cleaned = name.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!cleaned.toLowerCase().includes('poster')) {
    cleaned += ' Poster';
  }
  return `${cleaned} | Mathuram Cafe Pure Veg Restaurant Brahmavara Udupi`;
};

const processImages = async () => {
  const files = fs.readdirSync(inputDir).filter(file => file.match(/\.(png|jpe?g)$/i));
  let galleryEntries = [];
  const activeGeneratedFiles = new Set();

  for (const file of files) {
    const ext = path.extname(file);
    const basename = path.basename(file, ext);
    const newName = formatName(basename) + '.webp';
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, newName);

    console.log(`Processing ${file} -> ${newName}`);

    await sharp(inputPath)
      .webp({ quality: 82 })
      .toFile(outputPath);

    activeGeneratedFiles.add(newName);

    galleryEntries.push({
      src: `/assets/Photos/Posters/${newName}`,
      alt: cleanAltTitle(basename),
      category: "Posters"
    });
  }

  // Clean up any old orphaned webp files in output directory
  const existingOutputFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.webp'));
  for (const outF of existingOutputFiles) {
    if (!activeGeneratedFiles.has(outF)) {
      console.log(`Cleaning old unused file: ${outF}`);
      fs.unlinkSync(path.join(outputDir, outF));
    }
  }

  // Update gallery.json
  const galleryJsonPath = path.join(__dirname, 'src', 'data', 'gallery.json');
  const existingGallery = JSON.parse(fs.readFileSync(galleryJsonPath, 'utf8'));
  
  // Remove existing posters if any to avoid duplicates
  const filteredGallery = existingGallery.filter(item => item.category !== 'Posters');
  const updatedGallery = [...galleryEntries, ...filteredGallery];
  
  fs.writeFileSync(galleryJsonPath, JSON.stringify(updatedGallery, null, 2));
  console.log(`gallery.json updated with ${galleryEntries.length} posters!`);
};

processImages().catch(console.error);
