const express = require('express');
const postControllers = require('../controllers/post.js');


const router = express.Router();

router.get('/', postControllers.getPosts);
router.post('/post', postControllers.createPost);
module.exports = router;







// // Here all the routes are defined
// //Step 3.2
// exports.getPosts = (req, res) => {
//     res.send("Hello World from node js");
//     console.log("Console is printed");
// }

