const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    title:  {
        type: String,
        required: true
    },
    text: String,
    date: {
        type: Date, 
        default: Date.now
    },
});

module.exports = mongoose.model('Blogs', BlogSchema)