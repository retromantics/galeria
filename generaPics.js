const fs = require('fs');
const path = require('path');

const imgDir = path.join(__dirname, 'assets/img');
const exts = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

const files = fs.readdirSync(imgDir).filter(file =>
  exts.includes(path.extname(file).toLowerCase())
);

const pics = files.map(file => ({
  name: path.parse(file).name.charAt(0).toUpperCase() + path.parse(file).name.slice(1),
  src: `assets/img/${file}`
}));

console.log('const pics = ', JSON.stringify(pics, null, 2), ';');