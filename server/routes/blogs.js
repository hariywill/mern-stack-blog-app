var express = require('express');
var router = express.Router();
var Blog = require('../models/Blog')

/* GET blogs listing. */
router.get('/', async (req, res, next) => {
    try {
        var allBlogs = await Blog.find()
        res.json(allBlogs)
    } catch (error) {
        res.json({ Message: error})
    }
    
});

/* GET a specific blog. */
router.get('/:blogId', async (req, res, next) => {
    var id = req.params.blogId
    try {
        var blog = await Blog.findById(id)
        res.json(blog)
    } catch (error) {
        res.json({ Message: error})
    }
    
});

/* POST new blog */
router.post('/', async (req, res, next) => {
    var { title, text } = await req.body
    var blog = new Blog({
        title: title,
        text: text,
    })
    try {
        var newBlog = await blog.save()
        res.json(newBlog) 
    } catch (error) {
        res.json({ Message: error})
    }
    
});

/* DELETE new blog */
router.delete('/:blogId', async (req, res, next) => {
    var id = req.params.blogId
    try {
        var removedBlog = await Blog.remove({ _id: id })
        res.json(removedBlog)
    } catch (error) {
        res.json({ Message: error})
    }
    
});

/* UPDATE new blog */
router.patch('/:blogId', async (req, res, next) => {
    var id = req.params.blogId
    var title = req.body.title
    console.log(id)
    console.log(title)
    try {
        var updatedBlog = await Blog.updateOne(
            { _id: id },
            { $set: { "title": title }}
        ) 
        res.json(updatedBlog)
    } catch (error) {
        res.json(error)
    }
    
});

module.exports = router;
