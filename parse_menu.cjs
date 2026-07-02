const fs = require('fs');

const raw = fs.readFileSync('Menu.txt', 'utf8');

// The file has multiple JSON objects back-to-back or separated by commas
// We can wrap it in an array bracket and fix commas if necessary, 
// or just parse using a regex.

let content = raw.trim();

// Try to split the content by top level objects if it's malformed
// Actually, it looks like:
// { "restaurant": {...}, "menu": [ ... ] }
// { "category": "Evening Snacks", ... },
// { "category": "Soups", ... },

// Let's replace the first `}\n{` with `},\n{` if missing
content = content.replace(/}\s*\{/g, '},\n{');

// Wrap everything in an array
content = '[' + content + ']';

// In case there's a trailing comma before the end
content = content.replace(/,\s*\]$/, ']');

try {
  const parsed = JSON.parse(content);
  
  let finalMenu = [];
  let restaurantInfo = {};
  
  parsed.forEach(obj => {
    if (obj.restaurant) {
      restaurantInfo = obj.restaurant;
    }
    if (obj.menu) {
      finalMenu = finalMenu.concat(obj.menu);
    }
    if (obj.category && obj.items) {
      finalMenu.push(obj);
    }
  });

  const finalOutput = {
    restaurant: restaurantInfo,
    menu: finalMenu
  };
  
  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/menu.json', JSON.stringify(finalOutput, null, 2));
  console.log('Successfully parsed and wrote menu.json');
} catch (e) {
  console.error("Failed to parse JSON:", e);
}
