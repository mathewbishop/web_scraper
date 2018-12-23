//============================================================
// Dependencies
//============================================================
const express = require("express");
const app = express();
const mongoose = require("mongoose");
//============================================================
// PORT 
//============================================================
const PORT = process.env.PORT || 3000;
//============================================================
// Middleware
//============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//============================================================
// MongoDB Connection
//============================================================
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/web_scraperDB";
mongoose.connect(MONGODB_URI);
//============================================================
// Listener
//============================================================
app.listen(PORT, () => { console.log(`Server listening on PORT ${PORT}`)})