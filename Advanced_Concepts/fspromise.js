const fs = require('fs').promises;

function readFileWithPromises(filePath) {
  return fs.readFile(filePath, 'utf8');
}

readFileWithPromises('input.txt')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
