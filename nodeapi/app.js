const express = require("express");
const morgan = require("morgan")
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const MONGO_URI = require("./connections.js");
const bodyParser = require("body-parser");

dotenv.config();


//db
//mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(() => console.log('DB Connected'));
mongoose.connect(MONGO_URI.MONGO_URI, { useNewUrlParser: true } ).then(() => console.log('DB Connected'));
mongoose.connection.on("error", err => {
    console.log(`Db Connection error : ${err.message}`);
});




// mongoose.connection.on('error', function(error){
//      console.log(`Db Connection error : ${err.message}`);
// });



//Step 3.1
//bring in routes
const postRoutes= require('./routes/post');

//Step 2.1
// It is important to pass on the process to next phase through next()
const myOwnMiddleware = (req, res, next) => {
    console.log("middleware applied!!");
    //Step 3.2
    next();
};


//Step 2.0
//middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);
app.use(bodyParser.json());

app.use("/", postRoutes);

// //Step 3.0
// //from get request routing to the call back function 'getPosts'
// app.get("/", getPosts);

//Step 1 
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server is listeing... on :  ${port}`);
});
