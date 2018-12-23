//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
const articleSchema = new Schema({
    headline: {
        type: String,
        trim: true
    },
    summary: {
        type: String,
        trim: false
    },
    url: {
        type: String,
        trim: true
    }
})

module.exports = articleSchema;