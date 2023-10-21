const fs = require('fs');
const readStream = fs.createReadStream('./input.txt');
 
console.log('Start');
 
readStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
 
console.log('End');