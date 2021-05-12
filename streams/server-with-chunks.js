const fs = require('fs');
const http = require('http');


http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./big-file.txt', 'utf8');

  fileStream.on('open', () => {
    fileStream.pipe(res);
  });

  fileStream.on('error', (err) => {
    res.end(err);
  })
}).listen(5000, () => {
  console.log('listening on port 5000...')
});
