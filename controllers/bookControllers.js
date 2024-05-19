const Book = require("../models/bookModel");

function getBooks(req, res) {
  Book.find({})
    .then((result) => res.json(result))
    .catch((error) => {
      console.error(error);
      res.end("Error occured while fetching the books :(");
    });
}

module.exports = { getBooks };
