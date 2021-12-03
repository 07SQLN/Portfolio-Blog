const mongoose = require("mongoose");

const BlogUser = mongoose.Schema(
  {
    User: {
      type: String,
    },
  },
  { timestamps: true }
);

const NewUser = new mongoose.model("NewUser", BlogUser);

module.exports = NewUser;
