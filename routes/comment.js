const express = require('express')
const router = express.Router()
const {createComment} = require("../controllers/comment")


router.post('/:tweetId',createComment)
module.exports = router