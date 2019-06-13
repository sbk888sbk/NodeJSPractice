// node myFile.js

const pendingTimers = [];
const pedingOSTasks = [];
const pendingOperations = [];

// New timers, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContine(){
    //Check one : Any pending setTimeout, setInterval, setImmediate?
    //Check two : Any pending OS taks? (Like server listening to port)
    //Check three : Any pending long running operatons? (Like fs module)
    return pendingTimers.length || pedingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while(shouldContine(()){
    // 1)  Node looks at pendingTimers and sees if any fuctions
    // are ready to be called. setTimeout, setInteval

    // 2) Node looks at pendingOSTaks and pendingOperations and 
    // calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a new pedingOSTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events 
});

// exit back to terminal