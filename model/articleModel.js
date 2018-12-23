//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
//============================================================
// Reference to Mongoose Schema constructor
//============================================================
const Schema = mongoose.Schema;
//============================================================
// Article Schema 
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
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;