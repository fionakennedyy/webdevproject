const express = require('express');
const User = require('../models/postM');
const router = express.Router();

router
.post('/createPost', async (req, res) => {
    try{
        const post = await Post.createPost(req.body);
        res.send(post);
    }catch(error){
        res.status(401).send({message: error.message});
    }
})

.delete('/deletePost', async(req, res) => {
    try{
        await Post.deletePost(req.body.postTitle);
        res.send({success: "post deleted"});
    }catch(error){
        res.status(401).send({message: error.message})
    }
})

module.exports = router;