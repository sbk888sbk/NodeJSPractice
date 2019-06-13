
const Post = require('../models/post');
exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title : 'First Post'},
            {title : 'Second Post'}
        ]
    });
    console.log("Console is printed");
}


exports.createPost = (req, res) => {
    const post = new Post(req.body);
    console.log("CREATING POST : ",req.body)
    post.save((err, result) =>{
        if(err){
            return res.status(400).json({
                error: err
            });
        }
        else {
        res.status(200).json
        res.status(200).json({

        })}
    });
    
};