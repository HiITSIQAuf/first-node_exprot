const path = require('path')

console.log(path.sep);

// file export

const filePath = path.join('/content/', 'sub_folder', 'test.txt')

console.log(filePath);

const base = path.basename(filePath);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');

console.log(absolute);