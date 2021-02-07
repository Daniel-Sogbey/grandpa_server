const express = require("express");
const Article = require("../models/article");

const router = express.Router();

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});

    if (articles.length == 0) {
      res.status(400).send("Not found");
    }

    res.status(200).send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/articles", async (req, res) => {
  const article = new Article(req.body);

  try {
    await article.save();
    res.status(201).send(article);
  } catch (error) {
    res.status(401).send(error);
  }
});

module.exports = router;
