//============================================================
// Dependencies
//============================================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./controller/routes");
//============================================================
// PORT 
//============================================================
const PORT = process.env.PORT || 3000;
//============================================================
// Middleware
//============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("view/public"));
app.use(routes)
//============================================================
// MongoDB Connection
//============================================================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/web_scraperDB";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
//============================================================
// Get Info On DB Connection
//============================================================
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to database.")
});
//============================================================
// Listener
//============================================================
app.listen(PORT, () => { console.log(`Server listening on PORT ${PORT}`)})