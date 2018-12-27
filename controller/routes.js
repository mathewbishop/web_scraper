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
    Article.find()
    .then(articles => {
        res.json(articles)
    })
})
//============================================================
// POST Comment
//============================================================
router.post("/comment", (req, res) => {
    let id = req.body.id
    let comment = req.body.comment
    // Article.where({ _id: id }).update({ $push: { "comments": comment }})
    Article.updateOne(
        { _id: id },
        { $push: { comments: comment } },
        (err) => {
            if (err) console.log(err)
        }
    )
    res.end()
})
//============================================================
// DELETE Comment
//============================================================
router.delete("/comment", (req, res) => {
    let comment = req.body.comment
    let id = req.body.id
    Article.updateOne(
        { _id: id },
        { $pull: { comments: comment } },
        (err) => {
            if (err) console.log(err)
        } 
    )
    res.end()
})
module.exports = router;