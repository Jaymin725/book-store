const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.end("Hello!"));

app.listen(port, (error) => {
  if (error) console.error(error);
  else console.log("Server listening on http://127.0.0.1:" + port);
});
