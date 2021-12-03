const mongoose = require("mongoose");

const Admin = mongoose.Schema(
  {
    Username: {
      type: String,
    },
    Password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Owner = new mongoose.model("Owner", Admin);

module.exports = Owner;
