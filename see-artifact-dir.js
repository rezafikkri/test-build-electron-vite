const fs = require('node:fs');
const folderPath = './out/make';
const contents = fs.readdirSync(folderPath);
console.dir(contents);
