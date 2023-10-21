
// Importing events 
var events = require('events');

// Initializing event emitter instances 
var eventEmitter = new events.EventEmitter();

// Registering to myEvent
eventEmitter.on('myEvent', (msg)=>{
    console.log(msg);
})

// Triggering myEvent 
eventEmitter.emit('myEvent', 'First event');