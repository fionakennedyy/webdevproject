const express = require('express');
const Comment = require('../models/commentM');
const router = express.Router();

router

.delete('/deleteComment', async(req, res) => {
    try{
        await Post.deleteComment(req.body);
        res.send({success: "comment deleted"});
    }catch(error){
        res.status(401).send({message: error.message})
    }
})

.get("/getComments", (req, res) => {
    try {
      const posts = User.getComments();
      res.send(
      );
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

module.exports = router;