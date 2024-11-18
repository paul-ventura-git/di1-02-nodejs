const events = require('events');
const eventEmitter = new events.EventEmitter();

//console.log(eventEmitter);

//Create an event handler:
const myEventHandler = function () {
    console.log('Este es el EVENT HANDLER!');
}

const scream = 'abc'

//Assign the event handler to an event:
eventEmitter.on(scream, myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit(scream);