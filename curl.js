const request = require('request');
function curl(url) {
  request(url, function (err, response, body) {
    if (err) {
      throw err;
    } else {
      process.stdout.write(body);
      process.stdout.write('\nprompt > ')
    }
  });
}

module.exports = curl;
