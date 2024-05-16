const Comment = require("../models/comment");
const { addTweetComment } = require("./tweet");

//create comment
const createComment = async (req,res)=>{
    try{
        const newComment = await Comment.create(req.body);
        await addTweetComment(newComment._id,req.params.tweetId)
        res.status(201).send({ success: true, result: newComment });
    }
    catch (error){
        console.log(error)
        return res.status(400).json({ success: false });
    }
}

module.exports = {createComment}