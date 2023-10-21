// Importing events 
const EventEmitter = require('events'); 
  
// Initializing event emitter instances  
var eventEmitter = new EventEmitter(); 
   
var listener1= (msg) => { 
    console.log("Message from listener1: " + msg); 
}; 
   
var listener2 = (msg) => { 
    console.log("Message from listener2: " + msg); 
}; 
  
// Registering listener1 and listener2 

eventEmitter.on('myEvent', listener1); 
eventEmitter.on('myEvent', listener1); 
eventEmitter.on('myEvent', listener2);
   
// Removing listener1 
//eventEmitter.removeListener('myEvent', listener1); 
   
// Triggering myEvent 
eventEmitter.emit('myEvent', "Event occurred"); 
  
// Removing all the listeners to myEvent 
eventEmitter.removeAllListeners('myEvent'); 
  
// Triggering myEvent 
eventEmitter.emit('myEvent', "Event occurred"); 