const express = require("express");
const port = process.env.PORT || 4000;
const blogRoutes = require("./routes/blog");

const app = express();

// db connection
require("./db/db");

// middleware
app.use(express.json());
app.use(express.static("./images/blogs"));

// routes
app.use("/blog", blogRoutes);

app.listen(port, () => {
  console.log("server is running");
});
