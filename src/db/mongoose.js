const mongoose = require("mongoose");

const url =
  "mongodb+srv://DanielSogbey:daniel006@cluster0.c7hn7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const options = {
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options, () => console.log("db connected"));
