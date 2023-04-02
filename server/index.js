const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const dir = path.resolve();
const staticFilePath = path.join(dir, "public");

app.use(express.static(staticFilePath));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(staticFilePath, "index.html"));
});

app.get("/cars", (req, res) => {
  res.status(200).sendFile(path.join(staticFilePath, "find-car.html"));
});

app.listen(port, () => {
  console.log(`Server Listen on port http://localhost:${port}`);
});