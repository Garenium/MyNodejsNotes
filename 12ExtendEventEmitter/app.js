//The problem with calling EventEmitter like this 
//is we want it to make it uniform for all modules
//(all modules should ideally work with the same emitter object)
//So, we would like to make our own Emitter class instead
//We would make a class in logger instead (take the OO route)
//No need (not Object Oriented)
// const EventEmitter = require('events');
// const emitter = new EventEmitter();

//Our own (Object Oriented)
const Logger = require('./logger'); //Logger already extends EventEmitter
const logger = new Logger();

//Register a listener
logger.on('messageLogged', (arg) => {
    console.log('Listener called', arg);
});

logger.log('message');
