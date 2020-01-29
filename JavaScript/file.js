const fs = require('fs');

const textIn = fs.readFileSync('input.rtf','utf-8');
console.log(textIn)

const textOut = `This is what we know about my family ${textIn}.\n Created on ${Date.now()}`;
fs.writeFileSync('testing.txt', textOut);
