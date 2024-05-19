const express = require("express");
const bookRoute = express.Router();

const { getBooks } = require("../controllers/bookControllers");

bookRoute.get("/", getBooks);

module.exports = bookRoute;
