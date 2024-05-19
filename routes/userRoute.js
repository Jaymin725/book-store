const express = require("express");
const userRoute = express.Router();

const { getUsers } = require("../controllers/userControllers");

userRoute.get("/", getUsers);

module.exports = userRoute;
