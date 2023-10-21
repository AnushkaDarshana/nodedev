const fs = require('fs').promises;

async function readFileWithAsyncAwait(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

readFileWithAsyncAwait('input.txt');