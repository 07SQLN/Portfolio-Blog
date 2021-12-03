const mongoose = require("mongoose");

const BlogSuggestion = mongoose.Schema(
  {
    suggestion: {
      type: String,
    },
  },
  { timestamps: true }
);

const NewSuggestion = new mongoose.model("NewSuggestion", BlogSuggestion);

module.exports = NewSuggestion;
