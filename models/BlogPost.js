const mongoose = require("mongoose");

const BlogPost = mongoose.Schema(
  {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
    },
    Image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Newpost = new mongoose.model("Newpost", BlogPost);

module.exports = Newpost;
