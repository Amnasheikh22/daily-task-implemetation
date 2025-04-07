// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/"); // Save images in 'uploads/' folder
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });
  router.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }
    res.status(200).json({ message: "File uploaded successfully!", file: req.file });
  });
  
  
  
  const upload = multer({ storage: storage });