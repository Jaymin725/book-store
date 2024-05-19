const { Schema } = require("mongoose");
const database = require("../config/database");

const bookSchema = new Schema({
  title: { type: String, required: true },
  img_url: String,
  description: String,
});

const Book = database.model("Book", bookSchema);

module.exports = Book;
