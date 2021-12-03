const express = require("express");
const app = express();
const Router = express.Router();

Router.get("/news", (req, res) => {
  res.render("news");
});
