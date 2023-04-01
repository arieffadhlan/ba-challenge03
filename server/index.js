const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const PORT = 8000;
const PUBLIC_PATH = '../public'
const routes = {
    "/": "index.html"
}
const mimeTypes = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
};

function onRequest(req, res) {
    const parsedUrl = url.parse(req.url);
    let pathUrl = parsedUrl.pathname;

    if (routes.hasOwnProperty(pathUrl)) pathUrl = routes[pathUrl];

    const sanitizePath = path.normalize(pathUrl).replace(/^(\.\.(\/|\\|$))+/, '');
    let pathname = path.join(__dirname, PUBLIC_PATH, sanitizePath);
    
    fs.exists(pathname, function (exist) {
        if(!exist) {
            // if the file is not found, return 404
            res.statusCode = 404;
            res.end(`File ${pathname} not found!`);
            return;
        }

        // if is a directory search for index file matching the extension
        if (fs.statSync(pathname).isDirectory()) {
            pathname += '/index.html';
        }

        // read file from file system
        fs.readFile(pathname, function(err, data) {
            if (err){
                res.statusCode = 500;
                res.end(`Error getting the file: ${err}.`);
            } else {
                // if the file is found, set Content-type and send data
                const ext = path.parse(pathname).ext;
                res.setHeader('Content-type', mimeTypes[ext] || 'text/plain' );
                res.end(data);
            }
        });
    });
    
    // const htmlFile = path.join(PUBLIC_DIRECTORY, 'index.html');
    // const html = fs.readFileSync(htmlFile, 'utf-8');

    // res.setHeader('Content-Type', 'text/html');
    // res.writeHead(200);
    // res.end(html);
}

const server = http.createServer(onRequest);

server.listen(PORT, '127.0.0.1', () => {
    console.log('Server sudah berjalan, silakan buka http://127.0.0.1:%d', PORT);
})
