const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
  userId: String,
  userComment: String,
  tweetLikes: {
    type: Number,
    default: 0,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    default: [],
  },
  retweetUsersId: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default : []
  },
});
module.exports = mongoose.model("Comment", CommentSchema);
