const express = require("express");
const bookRoute = require("./routes/bookRoute");
const Book = require("./models/bookModel");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use("/books", bookRoute);

app.get("/", (req, res) => res.redirect("/books"));

app.get("/add-book", (req, res) => res.render("add-book"));

app.get("/edit-book/:id", (req, res) => {
  Book.findById(req.params.id).then((result) =>
    res.render("edit-book", { book: result })
  );
});

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.log("Server listening on http://127.0.0.1:" + port);
});
