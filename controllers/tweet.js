const Tweet = require("../models/tweet");

//get all tweets
const fetchTweets = async (req, res) => {
  //console.log(req.body.tweetContent)
  try {
    const tweets = await Tweet.find().populate("userId");
    res.status(201).json({ success: true, result: tweets });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false });
  }
};

//create tweet
const createTweet = async (req, res) => {
  try {
    const newTweet = await Tweet.create(req.body);
    //const newTweet = {id : tweets.length+1 , userId : userId, tweetContent : tweetContent}
    res.status(201).send({ success: true, result: newTweet });
  } catch {
    return res.status(400).json({ success: false });
  }
};

//get the tweet providing id
const getTweet = async (req, res) => {
  try {
    const tweet = await Tweet.findById(req.params.id).populate({
      path: "comments",
      populate: { path: "userId", model: "User" },
    }).populate("userId");
    console.log(tweet);
    res.status(201).send({ success: true, tweet: tweet });
  } catch {
    return res.status(404).json({ success: false });
  }
};

//delete tweet providing id
const deleteTweet = async (req, res) => {
  try {
    const deletedTweetInfo = await Tweet.deleteOne({ _id: req.params.id });
    res.status(201).send({ success: true, tweet: deletedTweetInfo });
  } catch {
    return res.status(404).json({ success: false });
  }
};

const addTweetComment = async (commentId, tweetId) => {
  console.log("patch");

  const updatedTweet = await Tweet.findByIdAndUpdate(
    tweetId,
    { $push: { comments: commentId } },
    { new: true }
  );
};



module.exports = {
  fetchTweets,
  createTweet,
  getTweet,
  deleteTweet,
  addTweetComment,
};
