const express = require("express");
require("./db/mongoose");
const articleRouter = require("./routes/article");
const app = express();

app.use(express.json());
app.use(articleRouter);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("Server running successfully on port ", port)
);
