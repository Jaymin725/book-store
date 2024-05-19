const express = require("express");
const bookRoute = express.Router();

const {
  getBooks,
  postBook,
  putBook,
} = require("../controllers/bookControllers");

bookRoute.route("/").get(getBooks).post(postBook).put(putBook);

module.exports = bookRoute;
