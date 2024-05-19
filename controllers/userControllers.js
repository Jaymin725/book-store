const User = require("../models/userModel");

function getUsers(req, res) {
  User.find()
    .then((result) => res.json)
    .catch((error) => {
      console.error(error);
      res.end("Error occured while fetching the users :(");
    });
}

module.exports = { getUsers };
