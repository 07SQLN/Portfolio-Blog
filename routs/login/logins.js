const express = require("express");
const app = express();
const route = express.Router();
const mongoose = require("mongoose");

//
const OneUser = require("../../models/login");

route.get("/login", async (req, res) => {
  res.render("login");
});
route.post("/login", async (req, res) => {
  try {
    const Username = req.body.Username;
    const password = req.body.Password;
    const User = await OneUser.findOne({ Username: Username });

    if (User.Password === password) {
      res.render("index");
    } else {
      res.send("incorrect username or password");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
