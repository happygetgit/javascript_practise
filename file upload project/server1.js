// const express = require("express");
// const multer = require("multer");
// const path = require("path");

// const app = express();
// const port = 3000;
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads");
//   },
//   filename: (req, filename, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// // Initialize multer with the storage configuration
// const upload = multer({
//   storage: storage,
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype !== "application/javascript") {
//       return cb(new Error("Only JavaScript files are allowed."));
//     }
//     cb(null, true);
//   },
// });

// // Serve static files (like the HTML form)
// app.use(express.static("public"));

// // Handle the file upload
// app.post("/upload", upload.single("file"), (req, res) => {
//   if (req.file) {
//     res.json({ message: `File uploaded successfully: ${req.file.filename}` });
//   } else {
//     res.status(400).json({ message: "No file uploaded." });
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require("express");
const app = express();
const port = 3000;

// Serve static files (if using an index.html file)
app.use(express.static("public"));

// Handle the root route
app.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
