// npm install express
const express = require('express');
const app = express();
const port = 8000;
const path = require('path');

const publicDir = path.join(__dirname, "../public");
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.writeHead(200);
    res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
    console.log("Server sudah jalan");
});