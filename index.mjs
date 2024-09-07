import http from 'node:http';
import fs from 'node:fs';

// I create a server // 
const server = http.createServer((req, res) => {
    let filePath = './';

    // I asked the path based on the url //
    if (req.url === '/') {
        filePath += 'index.html';
    } else if (req.url === '/about') {
        filePath += 'about.html';
    } else if (req.url === '/contact') {
        filePath += '/contact-me.html';
    } else {
        filePath += '404.html';  
    }

    // Set Content-Type to text/html
    let contentType = 'text/html';

    // Read and serve the file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
    
});


const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
