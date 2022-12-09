//Events are classes. It's a convention to have
//the first letter to be uppercase
const EventEmitter = require('events');
//emitter is an object
const emitter = new EventEmitter();

//Order is important
//First make a listener (a object a can emit)
//Then make emit it with emit(listener name)

//Register a listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
});

//raise the event messageLogged (we needed a listener before we emit like so)
emitter.emit('messageLogged');


