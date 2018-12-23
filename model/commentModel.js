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
const commentSchema = new Schema({
    user: {
        type: String,
        trim: true
    },
    comment: {
        type: String,
        trim: true
    }
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;