// sample with writeHead and html 

const http = require('http')

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> Home page </h1>')
    res.end()
  } else if (url == '/about') {
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1> About Page </h1>')
    res.end()
  } else {
    res.writeHead(404, {'content-type': 'text/html'})
    res.write('<h1> Page Not Found </h1>')
    res.end()
  }
})

server.listen(5000, () => {
  console.log('Listening on port 5000....')
})
