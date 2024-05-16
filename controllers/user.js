const User = require("../models/user");

const likeTweet = async (req, res) => {
  try {
   
    const likeTweet = await User.findByIdAndUpdate(
        req.body.userId,
      { $push: { likedTweets: req.body.tweetId } },
      { new: true }
    );
  } catch {}
};

const unlikeTweet = async (req, res) => {
    try {
      
      const likeTweet = await User.findByIdAndUpdate(
        req.body.userId,
        { $pull: { likedTweets: req.body.tweetId } },
        { new: true }
      );
    } catch {}
  };

  module.exports ={
    likeTweet,
    unlikeTweet
  }