const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const directoriesToProcess = [
  path.join(__dirname, 'public', 'assets', 'Photos'),
  path.join(__dirname, 'public', 'assets', 'Brand', 'logo'),
  path.join(__dirname, 'src', 'assets')
];

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.match(/\.(png|jpe?g)$/i)) {
      const ext = path.extname(file);
      const webpPath = fullPath.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      
      console.log(`Optimizing: ${file}`);
      try {
        await sharp(fullPath)
          .resize({ width: 1200, withoutEnlargement: true }) // Prevent scaling up
          .webp({ quality: 80 })
          .toFile(webpPath);
          
        // Delete original file to save space
        fs.unlinkSync(fullPath);
        console.log(`Created: ${path.basename(webpPath)} and deleted original.`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    }
  }
}

async function run() {
  console.log('Starting image optimization...');
  for (const dir of directoriesToProcess) {
    console.log(`Scanning ${dir}`);
    await processDirectory(dir);
  }
  console.log('Finished image optimization!');
}

run();
