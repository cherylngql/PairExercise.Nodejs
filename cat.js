const fs = require('fs');
function cat(pathToFile) {
  fs.readFile(pathToFile, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ')
    }
  });
}
module.exports = cat;
