//============================================================
// Dependencies
//============================================================
const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../model/articleModel");
//============================================================
// Scraper Function
//============================================================
function scrape() {
    axios.get("https://techreport.com/")
    .then(response => {
        let $ = cheerio.load(response.data);
        
        $("#news tbody tr td").not(".bubble").each((i, element) => {
            let headline = $(element).children("a").text();
            let url = $(element).children("a").attr("href");

            let article = new Article({
                headline: headline,
                url: url
            })


            article.save((err) => {
                if (err) return console.log(err);
            })
            
        })
    })
    
}

module.exports = scrape;