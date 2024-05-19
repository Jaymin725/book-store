const Book = require("../models/bookModel");

function getBooks(req, res) {
  Book.find({})
    .then((result) => res.render("books", { books: result }))
    .catch((error) => {
      console.error(error);
      res.end("Error occured while fetching the books :(");
    });
}

function postBook(req, res) {
  let book = req.body;
  book = new Book(book);
  book.save().then((result) => res.redirect("/books"));
  // res.json();
}

function putBook(req, res) {
  console.log("PUT BOOK");
}

module.exports = { getBooks, postBook, putBook };
