const router = require("express").Router();
const Blog = require("../db/model/blogSchema");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./images/blogs/");
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/createblog", upload.single("thumbnail"), async (req, res) => {
  try {
    let newblog = req.body;
    newblog.thumbnail = "/" + req.file.originalname;
    let blog = Blog(newblog);
    await blog.save();
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

router.get("/blogs", async (req, res) => {
  try {
    let blogs = await Blog.find();
    res.json({ success: true, blogs });
  } catch (err) {
    res.json({ success: false });
  }
});

router.delete("/deleteblog/:id", async (req, res) => {
  try {
    let _id = req.params.id;
    await Blog.findByIdAndDelete({ _id });
    res.json({ success: true });
  } catch (err) {
    res.json({ success: false });
  }
});

module.exports = router;
