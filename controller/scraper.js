//============================================================
// Dependencies
//============================================================
const axios = require("axios");
const cheerio = require("cheerio");
const db = require("../model");
//============================================================
// Scraper Function
//============================================================
function scrape() {
    axios.get("https://techreport.com/")
    .then(response => {
        let $ = cheerio.load(response.data);

        $("#news").each((i, element) => {
            let headline = $(element).children("a").text();
            let url = $(element).children("a").attr("href");

            if (headline && url) {
                db.news.insert({
                    headline: headline,
                    url: url
                },
                (err, inserted) => {
                    if (err) { console.log(err) }
                    else { console.log(inserted) }
                })
            }
        })
    })
}

module.exports = scrape;