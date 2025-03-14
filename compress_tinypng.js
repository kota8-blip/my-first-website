const fs = require('fs');
const path = require('path');
const tinify = require('tinify');

tinify.key = "P2NFNzgs4kwy1rN4hMbB3YSJh5Y9G4wQ";

const imageDir = "C:/Users/user/OneDrive/デスクトップ/MyHTMLTags-1/images";

fs.readdirSync(imageDir).forEach(file => {
  if (file.toLowerCase().endsWith('.jpg')) {
    const filePath = path.join(imageDir, file);

    tinify.fromFile(filePath).toFile(filePath)
       .then(() => console.log('✔圧縮完了: ${file}'))
       .catch(err => console.error('✖エラー: ${file}', err));
  }
});