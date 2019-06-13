//I am a child, I'm going to act like a server
//and do nothing else
const express = require('express');
const crypto = require('crypto');
const app = express();
const Worker = require('webworker-threads').Worker;


app.get('/', (req, res) => {
    const worker = new Worker(function () {
        this.onmessage = function () {
            let counter = 0;
            while (counter < 1e9) {
                counter++;
            }
            postMessage(counter);
        }
    });

    worker.onmessage = function (message) {
        console.log(message.data);
        res.send(''+ message.data)
    }
    worker.postMessage();
});


app.get('/fast', (req, res) => {
    res.send('This is fast!!!');
});
app.listen(3000);

//Lesson 35 will resume back later as this is an advanced course!!!