const express = require("express");
const bookRoute = require("./routes/bookRoute");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use("/books", bookRoute);

app.get("/", (req, res) => res.redirect("/books"));

app.get("/add-book", (req, res) => res.render("add-book"));

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.log("Server listening on http://127.0.0.1:" + port);
});
