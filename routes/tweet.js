const express = require('express')
const router = express.Router()
const {fetchTweets,  createTweet, getTweet, deleteTweet, addTweetComment} = require("../controllers/tweet")

router.get('/',fetchTweets)
router.post('/',createTweet)
router.get('/:id',getTweet)
router.delete('/:id',deleteTweet)
//router.patch('/comment/:id',addTweetComment)
module.exports = router