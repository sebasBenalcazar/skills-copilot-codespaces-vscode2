// Create web server

const http = require('http');

// Create a web server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Define the port to listen on
const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});