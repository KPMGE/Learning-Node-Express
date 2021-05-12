// using external files in the server

const { readFileSync } = require('fs')
const http = require('http')
const indexPage = readFileSync('./index.html')
const cssStyle = readFileSync('./styles.css');

const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html'})
    res.write(indexPage)
    res.end()
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css'})
    res.write(cssStyle)
    res.end()
  } else {
    res.writeHead(404, { 'content-type': 'text/html'})
    res.write('<h1> Page Not Found </h1>')
    res.end()
  }
})

server.listen(5000, () => {
  console.log("Listening on port 5000...")
})
