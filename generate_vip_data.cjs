const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const sourceDir = path.join(__dirname, 'Videos', 'Famous people visit');
const targetAssetsDir = path.join(__dirname, 'public', 'assets', 'Famous');
const targetDataFile = path.join(__dirname, 'src', 'data', 'vips.json');

if (!fs.existsSync(targetAssetsDir)) {
  fs.mkdirSync(targetAssetsDir, { recursive: true });
}

async function run() {
  const vips = [];
  
  if (!fs.existsSync(sourceDir)) {
    console.error("Source directory not found:", sourceDir);
    return;
  }

  const folders = fs.readdirSync(sourceDir);
  
  for (const folder of folders) {
    const folderPath = path.join(sourceDir, folder);
    if (!fs.statSync(folderPath).isDirectory()) continue;
    
    console.log(`Processing ${folder}...`);
    
    const files = fs.readdirSync(folderPath);
    
    let jsonFile = files.find(f => f.endsWith('.json'));
    let videoFile = files.find(f => f.endsWith('.mp4'));
    let imageFile = files.find(f => f.match(/\.(png|jpe?g|webp)$/i));
    
    if (!jsonFile) {
      console.warn(`No JSON file found in ${folder}`);
      continue;
    }
    
    const rawData = fs.readFileSync(path.join(folderPath, jsonFile), 'utf-8');
    let parsed;
    try {
      parsed = JSON.parse(rawData);
    } catch(e) {
      console.error(`Error parsing JSON in ${folder}:`, e);
      continue;
    }
    
    const enBlog = parsed.blogs.find(b => b.language === 'en') || parsed.blogs[0];
    
    let targetVideoPath = null;
    let targetImagePath = null;
    
    if (videoFile) {
      const srcVideo = path.join(folderPath, videoFile);
      const videoName = `${enBlog.slug}.mp4`;
      const destVideo = path.join(targetAssetsDir, videoName);
      fs.copyFileSync(srcVideo, destVideo);
      targetVideoPath = `/assets/Famous/${videoName}`;
    }
    
    if (imageFile) {
      const srcImage = path.join(folderPath, imageFile);
      const imageName = `${enBlog.slug}.webp`;
      const destImage = path.join(targetAssetsDir, imageName);
      
      try {
        await sharp(srcImage)
          .resize({ width: 800, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(destImage);
        targetImagePath = `/assets/Famous/${imageName}`;
      } catch (err) {
        console.error(`Error processing image ${imageFile}:`, err);
      }
    }
    
    vips.push({
      id: enBlog.id,
      name: enBlog.name,
      role: enBlog.role,
      title: enBlog.title,
      description: enBlog.meta_description,
      instagram_link: enBlog.instagram_link,
      video: targetVideoPath,
      image: targetImagePath,
      slug: enBlog.slug
    });
  }
  
  fs.writeFileSync(targetDataFile, JSON.stringify(vips, null, 2));
  console.log(`Generated ${targetDataFile} with ${vips.length} entries.`);
}

run();
