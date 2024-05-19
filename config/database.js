const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/bookstore")
  .then((result) => console.log("Connected to the database: bookstore"))
  .catch((error) => console.error);

module.exports = mongoose;
