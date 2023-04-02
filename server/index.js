const express = require('express');
const path = require('path');
const app = express();
const port = 8000;
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
	res.status(200)
	res.sendFile(path.join(publicDirectory, 'index.html'));
});

app.get('/cars', (req, res) => {
	res.status(200)
	res.sendFile(path.join(publicDirectory, 'find-car.html'));
});

app.listen(port, () => {
	console.log(`Server telah berhasil berjalan pada port http://localhost:${port}`);
});