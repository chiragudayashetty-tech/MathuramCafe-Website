const fs = require('fs');

try {
  fs.mkdirSync('src/data', { recursive: true });

  const reviewsRaw = fs.readFileSync('review.txt', 'utf8');
  const websiteDataRaw = fs.readFileSync('Content/website data.txt', 'utf8');
  const socialsRaw = fs.readFileSync('socials.txt', 'utf8');

  // Parse to make sure they are valid, then format nicely
  fs.writeFileSync('src/data/reviews.json', JSON.stringify(JSON.parse(reviewsRaw), null, 2));
  fs.writeFileSync('src/data/websiteData.json', JSON.stringify(JSON.parse(websiteDataRaw), null, 2));
  fs.writeFileSync('src/data/socials.json', JSON.stringify(JSON.parse(socialsRaw), null, 2));

  console.log('Successfully prepared data files.');
} catch (e) {
  console.error("Failed to prepare data files:", e);
}
