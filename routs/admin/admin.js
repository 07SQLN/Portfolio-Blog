const express = require("express");
const app = express();
const route = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const Postmodel = require("../../models/BlogPost");
const Suggestmodel = require("../../models/suggest");
// BLOG SHOW
// route.get("/show", (req, res) => {
//   res.render("show");
// });
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// ADMIN
route.get("/dashbord", (req, res) => {
  res.render("Admin pannel/index");
});

//YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY

//*************************************** */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uplodadsBlog/Images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

var uploads = multer({ storage: storage, limits: { fileSize: 1000000 } });

///*************************************** */

//nwes user
route.get("/NewUsers", (req, res) => {
  res.render("Admin pannel/nwUser");
});
//Blog User
route.get("/BlogUsers", (req, res) => {
  res.render("Admin pannel/register");
});
//Suggest
route.get("/Suggestions", async (req, res) => {
  const suggestion = await Suggestmodel.find();
  res.render("Admin pannel/sugestions", { suggestion: suggestion });
});

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
route.get("/Create", (req, res, next) => {
  res.render("Admin pannel/table");
});
route.post("/Create", uploads.single("Image"), async (req, res) => {
  try {
    const NewPost = new Postmodel({
      title: req.body.title,
      subtitle: req.body.subtitle,
      description: req.body.description,
      author: req.body.author,
      Image: req.file.filename,
    });
    const savepost = await NewPost.save();
    res.render("Admin pannel/index");
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;
