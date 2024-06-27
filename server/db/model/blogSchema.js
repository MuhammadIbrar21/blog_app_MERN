const mongooose = require("mongoose");

const blogSchema = new mongooose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  createAt: {
    type: String,
    default: new Date(),
  },
});

const Blog = new mongooose.model("blog", blogSchema);

module.exports = Blog;
