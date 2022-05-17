const express = require('express');
const Post = require('../models/postM');
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

.get("/getPosts", (req, res) => {
    try {
      const posts = User.getPosts();
      res.send(
          []
          //[{PostId: 0, PostTitle: "ween is the best band", PostContent: "soooo good", PostAuthor: "soupygal", PostCommentnum: 8},
          //{PostId: 1, PostTitle: "ween is the worst band", PostContent: "soooo awful", PostAuthor: "soupygal", PostCommentnum: 5}//]
      );
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

module.exports = router;