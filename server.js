//============================================================
// Dependencies
//============================================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
//============================================================
// PORT 
//============================================================
const PORT = process.env.PORT || 3000;
//============================================================
// Middleware
//============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "view/public")));
//============================================================
// MongoDB Connection
//============================================================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/web_scraperDB";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//============================================================
// Listener
//============================================================
const scrape = require("./controller/scraper");

app.get("/scrape", (req, res) => {
    scrape();
    res.end()
})


app.listen(PORT, () => { console.log(`Server listening on PORT ${PORT}`)})