process.env.UVTHREADPOOL_SIZE = 1;
const cluster = require('cluster');

//Is the file being executed in master mode?
if (cluster.isMaster){
    // Cause index.js to be executed *again* but 
    // in child mode
    cluster.fork();
    cluster.fork();
} else {
    //I am a child, I'm going to act like a server
    //and do nothing else
    const express = require('express');
    const crypto = require('crypto');
    const app = express();

    app.get('/', (req, res) => {  
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
            res.send('Hi There');
        });
    });

    app.get('/fast', (req,res) => {
        res.send('This is fast!!!');
    });
    
    app.listen(3000);
}


