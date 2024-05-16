const express = require("express");
const router = express.Router();
const { likeTweet, unlikeTweet } = require("../controllers/user");

router.post("/like",likeTweet)
router.post("/unlike",unlikeTweet)

module.exports = router
