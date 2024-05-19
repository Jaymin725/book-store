const { Schema } = require("mongoose");
const database = require("../config/database");

const userSchema = new Schema({
  title: { type: String, required: true },
  img_url: String,
  description: String,
});

const User = database.model("User", userSchema);

module.exports = User;
