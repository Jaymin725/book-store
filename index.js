const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express();

const port = 3000;

app.use("/users", userRoute);

app.get("/", (req, res) => res.redirect("/users"));

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.log("Server listening on http://127.0.0.1:" + port);
});
