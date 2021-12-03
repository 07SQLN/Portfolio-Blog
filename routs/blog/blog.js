const express = require("express");
const app = express();
const Router = express.Router();

const postsuggestion = require("../../models/suggest");
const blogUser = require("../../models/Users");

//suggest

Router.post("/blog", async (req, res) => {
  try {
    const NewSuggestion = new postsuggestion({
      suggestion: req.body.suggest,
    });
    const savesuggestion = await NewSuggestion.save();
    res.render("blog");
  } catch (error) {
    res.send("error occurd");
  }
});

//user

Router.post("/blog", async (req, res) => {
  try {
    const Newuser = new blogUser({
      User: req.body.User,
    });
    const saveuser = await Newuser.save();
    res.render("blog");
    
  } catch (error) {
    res.send("error occurd");
  }
});

module.exports = Router;
