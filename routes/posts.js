const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//get all posts
router.get('/' , async (req, res) => {
    try{
        const posts = await Post.find()
        res.json({status:200, data: posts})
    }catch(err){
        res.json({message:err})
    }
});

//get a specific post
router.get('/:postId' , async (req, res) => {
    try{
        const specificPost = await Post.findById(req.params.postId)
        res.json({status:200, data: specificPost})
    }catch(err){
        res.json({message:err})
    }
});

//create a new post
router.post('/' , async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    
    try{
        const postSaved = await Post.save()
        res.json({status:200, data: postSaved})
    }catch(err){
        res.json({message: err})
    }
    
})

//delete a post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({_id: req.params.postId})
        res.json({status:200, data: removedPost})
    }catch(err) {
        res.json({message: err})
    }
})

//update a post
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Post.updateOne({
            _id: req.params.postId},
            {$set: {title: req.body.title
        }})
        res.json({status:200, data:updatedPost})
    }catch(err){
        res.json({message:err})
    }
})

module.exports = router;