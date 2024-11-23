const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const port = 3000;

// Serve static files (if using an index.html file)
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
