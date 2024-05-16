const mongoose = require("mongoose");
const TweetSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tweetContent: String,
  tweetLikes: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default : []
  },
  comments: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    default: [],
  },
  time: {
    type: Date,
    default: Date.now,
  },
  retweetUsersId: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    default : []
  },
  
});
module.exports = mongoose.model("Tweet", TweetSchema);

class Tweet {
  constructor(id, userId, tweeetContext) {
    this.id = id;
    this.userId = userId;
    this.tweeetContext = tweeetContext;
    this.tweetLikes = 0;
    //this.retweetUsersId = [];
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  addRetweetUserId(userId) {
    this.retweetUsersId.push(userId);
  }

  likeTweet() {
    this.tweetLikes += 1;
  }

  dislikeTweet() {
    this.tweetLikes -= 1;
  }
}
