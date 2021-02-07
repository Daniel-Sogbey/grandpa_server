const mongoose = require("mongoose");

const Article = mongoose.model("Article", {
  id: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

module.exports = Article;
