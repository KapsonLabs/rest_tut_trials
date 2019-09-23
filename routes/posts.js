const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/' , async (req, res) => {
    try{
        const posts = await Post.find()
        res.json({status:200, data: posts})
    }catch(err){
        res.json({message:error})
    }
});

router.get('/specific' , (req, res) => {
    res.send('We are on specific post');
});

router.post('/' , async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    
    try{
        const postSaved = await post.save()
        res.json({status:200, data: postSaved})
    }catch(err){
        res.json({message: err})
    }
    
})

module.exports = router;