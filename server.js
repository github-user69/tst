const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Load the HTML file
  const filePath = path.join(__dirname, 'index.html');

  fs.readFile(filePath, 'utf-8', (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading page');
      return;
    }

    // Send the HTML content as response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(content);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
