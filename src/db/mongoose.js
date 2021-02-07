const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/grandpaDB";

const options = {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options, () => console.log("db connected"));
