// simple sample of a web server

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Here is the Home page');
  }

  if (req.url === '/about') {
    res.end('Here is About page');
  }

  res.end(`
    <h1>Oopps an error occurred</h1>
    <p>We can't find the page that you're looking for</p>
    <a href="/"> Back to Home </a>
  `);
});

server.listen(8080);
