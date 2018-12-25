//============================================================
// Dependencies
//============================================================
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
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
        trim: true,
        unique: true
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

articleSchema.plugin(uniqueValidator);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;