//============================================================
// Dependencies
//============================================================
const axios = require("axios");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
let db = mongoose.connection;
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

            console.log(article)
            // article.save((err, article) => {
            //     if (err) return console.log(err);
            //     console.log(article)
            // })
            
        })
    })
    
}

module.exports = scrape;