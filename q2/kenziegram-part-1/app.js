const express = require("express");
const multer = require("multer");
const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const { extname } = require("path");

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { filesize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("Image");

function checkFileType(file, cb) {
  const fileType = /jpeg|jpg|png|gif/;
  const extname = fileType.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileType.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

const app = express();

app.use(express.static("./public"));

const imagepath = "./public/uploads";

app.get("/", (req, res) => {
  fs.readdir(imagepath, function (err, items) {
    const images = items.map((item) => {
      return `<img src= "uploads/${item}"  style="height:331px; width:500px;">`;
    });
    console.log(images);
    res.send(`<h1>Welcome to Kenziegram!</h1> 

    <form action="/upload" method="POST" enctype="multipart/form-data">
    <div class="file-field input-field">
      <div class="btn" blue>
        <label for= "file" >Choose File</label>
        <input name="Image" type="file" >
      </div>
     
    </div>
    <br>
    <button type="Upload" class="btn">Upload</button>
  </form>
            ${images} `);
  });
});

app.post("/upload", (req, res) => {
  upload(req, res, (err) => {});
  res.send(`
  <h1> Upload successful </h1>
  <a href="/"  class="btn">Home Page</a>
  `);
});

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
