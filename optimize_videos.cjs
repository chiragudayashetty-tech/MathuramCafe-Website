const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const videosDir = path.join(__dirname, 'public', 'assets', 'Videos');

async function processVideos() {
  if (!fs.existsSync(videosDir)) return;
  
  const files = fs.readdirSync(videosDir);
  for (const file of files) {
    if (file.match(/\.mp4$/i)) {
      const fullPath = path.join(videosDir, file);
      const tempPath = path.join(videosDir, 'temp_' + file);
      
      console.log(`\nOptimizing Video: ${file}`);
      
      try {
        // Compress video using H.264, preset fast, crf 28 (good for web)
        const cmd = `ffmpeg -i "${fullPath}" -vcodec libx264 -crf 28 -preset fast -acodec aac -y "${tempPath}"`;
        execSync(cmd, { stdio: 'inherit' });
        
        // If successful, replace the old file with the new one
        fs.unlinkSync(fullPath);
        fs.renameSync(tempPath, fullPath);
        
        console.log(`Success: Compressed ${file}.`);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
        if (fs.existsSync(tempPath)) {
            fs.unlinkSync(tempPath);
        }
      }
    }
  }
}

console.log('Starting video optimization...');
processVideos();
console.log('Finished video optimization!');
