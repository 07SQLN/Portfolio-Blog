require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

// ROUTES
const blogRoute = require("./routs/blog/blog"); //Suggest
const adminRoute = require("./routs/admin/admin");
const newsRoute = require("./routs/news/news");
const loginRoute = require("./routs/login/logins");

// models
const Post = require("./models/BlogPost");

app.use(express.urlencoded({ extended: false }));
//mongioose

//connection

// const { MongoClient } = require("mongodb");
const uri = process.env.DB_BLOG;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

// mongoose
//   .connect("mongodb://localhost:27017/project1")
//   .then(() => console.log("connection sucessful"));

//HBS

app.use(express.static("public"));

app.set("view engine", "hbs");

//PORTFOLIO
app.get("/", (req, res) => {
  res.render("index");
});

//BLOG
app.get("/blog", async (req, res) => {
  const post = await Post.find();

  res.render("blog", { post: post });
});

//BLOG SHOW
app.get("/show/:id", async (req, res) => {
  const post = await Post.findById(req.params.id);

  // res.send(Posts);
  res.render("show", { post: post });
});

//?????????????????????????
app.get("/news", (req, res) => {
  res.render("news");
});
//?????????????????????????
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//ADMIN PANNEL
//USE
app.use("/admin", adminRoute);
app.use(blogRoute);
app.use(loginRoute);

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
app.listen(port, () => {
  console.log("Connection Sucessful");
});
