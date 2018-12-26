//============================================================
// Dependencies
//============================================================
const express = require("express");
const router = express.Router();
const scrape = require("./scraper");

router.get("/scrape", (req, res) => {
    scrape();
    console.log("Test pass.")
    res.end()
})


module.exports = router;