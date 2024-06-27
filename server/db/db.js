const mongooose = require("mongoose");

mongooose
  .connect("mongodb://localhost:27017/dbblogsite")
  .then(() => console.log("db sync"))
  .catch(() => console.log("db not connected"));
