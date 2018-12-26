//============================================================
// Dependencies
//============================================================
const express = require("express");
const router = express.Router();
const scrape = require("./scraper");
const Article = require("../model/articleModel");
//============================================================
// Scrape Articles
//============================================================
router.get("/scrape", (req, res) => {
    scrape();
    console.log("Test pass.")
    res.end()
})
//============================================================
// Get Articles from Database
//============================================================
router.get("/articles", (req, res) => {
    let newsArticles = Article.find({})
    res.json(newsArticles);
    // res.end()
})

module.exports = router;